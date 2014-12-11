'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ["Css"]
        },
        files: {
          "../Public/Css/bootstrap.css": "Less/bootstrap.elements.less",
          "../Public/Css/main.css": "Less/main.less"
        }
      },
      production: {
        options: {
          paths: ["css"],
          cleancss: true,
        },
        files: {
          "../Public/Css/bootstrap.min.css": "Less/bootstrap.elements.less",
          "../Public/Css/main.min.css": "Less/main.less"
        }
      }
    },
    watch: {
      less: {
        // Watch and compile less files
        files: ['Less/*.less'],
        tasks: ['less'],
      },
      livereload: {
        // Watch these files to live reload when changed
        // *.html used for fluid templates doesn't work (yet).
        files: ['../Public/Css/*.css', 'Layouts/DefaultLayout.html', 'Less/*.html', '*.html', '**/*.html'],
        options: { 
          livereload: true 
        },
      },
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task.
  grunt.registerTask('default', ['watch']);

};
