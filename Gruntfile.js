module.exports = function(grunt) {

  grunt.initConfig({
    jsAppDir: 'public/js/app/',
    jsVendorDir: 'bower_components/',
    jsDistDir: 'dist/js/',
    scssDir: 'public/css/',
    cssDistDir: 'dist/stylesheets/',
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: ['<%=jsAppDir%>*.js'],
        dest: '<%=jsDistDir%><%= pkg.name %>.js'
      },
      vendorJs : {
        options: {
          separator: ';'
        },
        src: ['<%=jsVendorDir%>**/*.js', '!<%=jsVendorDir%>**/*.min.js'],
        dest: '<%=jsDistDir%>vendor.js'
      },
      scss: {
        src: ['<%=scssDir%>*.scss'],
        dest: '<%=cssDistDir%><%= pkg.name %>.scss'
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%=grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          '<%=jsDistDir%><%= pkg.name %>.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    cssmin: {
      add_banner: {
        options: {
          banner: '/*! <%= pkg.name %> <%=grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        files: {
          '<%=cssDistDir%><%= pkg.name %>.min.css': ['<%= concat.scss.dest %>']
        }
      }
    },
    sass: {
      dist: {
        files: {
          '<%=cssDistDir%><%= pkg.name %>.css' : '<%=cssDistDir%><%= pkg.name %>.scss'
        }
      }
    },
    watch: {
      // TODO: Do these tasks conditionally?
      files: ['<%=jsDir%>*.js', '<%=jsVendorDir%>**/*.js', '<%=scssDir%>*.scss'],
      tasks: ['concat', 'sass', 'uglify', 'cssmin']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'concat',
    'uglify',
    'cssmin',
    'sass',
    'watch'
  ]);

};
