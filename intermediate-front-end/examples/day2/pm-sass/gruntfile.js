module.exports = function(grunt) {
	grunt.loadNpmTasks( 'grunt-sass' );

	grunt.initConfig({
		sass: {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'main.css': 'main.scss'
				}
			}
		}
	});

	grunt.registerTask('default', ['sass']);
};
