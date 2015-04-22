'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

gulp.task('serve', function () {
  browserSync({
    ghostMode: false,
    notify: false,
    open: false,
    port: 9000,
    server: {
      baseDir: ['challenge-1']
    },
    ui: false
  });
});

gulp.task('test', ['serve'], function () {
  gulp.src('challenge-*/**/*.js')
    .pipe($.mocha());
});
