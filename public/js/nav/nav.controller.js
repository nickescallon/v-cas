(function() {
  'use strict';

  angular.module('vCas.controllers.nav', [])
  .controller('navController', navController);

  navController.$inject = ['$location', '$route', 'navService'];

  function navController($location, $routeParams, navService) {
    var Ctrl = this;

    Ctrl.currentPage = $location.path().substr(1).toLowerCase();
    Ctrl.isCurrentPage = isCurrentPage
    Ctrl.pages = navService.pages;
    Ctrl.routeTo = routeTo;

    function isCurrentPage(page) {
      return page.toLowerCase() === Ctrl.currentPage;
    };

    function routeTo(path) {
      if (path) {
        path = path.toLowerCase();

        if ( path !== Ctrl.currentPage ) {
          Ctrl.currentPage = path;
          $location.path(path);
        }
      }
    };
  };

})();
