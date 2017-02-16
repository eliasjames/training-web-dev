var gulp = require( 'gulp' ),
	lint = require( 'gulp-jshint' ),
	watch = require( 'gulp-watch' );
 
gulp.task( 'default', function () {
	// Endless stream mode 
	return watch( './*', { ignoreInitial: false })
		.pipe( gulp.dest( 'lint' ));
});

// gulp.task( 'build', [ 'lint', 'test', 'bundle' ]);

gulp.task( 'lint', function () {
	gulp.src( ['./*.js'] )
		.pipe( jshint('.jshintrc' ))
		.pipe( jshint.reporter('jshint-stylish' ))
});
