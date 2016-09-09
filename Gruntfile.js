module.exports = function(grunt) {

  //command availability
  grunt.loadNpmTasks('grunt-contrib-concat');

  //==========================================================

  //core uglify configuration object
  config = {

    //concatenate vendor scripts
    concat: {
      dist: {
        files: [
          {src: [
            'out/assets/scripts/vendor/jquery-3.1.0.js',
            'out/assets/scripts/vendor/underscore-1.8.3.js',
            'out/assets/scripts/vendor/backbone-1.3.3.js'], dest: 'out/assets/scripts/vendors.js'},
          {src: 'out/assets/scripts/utils/**/*.js', dest: 'out/assets/scripts/utils.js'},
          {src: 'out/assets/scripts/views/**/*.js', dest: 'out/assets/scripts/views.js'},
          {src: 'out/assets/scripts/content/**/*.js', dest: 'out/assets/scripts/content.js'},
          {src: 'out/assets/scripts/templates/**/*.js', dest: 'out/assets/scripts/templates.js'},
          {src: 'out/assets/scripts/snippets/**/*.js', dest: 'out/assets/scripts/snippets.js'},
          {src: 'out/assets/styles/views/**/*.css', dest: 'out/assets/styles/views.css'}
        ]
      }
    }
    
  };

  //==========================================================

  //Project configuration
  grunt.initConfig(config);
  grunt.registerTask('default', ['concat']);
  

};

