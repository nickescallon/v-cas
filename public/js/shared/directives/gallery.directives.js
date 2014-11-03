(function() {
  'use strict';

  angular.module('vCas.directives.gallery', [])
  .directive('neGallery', neGallery);

  function neGallery() {
    var directive = {
      restrict: 'E',
      replace: true,
      template: '<div class="gallery"><img ng-repeat="picture in pictures" ng-src="{{ picture.url }}"/></div>',
      link: link
    };
    return directive;

    function link(scope, element) {
      scope.pictures = [
        {url: 'http://veronicacastellucci.com/images/Hutchinson/hutchinson_1.jpeg'},
        {url: 'http://veronicacastellucci.com/images/Hutchinson/hutchinson_2.jpeg'},
        {url: 'http://veronicacastellucci.com/images/Hutchinson/hutchinson_3.jpeg'},
        {url: 'http://veronicacastellucci.com/images/Hutchinson/hutchinson_4.jpeg'},
        {url: 'http://veronicacastellucci.com/images/Hutchinson/hutchinson_5.jpeg'},
        {url: 'http://veronicacastellucci.com/images/Hutchinson/hutchinson_6.jpeg'}
      ];
    };

  };

})();
