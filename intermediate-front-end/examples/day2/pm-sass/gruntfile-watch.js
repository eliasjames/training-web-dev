module.exports = function(grunt) {
	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	grunt.initConfig({
		watch: {
			scripts: {
				files: ['**/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				},
			},
		},
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
	grunt.registerTask('startwatch', ['watch']);
};
