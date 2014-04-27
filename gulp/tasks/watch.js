var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var config     = require('../config');

gulp.task('watch', function() {
  gulp.watch(config.src + '/styles/**/*.scss', ['styles']);
  gulp.watch(config.src + '/scripts/**/*.js', ['scripts']);
  gulp.watch(config.src + '/images/**/*', ['images']);

  var server = livereload();
  gulp.watch([config.dist + '/**']).on('change', function(file) {
    server.changed(file.path);
  });
});