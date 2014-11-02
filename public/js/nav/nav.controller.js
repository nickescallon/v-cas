(function() {
  'use strict';

  angular.module('vCas.controllers.nav', [])
  .controller('navController', navController);

  navController.$inject = ['$location', '$route', 'navService'];

  function navController($location, $routeParams, navService) {
    var Ctrl = this;

    Ctrl.pages = navService.pages
    Ctrl.isCurrentPage = isCurrentPage
    Ctrl.routeTo = routeTo;

    function isCurrentPage(page) {
      return page.toLowerCase() === Ctrl.pages.current;
    };

    function routeTo(path) {
      if (path) {
        path = path.toLowerCase();

        if ( path !== Ctrl.pages.current ) {
          Ctrl.pages.current = path;
          $location.path(path);
        }
      }
    };

  };

})();
