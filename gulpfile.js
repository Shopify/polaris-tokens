const gulp = require('gulp');
const browserSync = require('browser-sync');
const theo = require('theo');
const gulpLoadPlugins = require('gulp-load-plugins');
const runSequence = require('run-sequence');

const $ = gulpLoadPlugins();

theo.registerValueTransform(
  'filter',
  (prop) => prop.get('type') === 'color',
  (prop) => prop.getIn(['meta', 'filter']) || 'none',
);
theo.registerTransform('filter', ['filter']);

theo.registerFormat(
  'spacing-map.scss',
  require('./formats/spacing-map.scss.js'),
);
theo.registerFormat('color-map.scss', require('./formats/color-map.scss.js'));
theo.registerFormat('sketchpalette', require('./formats/sketchpalette.js'));
theo.registerFormat('ase.json', require('./formats/ase.json.js'));
theo.registerFormat('android.xml', require('./formats/android.xml.js'));

theo.registerFormat('d.ts', require('./formats/d.ts'));

const webFormats = [
  'scss',
  'common.js',
  'json',
  'custom-properties.css',
  'map.scss',
  'raw.json',
];

const colorFormats = [
  {transformType: 'android', formatType: 'android.xml'},
  {transformType: 'web', formatType: 'color-map.scss'},
  {transformType: 'web', formatType: 'sketchpalette'},
  {transformType: 'web', formatType: 'ase.json'},
];

const spacingFormats = [{transformType: 'web', formatType: 'spacing-map.scss'}];

const colorFilterFormats = [
  'scss',
  'common.js',
  'json',
  'custom-properties.css',
  'map.scss',
  'raw.json',
  'color-map.scss',
];

// Hack to ensure Sass maps are prefixed with `polaris-`
// (Theo relies on the filename to name all Sass maps)
const addPrefix = {prefix: 'polaris-'};

const removePrefix = (gulpRenameOptions) => {
  gulpRenameOptions.basename = gulpRenameOptions.basename.replace(
    'polaris-',
    '',
  );
  return gulpRenameOptions;
};

const filterRename = {basename: 'color-filters'};

gulp.task('web-formats', () =>
  webFormats.map((format) =>
    gulp
      .src('tokens/*.yml')
      .pipe($.rename(addPrefix))
      .pipe(
        $.theo({
          transform: {type: 'web'},
          format: {type: format},
        }),
      )
      .pipe($.rename(removePrefix))
      .on('error', (err) => {
        throw new Error(err);
      })
      .pipe(gulp.dest('dist')),
  ),
);

gulp.task('typings', () =>
  gulp
    .src('tokens/index.yml')
    .pipe($.rename(addPrefix))
    .pipe(
      $.theo({
        transform: {type: 'web'},
        format: {type: 'd.ts'},
      }),
    )
    .pipe($.rename(removePrefix))
    .on('error', (err) => {
      throw new Error(err);
    })
    .pipe(gulp.dest('dist')),
);

gulp.task('color-filters', () =>
  colorFilterFormats.map((format) =>
    gulp
      .src('tokens/colors.yml')
      .pipe($.rename(filterRename))
      .pipe($.rename(addPrefix))
      .pipe(
        $.theo({
          transform: {type: 'filter'},
          format: {type: format},
        }),
      )
      .pipe($.rename(removePrefix))
      .on('error', (err) => {
        throw new Error(err);
      })
      .pipe(gulp.dest('dist')),
  ),
);

gulp.task('spacing-formats', () =>
  spacingFormats.map(({transformType, formatType}) =>
    gulp
      .src('tokens/spacing.yml')
      .pipe($.rename(addPrefix))
      .pipe(
        $.theo({
          transform: {type: transformType, includeMeta: true},
          format: {type: formatType},
        }),
      )
      .pipe($.rename(removePrefix))
      .on('error', (err) => {
        throw new Error(err);
      })
      .pipe(gulp.dest('dist')),
  ),
);

gulp.task('color-formats', () =>
  colorFormats.map(({transformType, formatType}) =>
    gulp
      .src('tokens/colors.yml')
      .pipe($.rename(addPrefix))
      .pipe(
        $.theo({
          transform: {type: transformType, includeMeta: true},
          format: {type: formatType},
        }),
      )
      .pipe($.rename(removePrefix))
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
    .pipe($.rename(addPrefix))
    .pipe(
      $.sass
        .sync({
          precision: 10,
        })
        .on('error', $.sass.logError),
    )
    .pipe($.rename(removePrefix))
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
gulp.task(
  'watch',
  runSequence(['web-formats', 'spacing-formats', 'color-formats']),
  () => {
    runSequence('docs');
    browserSync({
      open: false,
      notify: false,
      server: 'docs',
    });

    gulp.watch(
      ['tokens/*.yml'],
      ['web-formats', 'typings', 'spacing-formats', 'color-formats', 'docs'],
    );
    gulp.watch('docs/**/*.scss', ['docs:styles']);
    gulp.watch(['formats/**/*.*', 'gulpfile.js'], $.restart);
    gulp.watch(['docs/**/*.html']).on('change', browserSync.reload);
  },
);

gulp.task(
  'default',
  runSequence([
    'web-formats',
    'typings',
    'color-filters',
    'spacing-formats',
    'color-formats',
  ]),
);
