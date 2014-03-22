define([], function () {
  var mtheme = function () {

  };

  mtheme.prototype.init = function () {
    console.log(this, 'initted');
  };

  return mtheme;
});