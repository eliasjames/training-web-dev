module.exports = function(grunt) {
	grunt.loadNpmTasks( 'grunt-sass' );

	grunt.initConfig({
		sass: {
			dist: {
        files: {
          'main.css': 'main.scss'
        },
				options: {
					loadPath: ['node_modules/foundation-sites/scss']
				}
			}
		}
	});

	grunt.registerTask('default', ['sass']);
};
