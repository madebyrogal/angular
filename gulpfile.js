/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var gulp = require('gulp'),
    less = require('gulp-less'),
    cleanCSS = require('gulp-clean-css'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    pug = require('gulp-pug'),
    webserver = require('gulp-webserver');

//Less
gulp.task('less', function () {
    return gulp.src([
        'UI/less/*.less'
    ])
    .pipe(plumber())
    .pipe(less({
        paths: [
            '.',
            './node_modules/bootstrap-less'
        ]
    }))
    .on('error', function (error) {
        // Would like to catch the error here
        console.log(error);
        this.emit('end');
    })
    .pipe(gulp.dest('web/css'));
});
// Concatenate JS
gulp.task('scripts', function() {
    return gulp.src([
          'node_modules/angular/angular.min.js',
          'node_modules/angular-route/angular-route.min.js',
          'node_modules/lodash/lodash.min.js',
          'UI/js/app.js',
          'UI/js/config/*.js',
          'UI/js/filters/*.js',
          'UI/js/service/*.js',
          'UI/js/controller/*.js',
          'UI/js/directive/*.js'
        ])
        .pipe(plumber())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('web/js'));
});
//PUG
gulp.task('pug', function() {
    return gulp.src([
          'UI/view/*.pug',
          'UI/view/**/**/*.pug'
        ])
        .pipe(plumber())
        .pipe(pug({
            'pretty': true
        }))
        .pipe(gulp.dest('web'));
});
//Webserver
gulp.task('webserver', function() {
  gulp.src('web')
    .pipe(webserver({
      port: 8001
    }));
});
// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch('UI/less/**/*.less', ['less']);
    gulp.watch('UI/js/**/*.js', ['scripts']);
    gulp.watch('UI/view/pages/**/*.pug', ['pug']);
    gulp.watch('UI/view/*.pug', ['pug']);
});

// define tasks here
gulp.task('default', ['webserver', 'less', 'scripts', 'pug', 'watch']);
gulp.task('build', ['less', 'scripts', 'pug']);
