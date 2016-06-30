(function() {
  'use strict';
  var TIMEOUT = 120 * 1000;
  var CHANNELS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var thr0w = window.thr0w;
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    var grid;
    var active = true;
    var frameEl = document.getElementById('my_frame');
    var contentEl = document.getElementById('my_content');
    thr0w.setBase('http://192.168.1.2'); // PROD
    // thr0w.setBase('http://localhost'); // DEV
    thr0w.addAdminTools(frameEl,
      connectCallback, messageCallback);
    function connectCallback() {
      grid = new thr0w.FlexGrid(
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
      thr0w.draw.load(grid);
      frameEl.addEventListener('touchstart', keepActive, true);
      document.getElementById('back').addEventListener('click',
        handleBackClick);
      if (thr0w.getChannel() === 6) {
        document.getElementById('controls').style.display = 'block';
      }
      window.setInterval(checkIdle, TIMEOUT);
    }
    function messageCallback(data) {
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
    function handleBackClick() {
      thr0w.thr0wChannel(CHANNELS, {type: 'idle'});
    }
  }
})();
