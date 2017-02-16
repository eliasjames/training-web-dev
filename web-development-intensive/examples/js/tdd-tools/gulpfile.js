var gulp = require( 'gulp' ),
	karma = require( 'karma' ),
	jshint = require( 'gulp-jshint' );
 
gulp.task( 'default', [ 'watch' ]);

gulp.task( 'watch', function () {
	gulp.watch( 'src/**/*.js', [ 'lint', 'test' ]);
});

gulp.task( 'lint', function () {
	gulp.src( ['./src/*.js'] )
		.pipe( jshint( './config/.jshintrc' ))
		.pipe( jshint.reporter('jshint-stylish' ));
});

gulp.task( 'test', function( done ) {
	new karma.Server({
		configFile: __dirname + '/config/karma.conf.js'
	}, done ).start();
})
