(function() {
  'use strict';
  var INTERVAL = 10000;
  var ZOOM = 5;
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
    thr0w.setBase('http://localhost');
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
      // jscs:disable
      L.tileLayer(
        'http://192.168.1.2/satellite/{z}/{y}/{x}',
        {
           attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }
      ).addTo(leafletMap);
      // jscs:enable
      if (thr0w.getChannel() === 0) {
        window.setInterval(move, INTERVAL);
      }
      frameEl.addEventListener('click', handleClick);
      function move() {
        position++;
        position = position < POSITIONS.length ? position : 0;
        map.moveTo(5000, POSITIONS[position][0], POSITIONS[position][1], ZOOM);
      }
      function handleClick() {
        window.location.href = 'interact/?size=0';
      }
    }
    function messageCallback() {
    }
  }
})();
