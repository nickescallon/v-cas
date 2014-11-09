(function() {
  'use strict';

  angular.module('vCas.services.gallery', ['vCas.constants.GALLERY_IMAGES'])
  .factory('galleryService', galleryService);

  galleryService.$inject = ['GALLERY_IMAGES'];

  function galleryService(GALLERY_IMAGES) {

    var images = {
      urls: GALLERY_IMAGES.home
    };

    var service = {
      images: images,
      update: update
    };

    function update(path) {
      this.images.urls = GALLERY_IMAGES[path] || GALLERY_IMAGES.home;
    };

    return service;
  };

})()
