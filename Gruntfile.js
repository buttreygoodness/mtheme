var ConfigLoader = require('grunt-config-loader');


var gruntFile = function(grunt) {
  var configLoader = new ConfigLoader(grunt, {
    cwd: 'tasks/config',
    paths: {
      dist: 'assets/dist',
      src: 'assets/src'
    }
  });

  configLoader.loadAll();

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);
};

module.exports = gruntFile;
