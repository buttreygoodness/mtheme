var config = {
  taskName: 'copy',
  watch: {
    files: [
      { expand: true, cwd: 'assets/src/images/', src: '**', dest: 'assets/dist/images/', flatten: true, filter: 'isFile' }
    ]
  },
  build: {
    files: [
      { expand: true, cwd: '.', src: ['*.hbs', 'pagkage.json', 'LICENSE', 'README.md'], dest: 'build/', flatten: true, filter: 'isFile' },
      { expand: false, cwd: '.', src: ['package_theme.json'], dest: 'build/package.json', flatten: false, filter: 'isFile' },
      { expand: true, cwd: 'partials', src: ['*.hbs'], dest: 'build/partials', flatten: true, filter: 'isFile' },
      { expand: true, cwd: 'assets/dist/images/', src: '**', dest: 'build/assets/images/', flatten: true, filter: 'isFile' },
      { expand: true, cwd: 'assets/dist/scripts/', src: '**', dest: 'build/assets/scripts/', flatten: true, filter: 'isFile' },
      { expand: true, cwd: 'assets/dist/styles/', src: '**', dest: 'build/assets/styles/', flatten: true, filter: 'isFile' },
      { expand: true, cwd: 'assets/components/requirejs/', src: 'require.js', dest: 'build/assets/components/requirejs/', flatten: true, filter: 'isFile' }
    ]
  },
  templates: {
    src: 'default.hbs',
    dest: 'build/default.hbs',
    options: {
      process: function (content) {
        return content.replace(/dist\//g, '');
      }
    }
  }
};

module.exports = config;