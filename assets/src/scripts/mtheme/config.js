require.config({
  paths: {
    jquery: '../../../../../../../bower_components/jquery/dist/jquery', // use Ghost's jquery
    lodash: '../../../../../../../bower_components/lodash/dist/lodash', // use Ghost's lodash
    instantclick: '../../../components/instantclick/instantclick',
    scrollmagic: '../../../components/ScrollMagic/js/jquery.scrollmagic',
    tweenmax: '../../../components/ScrollMagic/js/_dependent/greensock/TweenMax.min'
  },

  shim: {
    instantclick: {
      exports: 'InstantClick'
    },

    jquery: {
      exports: ['jQuery', '$']
    },

    lodash: {
      exports: ['_']
    },

    scrollmagic: {
      exports: ['ScrollMagic'],
      deps: ['jquery', 'tweenmax']
    },

    tweenmax: {
      exports: ['TweenMax']
    }
  }
});