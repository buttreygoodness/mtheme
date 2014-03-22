( function( $, ScrollMagic, ScrollScene ) {

  'use strict';

  var setBlogInitial = function () {
    var initial = $("link[rel='alternate']").attr('title').charAt(0).toUpperCase(),
        logo = $('.icons-logo');

    logo.html('<p>' + initial + '</p>');
    logo.click(function (e) {
      document.location.href = '/';
    });
  };

  setBlogInitial();

})( jQuery, ScrollMagic, ScrollScene );