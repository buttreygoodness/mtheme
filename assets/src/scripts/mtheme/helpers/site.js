define(['jquery'], function ( $ ) {

  var siteHelper = function () {};

  siteHelper.prototype.initial = function () {
    return $('link[rel=\'alternate\']').attr('title').charAt(0).toUpperCase();
  };

  siteHelper.prototype.logo = function () {
    return $('.icons-logo');
  };

  siteHelper.prototype.init = function () {
    var initial = this.initial();
    var logo = this.logo();
    logo.html('<p>' + initial + '</p>');
    logo.click(function (e) {
      e.preventDefault();
      document.location.href = '/';
    });
  };

  return siteHelper;
});