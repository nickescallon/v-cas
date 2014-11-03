(function() {
  'use strict';

  angular.module('vCas', [
    //modules
    'ngRoute',
    'ngAnimate',

    //directives
    'vCas.directives.gallery',

    //services
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

  run.$inject = ['$location', '$rootScope', 'navService'];

  function run($location, $rootScope, navService) {
    $rootScope.$on('$routeChangeSuccess', function() {
      navService.pages.current = $location.path().substr(1).toLowerCase();
    });
  };

})();
