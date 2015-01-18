(function() {
  'use strict';

  angular.module('vCas.directives.gallery', [])
  .directive('neGallery', neGallery);

  neGallery.$inject = ['$timeout'];

  function neGallery($timeout) {
    var directive = {
      restrict: 'E',
      scope: {
        images: '=',
      },
      replace: true,
      templateUrl: 'gallery.directive.template.html',
      link: link
    };
    return directive;

    function link(scope, element) {
      var scrollLimit;
      var scrollTimeout;

      // selections
      var jsElem = element[0];
      var galleryElem = jsElem.querySelector('.gallery');
      var scrollLeftElem = jsElem.querySelector('.scroll.left');
      var scrollRightElem = jsElem.querySelector('.scroll.right');

      // register handlers
      scrollLeftElem.addEventListener('mouseover', scrollLeft);
      scrollRightElem.addEventListener('mouseover', scrollRight);
      scrollLeftElem.addEventListener('mouseout', stopScroll);
      scrollRightElem.addEventListener('mouseout', stopScroll);

      // scope properties
      scope.displayedImages = [];
      scope.$watch('images', loadImages);

      function loadImages() {
        // Here we allow 1 second for the ng-leave animation
        // Also helps to hide preloading
        scope.displayedImages = [];
        $timeout(function() {
          scope.displayedImages = scope.images;
          scope.scrollLimit = findScrollLimit(galleryElem)
        }, 1000);
      };

      function findScrollLimit(element) {
        return element.scrollWidth - element.clientWidth;
      };

      function scrollLeft() {
        if (galleryElem.scrollLeft <= 0) {
          return;
        }

        galleryElem.scrollLeft -= 5;
        scrollTimeout = $timeout(scrollLeft, 10);
      };

      function scrollRight() {
        if (galleryElem.scrollLeft >= scrollLimit) {
          return;
        }

        galleryElem.scrollLeft += 5;
        scrollTimeout = $timeout(scrollRight, 10);
      };

      function stopScroll() {
        $timeout.cancel(scrollTimeout);
      };
    };

  };
})();
