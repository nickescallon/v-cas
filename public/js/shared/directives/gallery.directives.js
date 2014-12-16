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
      template: '<div class="scroll-container"><div class="gallery"><img ng-repeat="image in displayedImages" ng-src="{{ image }}"/></div><div class="scroll left"></div><div class="scroll right"></div></div>',
      link: link
    };
    return directive;

    function link(scope, element) {
      //TODO: Add scrolling functionality
      // var galleryElem = element[0].querySelector('.gallery');
      // galleryElem.scrollLeft += 5;
      //on hover of right element, += scrollLeft
      //on hover of left element, -= scrollLeft

      scope.displayedImages = [];

      scope.$watch('images', function(newVals) {
        // Here we allow 1 second for the ng-leave animation
        // Also helps to hide preloading
        scope.displayedImages = [];
        $timeout(function() {
          scope.displayedImages = scope.images;
        }, 1000);
      });
    };

  };
})();
