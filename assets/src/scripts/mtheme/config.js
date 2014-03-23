require.config({
  paths: {
    jquery: '../../../components/jquery/jquery',
    instantclick: '../../../components/instantclick/instantclick',
    scrollmagic: '../../../components/ScrollMagic/js/jquery.scrollmagic'
    // jQuery: '../lib/jquery/jquery',
    // Promiz: '../lib/promiz/promiz',
    // Backbone: '../lib/backbone/backbone'
  },

  shim: {
    instantclick: {
      exports: 'InstantClick'
    },

    jquery: {
      exports: 'jQuery'
    },

    scrollmagic: {
      exports: 'ScrollMagic',
      deps: ['jquery']
    }

    // Backbone: {
    //   exports: 'Backbone',
    //   deps: ['jQuery', 'underscore']
    // },

    // Promiz: {
    //   exports: 'Promiz'
    // }
  }
});