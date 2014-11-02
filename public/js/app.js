(function() {
  'use strict';

  angular.module('vCas', [
    //modules
    'ngRoute',
    'ngAnimate',

    //services
    'vCas.services.nav',

    //controllers
    'vCas.controllers.home',
    'vCas.controllers.nav'
  ])
  .config(config)
  .run(run);

  config.$inject = ['$locationProvider', '$routeProvider']

  function config($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    //Routes
    $routeProvider
      .when('/', {
        template: '<div class="test">{{ homeController.testMessage }}</div>',
        controller: 'homeController',
        controllerAs: 'homeController'
      })
      .otherwise({
        template: '<div class="otherwise">Otherwise!</div>'
      });
  };

  run.$inject = ['$location', '$rootScope', 'navService']

  function run($location, $rootScope, navService) {
    $rootScope.$on('$routeChangeSuccess', function() {
      navService.pages.current = $location.path().substr(1).toLowerCase();
    });
  };

})();
