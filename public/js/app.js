(function() {
  'use strict';

  angular.module('vCas', [
    //modules
    'ngRoute',

    //controllers
    'vCas.controllers.home',
    'vCas.controllers.nav'
  ])

  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
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
  }]);

})();