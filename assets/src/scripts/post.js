( function( $, ScrollMagic, ScrollScene ) {

  'use strict';

  var setCoverImage = function () {
    var cover_image = $("img[alt='COVER_IMAGE']"),
        story_cover = $(".story-cover .story-cover-image");

    if (cover_image.length > 0) {
      story_cover.css('background-image', 'url(' + cover_image.attr('src') + ')').addClass('covered');
      cover_image.remove();
    }
  };

  var setPostScroll = function () {
    var controller = new ScrollMagic({container: '.screen-content'}),
        tween = TweenMax.to('.story-cover-content', 0.5, {className: '+=story-cover-fade' }),
        scene = new ScrollScene( {triggerElement: '#scrollPinOne', duration: 1200, offset: -200} )
          .setTween(tween)
          .addTo(controller)
  };

  var setCoverArrow = function () {
    var cover_arrow = $('.story-cover-arrow');

    cover_arrow.click(function (e) {
      var story_cover = $('.story-cover');
      var screen_content = $('.screen-content');
      var offset = story_cover.height();

      screen_content.animate({
        'scrollTop': offset
      }, 500, function () {
        // nothing here yet.
      });

    });
  };

  var setResponsiveImages = function () {
    $('.container img').each(function (i, img) {
      $(img).addClass('img img-responsive');
    });
  };

  setCoverImage();
  setPostScroll();
  setCoverArrow();
  setResponsiveImages();

})( jQuery, ScrollMagic, ScrollScene );