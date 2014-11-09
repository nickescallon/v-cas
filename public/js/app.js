(function() {
  'use strict';

  angular.module('vCas', [
    //modules
    'ngRoute',
    'ngAnimate',

    //constants
    'vCas.constants.GALLERY_IMAGES',

    //directives
    'vCas.directives.gallery',

    //services
    'vCas.services.gallery',
    'vCas.services.nav',

    //controllers
    'vCas.controllers.home',
    'vCas.controllers.nav'
  ])
  .config(config)
  .run(run);

  config.$inject = ['$locationProvider', '$routeProvider'];

  function config($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    //Routes
    $routeProvider
      .when('/', {
        template: '<div>{{ homeController.testMessage }}</div>',
        controller: 'homeController',
        controllerAs: 'homeController'
      })
      .otherwise({
        template: '<div>Otherwise!</div>'
      });
  };

  run.$inject = ['$location', '$rootScope', 'galleryService', 'navService'];

  function run($location, $rootScope, galleryService, navService) {
    $rootScope.$on('$routeChangeSuccess', function() {
      var path = $location.path().substr(1).toLowerCase();
      navService.pages.current = path;
      galleryService.update(path);
    });
  };

})();
