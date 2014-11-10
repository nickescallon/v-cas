(function() {
  'use strict';

  angular.module('vCas.directives.gallery', [])
  .directive('neGallery', neGallery);

  function neGallery() {
    var directive = {
      restrict: 'E',
      scope: {
        images: '=',
      },
      replace: true,
      template: '<div class="gallery"><img ng-repeat="image in images" ng-src="{{ image }}"/></div>',
      link: link
    };
    return directive;

    function link(scope, element) {
      //TODO: Add scrolling functionality
    };

  };
})();
