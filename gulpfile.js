'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');
var pug=require('gulp-pug');
var sass=require('gulp-sass')



//move css files
gulp.task('move',function(){
          return gulp.src('project/css/*.css')
          .pipe(gulp.dest('dist/css'))
          });

//move js files

gulp.task('movejs',function(){
          return gulp.src('project/js/*.js')
          .pipe(gulp.dest('dist/js'))
          });

//convert .pug to .html
gulp.task('html',function() {
 return gulp.src('project/index.pug')
    .pipe(pug({pretty:true}))
 .pipe(gulp.dest('dist'));
});



//convert .scss to .css
gulp.task('sass',function() {
 return gulp.src('project/css/*.scss')
.pipe(sass())
 .pipe(gulp.dest('dist/css'));
});





gulp.task('watch', function () {
 return watch('project/index.pug' ,gulp.series('html'));
 
 });