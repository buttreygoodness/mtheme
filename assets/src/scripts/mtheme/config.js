require.config({
  paths: {
    instantclick: '../../components/instantclick/instantclick',
    // jQuery: '../lib/jquery/jquery',
    // Promiz: '../lib/promiz/promiz',
    // Backbone: '../lib/backbone/backbone'
  },

  shim: {
    instantclick: {
      exports: 'InstantClick'
    },

    // jQuery: {
    //   exports: 'jQuery'
    // },

    // Backbone: {
    //   exports: 'Backbone',
    //   deps: ['jQuery', 'underscore']
    // },

    // Promiz: {
    //   exports: 'Promiz'
    // }
  }
});