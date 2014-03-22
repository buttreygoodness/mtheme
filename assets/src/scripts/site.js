( function( $ ) {

  'use strict';

  var setBlogInitial = function () {
    var initial = $('link[rel=\'alternate\']').attr('title').charAt(0).toUpperCase(),
        logo = $('.icons-logo');

    logo.html('<p>' + initial + '</p>');
    logo.click(function (e) {
      e.preventDefault();
      document.location.href = '/';
    });
  };

  setBlogInitial();

})( jQuery );