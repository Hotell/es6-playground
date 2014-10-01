'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var traceur = require('gulp-traceur');
var concat = require('gulp-concat');

gulp.task('default', function () {
  return gulp.src('playground/app.js')
    //.pipe(sourcemaps.init())
    .pipe(traceur({
      experimental: true,
      modules:'amd'
    }))
    //.pipe(concat('all.js'))
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest('out'));
});
