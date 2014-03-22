( function( $, ScrollMagic, ScrollScene ) {

  'use strict';

  var setIndexScroll = function () {

    var controller = new ScrollMagic({container: '.screen-content'}),
        tween = TweenMax.to('.image-source-blur', 0.5, {className: '+=image-source-blur-visible' }),
        scene = new ScrollScene( {triggerElement: '#scrollPinOne', duration: 200, offset: 230} )
          .setTween(tween)
          .addTo(controller);

    return scene;
  };

  var setBlogInitial = function () {
    var initial = $('link[rel=\'alternate\']').attr('title').charAt(0).toUpperCase(),
        logo = $('.icons-logo');

    logo.html('<p>' + initial + '</p>');
    logo.click(function (e) {
      e.preventDefault();
      document.location.href = '/';
    });
  };

  setIndexScroll();
  setBlogInitial();

})( jQuery, ScrollMagic, ScrollScene );