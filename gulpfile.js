var gulp = require('gulp'),
	connect = require('gulp-connect'),
	to5 = require('gulp-babel'),
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps'),
	watch = require('gulp-watch'),
	yargs = require('yargs');

var shouldWatch = (yargs.argv._.length === 0 || yargs.argv._[0] === 'serve') ? true : false;

gulp.task('serve', ['build', 'connect']);

gulp.task('connect', function() {
	connect.server({
	    root: ['public', '.'],
	    port: 8080
	});
});

gulp.task('build', ['babel', 'bowerCopy', 'htmlCopy', 'imageCopy']);

gulp.task('babel', function() {
	var stream = gulp.src('src/scripts/**/*.js');

	if (shouldWatch) {
		stream = stream.pipe(watch('src/scripts/**/*.js', function(event) {
					console.log('Recompiling babel');
				}))
				.pipe(plumber());
	}
    return stream.pipe(sourcemaps.init())
    			 .pipe(to5())
			 	 .pipe(sourcemaps.write())
				 .pipe(gulp.dest('public/scripts'));
});

gulp.task('bowerCopy', function() {
	return gulp.src('bower_components/**/*')
				.pipe(gulp.dest('public/scripts'));
});

gulp.task('htmlCopy', function() {
	var stream = gulp.src(['src/**/*.html']);
	if (shouldWatch) {
		stream = stream.pipe(watch('src/**/*.html'));
	}
	return stream.pipe(gulp.dest('public/'));
});

gulp.task('imageCopy', function() {
	var stream = gulp.src(['src/images/**/*']);
	if (shouldWatch) {
		stream = stream.pipe(watch('src/images/**/*'));
	}
	return stream.pipe(gulp.dest('public/images'));
});
 
gulp.task('default', ['serve']);