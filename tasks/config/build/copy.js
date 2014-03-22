var config = {
  taskName: 'copy',
  watch: {
    files: [
      { expand: true, cwd: 'assets/src/images/', src: '**', dest: 'assets/dist/images/', flatten: true, filter: 'isFile' }
    ]
  }
};

module.exports = config;