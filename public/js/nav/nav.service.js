(function() {
  'use strict';

  angular.module('vCas.services.nav', [])
  .factory('navService', navService);

  function navService() {
    var pages = [
      'About',
      'Style',
      'Gallery',
      'Services',
      'Contact'
    ];

    var service = {
      pages: pages
    };

    return service;
  };

})()
