(function() {
  'use strict';

  angular.module('vCas.controllers.nav', [])
  .controller('navController', navController);

  navController.$inject = ['$location'];

  function navController($location) {
    var Ctrl = this;

    Ctrl.navOptions = [
      'About',
      'Style',
      'Gallery',
      'Services',
      'Contact'
    ];

    Ctrl.routeTo = routeTo;

    function routeTo(path) {
      $location.path(path);
    };
  };

})();