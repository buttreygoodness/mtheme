var config = {
  taskName: 'watch',
  all: {
    files: ['tasks/**/*.js', 'Gruntfile.js', 'assets/src/scripts/**/*.js', 'assets/src/styles/**/*.less'],
    tasks: ['jshint:all', 'less:watch', 'autoprefixer:watch', 'uglify:watch'],
    options: {
      spawn: true,
      livereload: true
    }
  }
};
        
module.exports = config;