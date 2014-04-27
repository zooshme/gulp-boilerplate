var gulp       = require('gulp');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
var streamify  = require('gulp-streamify');
var uglify     = require('gulp-uglify');
var rename     = require('gulp-rename');
var config     = require('../config');
var err        = require('../util/handleErrors');

gulp.task('scripts', function() {
  return browserify({
      entries: [config.src + '/scripts/app.js']
    })
    .bundle({debug: true})
    .on('error', err)
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.dist))
    .pipe(streamify(uglify()))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(config.dist));
});