(function() {
  'use strict';

  angular
    .module('feedMe')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $locationProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

})();
