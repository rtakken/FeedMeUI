(function() {
  'use strict';

  angular
    .module('feedMe')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController(toastr) {}
})();
