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

    activate();

    function connect(port) {
      var video = document.getElementById("video");
      vm.socket = new WebSocket("ws://testme.localtunnel.me/websocket");
      // Request the video stream once connected
      vm.socket.onopen = function () {
          console.log("Connected!");
          readCamera();
      };

      // Currently, all returned messages are video data. However, vm is
      // extensible with full-spec JSON-RPC.
      vm.socket.onmessage = function (messageEvent) {
          video.src = "data:image/jpeg;base64," + messageEvent.data;
      };
    }

    // Requests video stream
    function readCamera() {
        vm.socket.send("read_camera");
    }

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Thank you for your donations');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
    connect();
  }
})();
