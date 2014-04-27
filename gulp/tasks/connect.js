var gulp    = require('gulp');
var connect = require('connect');
var http    = require('http');
var config  = require('../config')

gulp.task('connect', function() {
  var app = connect()
    .use(connect.logger('dev'))
    .use(connect.static(config.dist));
  return http.createServer(app).listen(config.port);
});