const gulp = require('gulp');
const browserSync = require('browser-sync');
const theo = require('gulp-theo');
const colorMapScss = require('./formats/color-map.scss.js');
const sketchpalette = require('./formats/sketchpalette.js');
const aseJSON = require('./formats/ase.json.js');

theo.registerFormat('color-map.scss', colorMapScss);
theo.registerFormat('sketchpalette', sketchpalette);
theo.registerFormat('ase.json', aseJSON);

const webFormats = ['scss', 'json', 'custom-properties.css'];
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

gulp.task('documentation', () =>
  gulp
    .src('./tokens/index.yml')
    .pipe(
      theo.plugin({
        transform: {type: 'web'},
        format: {type: 'html'},
      }),
    )
    .on('error', (err) => {
      throw new Error(err);
    })
    .pipe(gulp.dest('./docs')),
);

// Static Server (development)
gulp.task('watch', ['documentation'], () => {
  browserSync({
    notify: false,
    server: 'docs',
  });

  gulp.watch(['tokens/*.yml', 'formats/**/*.*'], ['documentation']);
  gulp.watch(['docs/**/*.*']).on('change', browserSync.reload);
});

gulp.task('default', ['web-formats', 'color-formats', 'documentation']);
