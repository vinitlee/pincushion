module.exports = function(grunt) {

  grunt.initConfig({
    stylus: {
      compile: {
        options: {
          pretty: true
        },
        files: {
          'main.css': ['src/styles/*.styl'], // 1:1 compile
        }
      }
    },
    jade: {
      compile: {
        files: {
          'index.html': 'src/views/index.jade', // 1:1 compile
        }
      }
    },
    watch: {
      styles: {
        files: ['src/styles'],
        tasks: ['stylus']
      },
      views: {
        files: ['src/views'],
        tasks: ['jade']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('default', ['jshint']);

};