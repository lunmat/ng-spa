module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    jshint: {
      gruntfile: {
        options: {
          jshintrc: '.jshintrc',
          reporter: require('jshint-stylish')
        },
        src: 'Gruntfile.js'
      }
    },

    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      }
    }


  });

  grunt.registerTask('default', []);
};