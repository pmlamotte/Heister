var gulp = require('gulp'),
	connect = require('gulp-connect'),
	to5 = require('gulp-6to5'),
	plumber = require('gulp-plumber');
 
gulp.task('serve', ['build', 'watch', 'connect'])

gulp.task('connect', function() {
	connect.server({
	    root: ['src', '.'],
	    port: 8080,
	    livereload: true
	});
});

gulp.task('build', function() {
	return gulp.src('src/scripts/**/*.js')
		.pipe(plumber())
        .pipe(to5())
        .pipe(gulp.dest('public/scripts'));
})

gulp.task('watch', function() {
	gulp.watch('src/scripts/**/*.js', ['build']);
})
 
gulp.task('default', ['serve']);