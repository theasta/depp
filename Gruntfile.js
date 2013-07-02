'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      gruntfile: [
        'Gruntfile.js'
      ],
      source: [
        'lib/**/*.js',
        'bin/*',
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('default', ['test']);

};
