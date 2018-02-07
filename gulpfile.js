const gulp = require('gulp');
const browserSync = require('browser-sync');
const theo = require('gulp-theo');
const gulpLoadPlugins = require('gulp-load-plugins');
const runSequence = require('run-sequence');
const colorMapScss = require('./formats/color-map.scss.js');
const sketchpalette = require('./formats/sketchpalette.js');
const aseJSON = require('./formats/ase.json.js');

const $ = gulpLoadPlugins();

theo.registerFormat('color-map.scss', colorMapScss);
theo.registerFormat('sketchpalette', sketchpalette);
theo.registerFormat('ase.json', aseJSON);

const webFormats = ['scss', 'common.js', 'json', 'custom-properties.css', 'map.scss'];
const colorFormats = ['color-map.scss', 'sketchpalette', 'ase.json'];

gulp.task('web-formats', () =>
  webFormats.map((format) =>
    gulp
      .src('./tokens/*.yml')
      .pipe(
        theo.plugin({
          transform: {type: 'web'},
          format: {type: format},
        }),
      )
      .on('error', (err) => {
        throw new Error(err);
      })
      .pipe(gulp.dest('./dist')),
  ),
);

gulp.task('color-formats', () =>
  colorFormats.map((format) =>
    gulp
      .src('./tokens/colors.yml')
      .pipe(
        theo.plugin({
          transform: {type: 'web'},
          format: {type: format},
        }),
      )
      .on('error', (err) => {
        throw new Error(err);
      })
      .pipe(gulp.dest('./dist')),
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
    .src('./tokens/index.yml')
    .pipe(
      theo.plugin({
        transform: {type: 'web'},
        format: {type: 'docs.html'},
      }),
    )
    .pipe($.rename('index.html'))
    .on('error', (err) => {
      throw new Error(err);
    })
    .pipe(gulp.dest('./docs'));
});

// Static Server (development)
gulp.task('watch', runSequence(['web-formats', 'color-formats']), () => {
  runSequence('docs');
  browserSync({
    open: false,
    notify: false,
    server: 'docs',
  });

  gulp.watch(['tokens/*.yml'], ['web-formats', 'color-formats', 'docs']);
  gulp.watch('docs/**/*.scss', ['docs:styles']);
  gulp.watch(['formats/**/*.*', 'gulpfile.js'], $.restart);
  gulp.watch(['docs/**/*.html']).on('change', browserSync.reload);
});

gulp.task('default', runSequence(['web-formats', 'color-formats']));
