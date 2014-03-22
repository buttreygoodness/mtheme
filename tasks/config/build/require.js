var config = {
  taskName: 'requirejs',
  compile: {
    options: {
      name: 'mtheme',
      baseUrl: 'assets/src/scripts/mtheme',
      mainConfigFile: 'assets/src/scripts/mtheme/config.js',
      out: 'assets/dist/scripts/mtheme-min.js'
    }
  }
};

module.exports = config;