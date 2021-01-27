const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const theo = require('theo');
const ms = require('ms');

const $ = gulpLoadPlugins();

const addPrefix = {prefix: 'polaris-'};

const removePrefix = (gulpRenameOptions) => {
  gulpRenameOptions.basename = gulpRenameOptions.basename.replace(
    'polaris-',
    '',
  );
  return gulpRenameOptions;
};

theo.registerValueTransform(
  'timing/ms-unitless',
  (prop) => prop.get('type') === 'time',
  (prop) => (prop.get('value') === 0 ? 0 : ms(prop.get('value'))),
);

const {tokenify} = require('./formats/tokens');

theo.registerTransform('theme', ['color/hex']);
theo.registerTransform('web/js', ['color/rgb', 'timing/ms-unitless']);

theo.registerFormat('android.xml', require('./formats/android.xml.js'));
theo.registerFormat('ios.json', require('./formats/ios.json.js'));
theo.registerFormat('figma.json', require('./formats/figma.json.js'));
theo.registerFormat(
  'polaris.custom-properties.css',
  require('./formats/polaris.custom-properties.css.js'),
);

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
  {transformType: 'raw', formatType: 'figma.json'},
  {transformType: 'web', formatType: 'polaris.custom-properties.css'},
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
    .pipe(gulp.dest('dist-modern/theme'));
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
              transform: {type: transformType, includeMeta: true},
              format: {type: formatType},
            }),
          )
          .pipe($.rename(removePrefix))
          .on('error', (err) => {
            throw new Error(err);
          })
          .pipe(gulp.dest('dist-modern/palette')),
      ),
  );
  done();
});

gulp.task('default', gulp.series(['themes', 'palettes']));
