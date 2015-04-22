'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

gulp.task('serve', function (done) {
  browserSync({
    ghostMode: false,
    notify: false,
    open: false,
    port: 9000,
    server: {
      baseDir: ['challenge-1']
    },
    ui: false
  }, done);
});

gulp.task('selenium', ['serve'], function () {
  return gulp.src('challenge-*/**/*.js')
    .pipe($.mocha());
});

gulp.task('test', ['selenium'], function () {
  browserSync.exit();
});
