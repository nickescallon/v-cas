(function() {
  'use strict';

  angular.module('vCas.services.nav', [])
  .factory('navService', navService);

  function navService() {
    var pages = {
      all: [
        'ABOUT',
        'STYLE',
        'GALLERY',
        'SERVICES',
        'CONTACT'
      ],
      current: null
    };

    var service = {
      pages: pages
    };

    return service;
  };

})()
