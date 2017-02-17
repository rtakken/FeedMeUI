(function() {
  'use strict';

  angular
    .module('feedMe')
    .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController(toastr) {}
})();
