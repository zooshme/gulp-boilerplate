var gulp   = require('gulp');
var sass   = require('gulp-ruby-sass');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var config = require('../config');
var err    = require('../util/handleErrors');

gulp.task('styles', function() {
  return gulp.src([config.src + '/styles/app.scss', config.src + '/styles/styles.scss'])
    .pipe(sass())
    .on('error', err)
    .pipe(gulp.dest(config.dist))
    .pipe(minify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(config.dist));
});