(function() {
  'use strict';
  var TIMEOUT = 120 * 1000;
  var CHANNELS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var thr0w = window.thr0w;
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    var sync;
    var cover = false;
    var active = true;
    var frameEl = document.getElementById('my_frame');
    var contentEl = document.getElementById('my_content');
    var coverEl = document.getElementById('cover');
    var captureEl = document.getElementById('capture');
    var captureFrameLeftEl = document
      .getElementById('capture__frame--left');
    var captureFrameMiddleLeftEl = document
      .getElementById('capture__frame--middle-left');
    var captureFrameMiddleRightEl = document
      .getElementById('capture__frame--middle-right');
    var captureFrameRightEl = document
      .getElementById('capture__frame--right');
    var base = window.location.protocol + '//' +
      window.location.hostname;
    thr0w.setBase(base);
    thr0w.addAdminTools(frameEl,
      connectCallback, messageCallback);
    function connectCallback() {
      var grid = new thr0w.FlexGrid(
        frameEl,
        contentEl,
        [[6, 7, 8 , 9]],
        [
          {
            width: 1080,
            height: 1920,
            spacing: 112
          }
        ]
      );
      sync = new thr0w.Sync(
        grid,
        'cover',
        message,
        receive
      );
      thr0w.draw.load(grid);
      frameEl.addEventListener('touchstart', keepActive, true);
      document.getElementById('controls__back').addEventListener('click',
        handleControlsBackClick);
      document.getElementById('controls__capture').addEventListener('click',
        handleControlsCaptureClick);
      if (thr0w.getChannel() === 6) {
        document.getElementById('controls').style.display = 'block';
        document.getElementById('capture__controls__cancel')
          .addEventListener('click', handleCaptureControlsCancel);
      }
      window.setInterval(checkIdle, TIMEOUT);
      function message() {
        return {
          cover: cover
        };
      }
      function receive(data) {
        window.console.log(data);
        if (data.cover) {
          coverEl.style.display = 'block';
        } else {
          coverEl.style.display = 'none';
        }
      }
    }
    function messageCallback(data) {
      if (data.message.thr0w && data.message.thr0w.type === 'capture') {
        switch (data.source) {
          case 16:
            cover = true;
            captureFrameLeftEl.style.backgroundImage = 'url(' +
              data.message.thr0w.dataUrl + ')';
            coverEl.style.display = 'block';
            captureEl.style.display = 'block';
            sync.update();
            break;
          case 17:
            captureFrameMiddleLeftEl.style.backgroundImage = 'url(' +
              data.message.thr0w.dataUrl + ')';
            break;
          case 18:
            captureFrameMiddleRightEl.style.backgroundImage = 'url(' +
              data.message.thr0w.dataUrl + ')';
            break;
          case 19:
            captureFrameRightEl.style.backgroundImage = 'url(' +
              data.message.thr0w.dataUrl + ')';
            break;
          default:
        }
        return;
      }
      if (data.message.type === 'idle') {
        document.location.href = '../';
      } else if (data.message.type === 'active') {
        active = true;
      }
    }
    function keepActive() {
      active = true;
      thr0w.thr0wChannel(CHANNELS, {type: 'active'});
    }
    function checkIdle() {
      keepActive();
    }
    function handleControlsBackClick() {
      thr0w.thr0wChannel(CHANNELS, {type: 'idle'});
    }
    function handleControlsCaptureClick() {
      thr0w.thr0w([16, 17, 18, 19], {
        action: 'capture',
        target: 6
      });
    }
    function handleCaptureControlsCancel() {
      cover = false;
      captureFrameLeftEl.style.backgroundImage = 'none';
      captureFrameMiddleLeftEl.style.backgroundImage = 'none';
      captureFrameMiddleRightEl.style.backgroundImage = 'none';
      captureFrameRightEl.style.backgroundImage = 'none';
      captureEl.style.display = 'none';
      coverEl.style.display = 'none';
      sync.update();
    }
  }
})();
