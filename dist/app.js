(function() {
  'use strict';
  var START_HOUR = 8;
  var STOP_HOUR = 17;
  var INTERVAL = 240 * 1000;
  var TILES_INTERVAL = 60 * 1000;
  var ANIMATION = 230 * 1000;
  var ZOOM = 7;
  var POSITIONS = [
    [36, -114],
    [40,-6],
    [24, 88],
    [6,0],
    [-12, -60]
  ];
  var L = window.L;
  var thr0w = window.thr0w;
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    var frameEl = document.getElementById('my_frame');
    var base = window.location.protocol + '//' +
      window.location.hostname;
    thr0w.setBase(base);
    thr0w.addAdminTools(frameEl,
      connectCallback, messageCallback);
    function connectCallback() {
      var position = 0;
      var grid = new thr0w.FlexGrid(
        frameEl,
        document.getElementById('my_content'),
        [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8, 9]
        ],
        [
          {
            width: 1920,
            height: 1080,
            spacing: 28,
            scale: 0.84,
            margin: 20
          },
          {
            width: 1920,
            height: 1080,
            spacing: 28,
            scale: 0.84,
            margin: 60
          },
          {
            width: 1080,
            height: 1920,
            spacing: 112,
            padding: 111
          }
        ]
      );
      var map = new thr0w.leaflet.Map(grid,
        POSITIONS[0][0], POSITIONS[0][1], ZOOM,
        {
          zoomControl: false,
          attributionControl: false
        }
      );
      var leafletMap = map.getLeafletMap();
      var tiles = null;
      var tileLayer = null;
      var tilesSync = new thr0w.Sync(
        grid,
        'tiles',
        tilesMessage,
        tilesReceive
      );
      if (thr0w.getChannel() === 0) {
        move();
        checkTime();
        window.setInterval(move, INTERVAL);
        window.setInterval(checkTime, TILES_INTERVAL);
      }
      frameEl.addEventListener('touchstart', handleClick, true);
      function tilesMessage() {
        return {
          tiles: tiles
        };
      }
      function tilesReceive(data) {
        changeTiles(data.tiles);
      }
      function changeTiles(newTiles) {
        if (tileLayer) {
          tileLayer.removeFrom(leafletMap);
        }
        tiles = newTiles;
        if (tiles === 'night') {
          // jscs:disable
          tileLayer = L.tileLayer(
            'http://192.168.1.2:8082/night/{z}/{x}/{y}.png',
            {
          	   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
            }
          ).addTo(leafletMap);
          // jscs:enable
        } else {
          // jscs:disable
          tileLayer = L.tileLayer(
            'http://192.168.1.2:8080/satellite/{z}/{y}/{x}',
            {
               attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            }
          ).addTo(leafletMap);
          // jscs:enable
        }
      }
      function move() {
        position++;
        position = position < POSITIONS.length ? position : 0;
        map.moveTo(ANIMATION, POSITIONS[position][0],
          POSITIONS[position][1], ZOOM);
      }
      function handleClick() {
        window.location.href = 'interact/?size=0';
      }
      function checkTime() {
        var hours = (new Date()).getHours();
        var newTiles = hours >= START_HOUR && hours <= STOP_HOUR ?
          'day' : 'night';
        if (newTiles !== tiles) {
          changeTiles(newTiles);
          tilesSync.update();
          tilesSync.idle();
        }
      }
    }
    function messageCallback() {
    }
  }
})();
