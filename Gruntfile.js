module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: {
        src: [ 'airdrum' ]
      }
    },
    less: {
      build: {
        files: {
          'airdrum/assets/<%= pkg.name %>.css' : 'src/style/*.less'
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: {
          'airdrum/assets/<%= pkg.name %>.min.js' : ['src/js/vendor/*.js', 'src/js/*.js']
        }
      }
    },
    replace: {
      build: {
        src: ['src/index.html'],
        dest: 'airdrum/index.html',
        replacements: [{
          from: 'src="../build/airDrum.min.js"',
          to: 'src="assets/airDrum.min.js"'
        }, {
          from: '<link rel="stylesheet" type="text/css" href="airdrum.css">',
          to: '<link rel="stylesheet" type="text/css" href="assets/airDrum.css">'
        }]
      }
    },
    copy: {
      build: {
        files: [
          { cwd: 'src/style/',
            src: '*.jpg',
            dest: 'airdrum/assets/',
            expand: true
          }, {
            expand: true,
            cwd: 'src/sounds/',
            src: '*.wav',
            dest: 'airdrum/assets/sounds/'
          }
        ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'uglify', 'less', 'replace', 'copy']);

};