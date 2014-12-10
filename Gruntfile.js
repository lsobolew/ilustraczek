module.exports = function(grunt) {
 
  grunt.registerTask('watch', [ 'watch' ]);
 
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost',
          livereload: 35729,
          open: true,
          base: '.'
        }
      }
    },
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [
          'javascript/*.js'
        ],
        dest: 'public/js/main.min.js'
      },
    },
    uglify: {
      options: {
        mangle: false
      },
      js: {
        files: {
          'public/js/main.min.js': ['public/js/main.min.js']
        }
      }
    },
    sass: {
      style: {
        files: {
          "public/css/style.css": "sass/style.scss"
        }
      }
    },
    autoprefixer: {
        dist: {
            files: {
                'public/css/style.css': 'public/css/style.css'
            }
        }
    },
    // compass: {
    //   dist: {
    //     options: {
    //       sassDir: 'sass',
    //       cssDir: 'public/css',
    //       raw: 'preferred_syntax = :sass\n' // Use `raw` since it's not directly available
    //     }
    //   }
    // },
    watch: {
      options: {
        livereload: 35729
      },
      js: {
        files: ['javascript/*.js'],
        tasks: ['concat:js', 'uglify:js'],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['sass/*.scss'],
        tasks: ['sass:style', 'autoprefixer'],
        // tasks: ['compass:dist'],
        options: {
          livereload: true,
        }
      },
      html: {
        files: ['public/*.html'],
        options: {
          livereload: true,
        }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  // grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('serve', "Serve your app", [ 'connect:server', 'watch' ]);
};
