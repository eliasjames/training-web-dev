module.exports = function( grunt ){
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.initConfig({
    jshint: {
      all: [ 'src/*.js' ],
      options: {
        esversion: 6
      }
    },
    watch: {
      files: [ 'src/*.js' ],
      tasks: [ 'jshint' ]
    }
  });
  grunt.registerTask( 'default', [ 'watch' ]);
}
