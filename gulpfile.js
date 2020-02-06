const gulp = require('gulp');
const browserSync = require('browser-sync');
const theo = require('theo');
const gulpLoadPlugins = require('gulp-load-plugins');
const ms = require('ms');

const $ = gulpLoadPlugins();

theo.registerValueTransform(
  'filter',
  (prop) => prop.get('type') === 'color',
  (prop) => prop.getIn(['meta', 'filter']) || 'none',
);

theo.registerTransform('filter', ['filter']);

theo.registerValueTransform(
  'timing/ms-unitless',
  (prop) => prop.get('type') === 'time',
  (prop) => (prop.get('value') === 0 ? 0 : ms(prop.get('value'))),
);

theo.registerTransform('web/js', ['color/rgb', 'timing/ms-unitless']);

theo.registerFormat(
  'spacing-map.scss',
  require('./formats/spacing-map.scss.js'),
);
theo.registerFormat('color-map.scss', require('./formats/color-map.scss.js'));
theo.registerFormat('sketchpalette', require('./formats/sketchpalette.js'));
theo.registerFormat('ase.json', require('./formats/ase.json.js'));
theo.registerFormat('android.xml', require('./formats/android.xml.js'));
theo.registerFormat('ios.json', require('./formats/ios.json.js'));

theo.registerFormat('d.ts', require('./formats/d.ts'));

const webFormats = [
  {transformType: 'web', formatType: 'scss'},
  {transformType: 'web/js', formatType: 'common.js'},
  {transformType: 'web/js', formatType: 'json'},
  {transformType: 'web', formatType: 'custom-properties.css'},
  {transformType: 'web', formatType: 'map.scss'},
  {transformType: 'web', formatType: 'raw.json'},
];

const colorFormats = [
  {transformType: 'android', formatType: 'android.xml'},
  {transformType: 'ios', formatType: 'ios.json'},
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

const {tokenify} = require('./formats/tokens');

theo.registerTransform('theme', ['color/hex']);
theo.registerFormat('light.yml', tokenify('light'));
theo.registerFormat('dark.yml', tokenify('dark'));

const colorSchemes = [
  {transformType: 'raw', formatType: 'light.yml'},
  {transformType: 'raw', formatType: 'dark.yml'},
];

const colorSystemFormats = [
  {transformType: 'web/js', formatType: 'json'},
  {transformType: 'android', formatType: 'android.xml'},
  {transformType: 'ios', formatType: 'ios.json'},
];

gulp.task('themes', (done) => {
  gulp
    .src('tokens/themes/*.yml')
    .pipe($.rename(addPrefix))
    .pipe(
      $.theo({
        transform: {type: 'theme'},
        format: {type: 'json'},
      }),
    )
    .pipe($.rename(removePrefix))
    .on('error', (err) => {
      throw new Error(err);
    })
    .pipe(gulp.dest('dist-modern/tokens'));
  done();
});

gulp.task('palettes', (done) => {
  colorSchemes.map(
    ({transformType: schemeTransform, formatType: schemeFormat}) =>
      colorSystemFormats.map(({transformType, formatType}) =>
        gulp
          .src('tokens/themes/*.yml')
          .pipe(
            $.theo({
              transform: {type: schemeTransform},
              format: {type: schemeFormat},
            }),
          )
          .pipe($.rename(addPrefix))
          .pipe(
            $.theo({
              transform: {type: transformType},
              format: {type: formatType},
            }),
          )
          .pipe($.rename(removePrefix))
          .on('error', (err) => {
            throw new Error(err);
          })
          .pipe(gulp.dest('dist-modern/tokens')),
      ),
  );
  done();
});

gulp.task('web-formats', (done) => {
  webFormats.map(({transformType, formatType}) =>
    gulp
      .src('tokens/*.yml')
      .pipe($.rename(addPrefix))
      .pipe(
        $.theo({
          transform: {type: transformType},
          format: {type: formatType},
        }),
      )
      .pipe($.rename(removePrefix))
      .on('error', (err) => {
        throw new Error(err);
      })
      .pipe(gulp.dest('dist')),
  );
  done();
});

gulp.task('typings', (done) => {
  gulp
    .src('tokens/index.yml')
    .pipe($.rename(addPrefix))
    .pipe(
      $.theo({
        transform: {type: 'web/js'},
        format: {type: 'd.ts'},
      }),
    )
    .pipe($.rename(removePrefix))
    .on('error', (err) => {
      throw new Error(err);
    })
    .pipe(gulp.dest('dist'));
  done();
});

const filterRename = {basename: 'color-filters'};

gulp.task('color-filters', (done) => {
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
  );
  done();
});

gulp.task('spacing-formats', (done) => {
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
  );
  done();
});

gulp.task('color-formats', (done) => {
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
  );
  done();
});

gulp.task('docs:styles', (done) => {
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
    .pipe(browserSync.stream({match: '**/*.css'}));
  done();
});

gulp.task(
  'docs',
  gulp.series('docs:styles', (done) => {
    const docsHTML = require('./formats/docs.html.js');
    theo.registerFormat('docs.html', docsHTML);
    gulp
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
    done();
  }),
);

function serve(done) {
  browserSync.init({
    open: false,
    notify: false,
    server: 'docs',
  });
  done();
}

function reload(done) {
  browserSync.reload();
  done();
}

function watch() {
  gulp.watch(
    ['tokens/*.yml', 'tokens/themes/*.yml'],
    gulp.series([
      'web-formats',
      'typings',
      'spacing-formats',
      'color-formats',
      'docs',
      'themes',
      'palettes',
    ]),
  );
  gulp.watch('docs/**/*.scss', gulp.series('docs:styles'));
  gulp.watch(['formats/**/*.*', 'gulpfile.js'], gulp.series($.restart));
  gulp.watch(['docs/**/*.html'], gulp.series(reload));
}

gulp.task(
  'watch',
  gulp.series(
    [
      'web-formats',
      'spacing-formats',
      'color-formats',
      'docs',
      'themes',
      'palettes',
    ],
    gulp.series(serve, watch),
  ),
);

gulp.task(
  'default',
  gulp.series([
    'web-formats',
    'typings',
    'color-filters',
    'spacing-formats',
    'color-formats',
    'themes',
    'palettes',
  ]),
);
