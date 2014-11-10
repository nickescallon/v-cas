(function() {
  'use strict';

  angular.module('vCas.services.gallery', ['vCas.constants.GALLERY_IMAGES'])
  .factory('galleryService', galleryService);

  galleryService.$inject = ['$q', '$timeout', 'GALLERY_IMAGES'];

  function galleryService($q, $timeout, GALLERY_IMAGES) {

    var images = {
      loading: false,
      urls: GALLERY_IMAGES.home
    };

    var service = {
      images: images,
      update: update
    };

    function update(path) {
      var imagesToLoad = GALLERY_IMAGES[path] || GALLERY_IMAGES.home;
      var service = this;

      service.images.urls = [];

        service.images.loading = true
        preloadAll(imagesToLoad)
        .then(function() {
          console.log('PROMISES RESOLVED', new Date());
          service.images.urls = imagesToLoad;
        })
        .catch(function() {
          // TODO: actually handle errors.
          console.log('error preloading images');
        })
        .finally(function() {
          service.images.loading = false;
        });
    };

    function preloadAll(urls) {
      var promises = [];
      for (var i=0; i<urls.length; i++) {
        promises.push( preloadImage(urls[i]) );
      }
      console.log('PROMISES', promises, new Date());
      return promises.length ? $q.all(promises) : $q.reject();
    };

    function preloadImage(url) {
      var deferred = $q.defer();
      var image = new Image();

      image.src = url;

      if (image.complete) {
        deferred.resolve()
      } else {
        image.addEventListener('load', function() {
          deferred.resolve();
        });
        image.addEventListener('error', function() {
          deferred.reject();
        });
      }

      return deferred.promise
    }

    return service;
  };

})()
