(function() {
  'use strict';

  angular
    .module('feedMe')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
