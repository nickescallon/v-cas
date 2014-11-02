(function() {
  'use strict';

  angular.module('vCas.services.nav', [])
  .factory('navService', navService);

  function navService() {
    var pages = [
      'ABOUT',
      'STYLE',
      'GALLERY',
      'SERVICES',
      'CONTACT'
    ];

    var service = {
      pages: pages
    };

    return service;
  };

})()
