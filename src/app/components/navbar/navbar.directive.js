(function() {
  'use strict';

  angular
    .module('feedMe')
    .directive('navBar', navBar);

  /** @ngInject */
  function navBar() {
    var directive = {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'app/components/navbar/navbar.html',
      compile: function(element, attrs) {  // (1)
        var li, liElements, links, index, length;
   
        liElements = angular.element(element).find("#navigation-tabs li");   // (2)
        for (index = 0, length = liElements.length; index < length; index++) {
          li = liElements[index];
          links = angular.element(li).find("a");  // (3)
          if (links[0].textContent === attrs.currentTab) angular.element(li).addClass("active"); // (4)
        }
      }
    };
    return directive;
  }
})();
