(function() {
  'use strict';

  angular
    .module('feedMe')
    .controller('LocationController', LocationController);

  /** @ngInject */
  function LocationController(toastr) {}
})();
