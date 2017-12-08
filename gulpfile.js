const gulp = require('gulp');
const theo = require('gulp-theo');
const customMapScss = require('./formats/custom.map.scss.js');
const sketchpalette = require('./formats/sketchpalette.js');
const aseJSON = require('./formats/ase.js');

theo.registerFormat('custom.map.scss', customMapScss);
theo.registerFormat('sketchpalette', sketchpalette);
theo.registerFormat('ase.json', aseJSON);

gulp.task('custom-map-scss', () =>
  gulp
    .src('tokens/colors.yml')
    .pipe(
      theo.plugin({
        transform: {type: 'web'},
        format: {type: 'custom.map.scss'},
      }),
    )
    .on('error', err => {
      throw new Error(err);
    })
    .pipe(gulp.dest('dist')),
);

gulp.task('sketchpalette', () =>
  gulp
    .src('tokens/colors.yml')
    .pipe(
      theo.plugin({
        transform: {type: 'web'},
        format: {type: 'sketchpalette'},
      }),
    )
    .on('error', err => {
      throw new Error(err);
    })
    .pipe(gulp.dest('dist')),
);

gulp.task('ase', () =>
  gulp
    .src('tokens/colors.yml')
    .pipe(
      theo.plugin({
        transform: {type: 'web'},
        format: {type: 'ase.json'},
      }),
    )
    .on('error', err => {
      throw new Error(err);
    })
    .pipe(gulp.dest('dist')),
);

gulp.task('default', ['custom-map-scss', 'sketchpalette', 'ase']);
