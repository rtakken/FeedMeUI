(function() {
  'use strict';

  angular
    .module('feedMe')
    .directive('liveVideo', liveVideo);

  /** @ngInject */
  function liveVideo() {
    var socket;
    var directive = {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'app/components/livevideo/livevideo.html',
      compile: function() {
        var video = document.getElementById("video");
        socket = new WebSocket("ws://e98d4295.ngrok.io/websocket");
        // Request the video stream once connected
        socket.onopen = function () {
            console.log("Connected!");
            readCamera();
        };

        // Currently, all returned messages are video data. However, this is
        // extensible with full-spec JSON-RPC.
        socket.onmessage = function (messageEvent) {
          video.src = "data:image/jpeg;base64," + messageEvent.data;
        };
      }
    };

    return directive;

    // Requests video stream
    function readCamera() {
      socket.send("read_camera");
    }
  }
})();
