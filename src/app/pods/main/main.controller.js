(function() {
  'use strict';

  angular
    .module('feedMe')
    .controller('MainController', MainController);

  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1487341829373;
    vm.showToastr = showToastr;
    vm.webSocketValue = 'ws://770f377d.ngrok.io/websocket';

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      vm.socket.send("donation");
      toastr.info('Thank you for your donations');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
