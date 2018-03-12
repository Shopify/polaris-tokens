const gulp = require('gulp');
const browserSync = require('browser-sync');
const theo = require('theo');
const gulpLoadPlugins = require('gulp-load-plugins');
const runSequence = require('run-sequence');

const $ = gulpLoadPlugins();

theo.registerFormat('color-map.scss', require('./formats/color-map.scss.js'));
theo.registerFormat('sketchpalette', require('./formats/sketchpalette.js'));
theo.registerFormat('ase.json', require('./formats/ase.json.js'));

theo.registerFormat('d.ts', require('./formats/d.ts'));

const webFormats = [
  'scss',
  'common.js',
  'json',
  'custom-properties.css',
  'map.scss',
];
const colorFormats = ['color-map.scss', 'sketchpalette', 'ase.json'];

gulp.task('web-formats', () =>
  webFormats.map((format) =>
    gulp
      .src('tokens/*.yml')
      .pipe(
        $.theo({
          transform: {type: 'web'},
          format: {type: format},
        }),
      )
      .on('error', (err) => {
        throw new Error(err);
      })
      .pipe(gulp.dest('dist')),
  ),
);

gulp.task('typings', () =>
  gulp
    .src('tokens/index.yml')
    .pipe(
      $.theo({
        transform: {type: 'web'},
        format: {type: 'd.ts'},
      }),
    )
    .on('error', (err) => {
      throw new Error(err);
    })
    .pipe(gulp.dest('dist')),
);

gulp.task('color-formats', () =>
  colorFormats.map((format) =>
    gulp
      .src('tokens/colors.yml')
      .pipe(
        $.theo({
          transform: {type: 'web', includeMeta: true},
          format: {type: format},
        }),
      )
      .on('error', (err) => {
        throw new Error(err);
      })
      .pipe(gulp.dest('dist')),
  ),
);

gulp.task('docs:styles', () =>
  gulp
    .src('docs/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe(
      $.sass
        .sync({
          precision: 10,
        })
        .on('error', $.sass.logError),
    )
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('docs'))
    .pipe(browserSync.stream({match: '**/*.css'})),
);

gulp.task('docs', ['docs:styles'], () => {
  const docsHTML = require('./formats/docs.html.js');
  theo.registerFormat('docs.html', docsHTML);
  return gulp
    .src('tokens/index.yml')
    .pipe(
      $.theo({
        transform: {type: 'web'},
        format: {type: 'docs.html'},
      }),
    )
    .pipe($.rename('index.html'))
    .on('error', (err) => {
      throw new Error(err);
    })
    .pipe(gulp.dest('docs'));
});

// Static Server (development)
gulp.task('watch', runSequence(['web-formats', 'color-formats']), () => {
  runSequence('docs');
  browserSync({
    open: false,
    notify: false,
    server: 'docs',
  });

  gulp.watch(
    ['tokens/*.yml'],
    ['web-formats', 'typings', 'color-formats', 'docs'],
  );
  gulp.watch('docs/**/*.scss', ['docs:styles']);
  gulp.watch(['formats/**/*.*', 'gulpfile.js'], $.restart);
  gulp.watch(['docs/**/*.html']).on('change', browserSync.reload);
});

gulp.task('default', runSequence(['web-formats', 'typings', 'color-formats']));
