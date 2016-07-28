(function() {
  'use strict';
  var TIMEOUT = 120 * 1000;
  var CHANNELS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var thr0w = window.thr0w;
  var ds = window.ds;
  var base = window.location.protocol + '//' +
    window.location.hostname;
  var dsToken;
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
    thr0w.setBase(base);
    ds.setBase(base);
    thr0w.addAdminTools(frameEl,
      connectCallback, messageCallback);
    function connectCallback() {
      var thr0wToken = thr0w.getToken();
      ds.loginToken(thr0wToken, handleLoginToken);
      function handleLoginToken(loginTokenErr) {
        if (loginTokenErr !== null) {
          return ds.addAdminTools(frameEl, handleDsLogin);
        }
        handleDsLogin();
        function handleDsLogin() {
          dsToken = ds.getToken();
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
            document.getElementById('capture__controls__email')
              .addEventListener('click', handleCaptureControlsEmail);
          }
          window.setInterval(checkIdle, TIMEOUT);
          function message() {
            return {
              cover: cover
            };
          }
          function receive(data) {
            if (data.cover) {
              coverEl.style.display = 'block';
            } else {
              coverEl.style.display = 'none';
            }
          }
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
            sync.idle();
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
      closeCapture();
    }
    function handleCaptureControlsEmail() {
      var leftImage;
      var middleLeftImage;
      var middleRightImage;
      var rightImage;
      var backgroundImage;
      backgroundImage = captureFrameLeftEl.style.backgroundImage;
      leftImage = backgroundImage !== 'none' ? backgroundImage
        .substring(28, backgroundImage.length - 2) : null;
      backgroundImage = captureFrameMiddleLeftEl.style.backgroundImage;
      middleLeftImage = backgroundImage !== 'none' ? backgroundImage
        .substring(28, backgroundImage.length - 2) : null;
      backgroundImage = captureFrameMiddleRightEl.style.backgroundImage;
      middleRightImage = backgroundImage !== 'none' ? backgroundImage
        .substring(28, backgroundImage.length - 2) : null;
      backgroundImage = captureFrameRightEl.style.backgroundImage;
      rightImage = backgroundImage !== 'none' ? backgroundImage
        .substring(28, backgroundImage.length - 2) : null;
      mail(leftImage, middleLeftImage,
        middleRightImage, rightImage, handleMail);
      closeCapture();
      function handleMail() {
      }
    }
    function closeCapture() {
      cover = false;
      captureFrameLeftEl.style.backgroundImage = 'none';
      captureFrameMiddleLeftEl.style.backgroundImage = 'none';
      captureFrameMiddleRightEl.style.backgroundImage = 'none';
      captureFrameRightEl.style.backgroundImage = 'none';
      captureEl.style.display = 'none';
      coverEl.style.display = 'none';
      sync.update();
      sync.idle();
    }
  }
  function mail(leftImage, middleLeftImage,
      middleRightImage, rightImage, callback) {
    var xmlhttp = new XMLHttpRequest();
    var message = {
      html: '<p><b>This</b> worked.</p>',
      text: 'This worked',
      subject: 'Test Subject from browser',
      to: [{
        email: 'john@larkintuckerllc.com',
        name: 'John Tucker',
        type: 'to'
      }]
    };
    if (
      leftImage !== null ||
      middleLeftImage !== null ||
      middleRightImage !== null ||
      rightImage !== null
    ) {
      message.attachments = [];
      if (leftImage !== null) {
        message.attachments.push({
          type: 'image/jpeg',
          name: 'left.jpg',
          content: leftImage
        });
      }
      if (middleLeftImage !== null) {
        message.attachments.push({
          type: 'image/jpeg',
          name: 'middle-left.jpg',
          content: middleLeftImage
        });
      }
      if (middleRightImage !== null) {
        message.attachments.push({
          type: 'image/jpeg',
          name: 'middle-right.jpg',
          content: middleRightImage
        });
      }
      if (rightImage !== null) {
        message.attachments.push({
          type: 'image/jpeg',
          name: 'right.jpg',
          content: rightImage
        });
      }
    }
    xmlhttp.open('POST', base + ':3010/api/mail', true);
    xmlhttp.setRequestHeader('Authorization',
      'bearer ' + dsToken);
    xmlhttp.setRequestHeader('Content-type',
      'application/json');
    xmlhttp.onreadystatechange = handleOnreadystatechange;
    xmlhttp.send(JSON.stringify(message));
    function handleOnreadystatechange() {
      if (xmlhttp.readyState !== 4) {
        return;
      }
      if (xmlhttp.status !== 200) {
        return callback(xmlhttp.status ? xmlhttp.status : 500);
      }
      return callback(null);
    }
  }
})();
