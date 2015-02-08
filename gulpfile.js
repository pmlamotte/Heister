var gulp = require('gulp'),
	connect = require('gulp-connect'),
	to5 = require('gulp-6to5'),
	plumber = require('gulp-plumber'),
	watch = require('gulp-watch');

gulp.task('serve', ['build', 'connect'])

gulp.task('connect', function() {
	connect.server({
	    root: ['public', '.'],
	    port: 8080
	});
});

gulp.task('build', ['6to5', 'bowerCopy', 'htmlCopy', 'imageCopy']);

gulp.task('6to5', function() {
	return gulp.src('src/scripts/**/*.js')
				.pipe(watch('src/scripts/**/*.js'))
				.pipe(plumber())
		        .pipe(to5())
		        .pipe(gulp.dest('public/scripts'));
});

gulp.task('bowerCopy', function() {
	return gulp.src('bower_components/**/*')
				.pipe(watch('bower_components/**/*'))
				.pipe(gulp.dest('public/scripts'));
});

gulp.task('htmlCopy', function() {
	return gulp.src(['src/**/*.html'])
				.pipe(watch('src/**/*.html'))
				.pipe(gulp.dest('public/'));
});

gulp.task('imageCopy', function() {
	return gulp.src(['src/images/**/*'])
				.pipe(watch('src/images/**/*'))
				.pipe(gulp.dest('public/images'));
})
 
gulp.task('default', ['serve']);