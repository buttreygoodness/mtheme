define(['jquery'], function ( $ ) {

  var SiteHelper = function () {};

  SiteHelper.prototype.init = function () {
    console.log('SiteHelper');
    var initial = this.initial();
    var logo = this.logo();
    logo.html('<p>' + initial + '</p>');
    logo.click(function (e) {
      e.preventDefault();
      document.location.href = '/';
    });
  };

  SiteHelper.prototype.initial = function () {
    return $('link[rel=\'alternate\']').attr('title').charAt(0).toUpperCase();
  };

  SiteHelper.prototype.logo = function () {
    return $('.icons-logo');
  };

  return SiteHelper;
});