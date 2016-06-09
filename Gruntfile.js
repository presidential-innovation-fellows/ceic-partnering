module.exports = function(grunt) {

  grunt.initConfig({

    clean: ['dist'],

    jade: {
      development: {
        options: {
          data: {
            base_url: "/",
            debug: false
          }
        },
        files: [ {
          cwd: 'src',
          src: [
            '**/*.jade',
            '!**/_*.*',
            '!**/_*/**'
          ],
          dest: 'dist',
          expand: true,
          ext: '.html'
        } ]
      },
      production: {
        options: {
          data: {
            base_url: "/ceic-partnering/",
            debug: false
          }
        },
        files: [ {
          cwd: 'src',
          src: [
            '**/*.jade',
            '!**/_*.*',
            '!**/_*/**'
          ],
          dest: 'dist',
          expand: true,
          ext: '.html'
        } ]
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: [ {
          cwd: 'src',
          src: [
            '**/*.scss',
            '!**/_*.*',
            '!**/_*/**'
          ],
          dest: 'dist',
          expand: true,
          ext: '.css'
        } ]
      }
    },

    copy: {
      src: {
        expand: true,
        cwd: 'src',
        src: [
          '**/*',
          '!**/*.scss',
          '!**/*.jade',
          '!**/_*.*',
          '!**/_*/**'
        ],
        dest: 'dist/'
      }
    },

    connect: {
      server: {
        options: {
          livereload: 8004,
          port: 8001,
          base: 'dist/'
        }
      }
    },

    watch: {
      options: {
        livereload: 8004
      },
      jade: {
        files: ['src/**/*.jade'],
        tasks: ['jade:development']
      },
      sass: {
        files: ['src/**/*.scss'],
        tasks: ['sass']
      },
      other: {
        files: [
          'src/**/*',
          '!src/**/*.jade',
          '!src/**/*.scss'
        ],
        tasks: ['newer:copy']
      }
    },

    'gh-pages': {
        options: {
          base: 'dist'
        },
        src: ['**']
      }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'clean',
    'jade:development',
    'sass',
    'copy',
    'connect:server',
    'watch'
  ]);

  grunt.registerTask('deploy', [
    'clean',
    'jade:production',
    'sass',
    'copy',
    'gh-pages'
  ]);
};
