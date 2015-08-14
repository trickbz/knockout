var gulp = require('gulp');
var util = require('gulp-util');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var exec = require('child_process').exec;
var runSequence = require('run-sequence');
var gls = require('gulp-live-server')

var paths = {
	appJs: "app.js"
};

gulp.task('default', ['server']);

gulp.task('server', ['lint'], function () {
	var server = gls.new(paths.appJs);
	server.start();
});

gulp.task('lint', function () {
	gulp.src("js/**/*.js")
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
		.pipe(jshint.reporter('fail'));
});