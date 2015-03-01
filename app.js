var app = angular.module('flappyNacho', ['ngMaterial']);
app.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('orange');
});
app.controller('AppCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
  var ngui = require('nw.gui');
  var nwin = ngui.Window.get();

  $scope.close = function () {
    window.close();
  };

  $scope.hide = function (){
    nwin.minimize()
  }
}]);
