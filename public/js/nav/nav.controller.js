(function() {
  'use strict';

  angular.module('vCas.controllers.nav', [])
  .controller('navController', navController);

  navController.$inject = ['$location', '$route', 'galleryService', 'navService'];

  function navController($location, $routeParams, galleryService, navService) {
    var Ctrl = this;

    Ctrl.pages = navService.pages;
    Ctrl.isCurrentPage = isCurrentPage;
    Ctrl.gallery = galleryService.images;
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
