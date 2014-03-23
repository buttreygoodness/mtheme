define(['helpers/site', 'helpers/index', 'helpers/post'], function (SiteHelper, IndexHelper, PostHelper) {
  var mtheme = function () {
    console.log(SiteHelper, IndexHelper, PostHelper);
  };

  mtheme.prototype.init = function () {
    var site = new SiteHelper();
    site.init();
  };

  return mtheme;
});