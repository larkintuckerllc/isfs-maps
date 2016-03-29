(function() {
  'use strict';
  // jscs:disable
  var MIN_ZOOM = 4;
  var MAX_ZOOM = 9;
  // jscs:enable
  var L = window.L;
  var thr0w = window.thr0w;
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    var frameEl = document.getElementById('my_frame');
    var contentEl = document.getElementById('my_content');
    thr0w.setBase('http://192.168.1.2');
    // thr0w.setBase('http://localhost');
    thr0w.addAdminTools(frameEl,
      connectCallback, messageCallback);
    function connectCallback() {
      var countries = [];
      var touchZoom;
      var touchStartRadius;
      var touchOneCurrentX;
      var touchOneCurrentY;
      var touchTwoCurrentX;
      var touchTwoCurrentY;
      var zoomLevel = MIN_ZOOM;
      var centerY;
      var cancelMove;
      var grid = new thr0w.FlexGrid(
        frameEl,
        contentEl,
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
      var sync = new thr0w.Sync(
        grid,
        'map',
        message,
        receive
      );
      var countriesSync = new thr0w.Sync(
        grid,
        'countries',
        countriesMessage,
        countriesReceive
      );
      var myMap = L.map(
        'mapid',
        {
          minZoom: MIN_ZOOM,
          maxZoom: MAX_ZOOM,
          touchZoom: false,
          doubleClickZoom: false,
          bounceAtZoomLimits: false,
          inertia: false,
          zoomControl: false,
          fadeAnimation: false,
          zoomAnimation: false,
          markerZoomAnimation: false,
        }
      );
      myMap.setView([51.505, -0.09], zoomLevel);
      centerY = myMap.latLngToContainerPoint(myMap.getCenter()).y;
      // jscs:disable
      L.tileLayer(
        'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        {
	         attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }
      ).addTo(myMap);
      // jscs:enable
      contentEl.addEventListener('touchstart', start, true);
      contentEl.addEventListener('touchmove', move, true);
      contentEl.addEventListener('touchend', end, true);
      window.addCountry = function(code, color) {
        addCountry(code, color);
        countriesSync.update();
        countriesSync.idle();
      };
      window.removeCountries = function() {
        removeCountries();
        countriesSync.update();
        countriesSync.idle();
      };
      function message() {
        return {
          center: myMap.getCenter(),
          zoom: myMap.getZoom()
        };
      }
      function receive(data) {
        zoomLevel = data.zoom;
        myMap.setView(data.center, zoomLevel, {animate: false});
      }
      function countriesMessage() {
        var i;
        var data = [];
        for (i = 0; i < countries.length; i++) {
          data.push({
            code: countries[i].code,
            color: countries[i].color
          });
        }
        return data;
      }
      function countriesReceive(data) {
        var i;
        if (data.length === 0) {
          removeCountries();
        } else if (data.length !== countries.length) {
          for (i = countries.length; i < data.length; i++) {
            addCountry(data[i].code, data[i].color);
          }
        }
      }
      function addCountry(code, color) {
        var country;
        var layer;
        var xmlhttp = new XMLHttpRequest();
        country = {
          code: code,
          color: color
        };
        countries.push(country);
        xmlhttp.onreadystatechange = handleOnReadyStateChange;
        function handleOnReadyStateChange() {
          if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            layer = L.geoJson(
              JSON.parse(xmlhttp.responseText),
              {
                fillColor: color,
                weight: 5,
                opacity: 1,
                color: 'rgb(255,255,255)',
                fillOpacity: 0.7
              }
            );
            country.layer = layer;
            layer.addTo(myMap);
          }
        }
        xmlhttp.open('GET', 'lib/world.geo.json/countries/' +
          code + '.geo.json', true);
        xmlhttp.send();
      }
      function start(e) {
        cancelMove = false;
        touchOneCurrentX = e.touches[0].pageX;
        touchOneCurrentY = e.touches[0].pageY;
        if (e.touches.length > 1) { // HACK TO REPLACE POOR TOUCH ZOOM
          e.stopPropagation();
          if (e.touches.length === 2) {
            touchZoom = true;
            touchTwoCurrentX = e.touches[1].pageX;
            touchTwoCurrentY = e.touches[1].pageY;
            touchStartRadius = Math.floor(Math.sqrt(
              Math.pow(touchOneCurrentX - touchTwoCurrentX, 2) +
              Math.pow(touchOneCurrentY - touchTwoCurrentY, 2)
            ));
          }
        } else {
          touchZoom = false;
          sync.update();
        }
      }
      function move(e) {
        var touchOneLastY = touchOneCurrentY;
        var center = myMap.getCenter();
        touchOneCurrentX = e.touches[0].pageX;
        touchOneCurrentY = e.touches[0].pageY;
        if (e.touches.length > 1) {
          e.stopPropagation(); // HACK TO REPLACE POOR TOUCH ZOOM
          touchTwoCurrentX = e.touches[1].pageX;
          touchTwoCurrentY = e.touches[1].pageY;
        } else {
          if (cancelMove) { // HACK TO PREVENT POOR EDGE HANDLING
            e.stopPropagation();
            return;
          }
          if (touchOneCurrentY > touchOneLastY &&
            myMap.latLngToContainerPoint(center).y > centerY) {
            e.stopPropagation();
            cancelMove = true;
            myMap.setView(L.latLng(80,center.lng), zoomLevel, {animate: false});
          }
          if (touchOneCurrentY < touchOneLastY &&
            myMap.latLngToContainerPoint(center).y < centerY) {
            e.stopPropagation();
            cancelMove = true;
            myMap.setView(L.latLng(-80,center.lng), zoomLevel,
              {animate: false});
          }
          sync.update();
        }
      }
      function end(e) {
        var touchEndRadius;
        if (e.touches.length === 0) {
          if (touchZoom) { // HACK TO HANDLE POOR TOUCH ZOOM
            touchEndRadius = Math.floor(Math.sqrt(
              Math.pow(touchOneCurrentX - touchTwoCurrentX, 2) +
              Math.pow(touchOneCurrentY - touchTwoCurrentY, 2)
            ));
            zoomLevel = zoomLevel > MIN_ZOOM &&
              touchEndRadius < touchStartRadius ?
              zoomLevel - 1 : zoomLevel;
            zoomLevel = zoomLevel < MAX_ZOOM &&
              touchEndRadius > touchStartRadius ?
              zoomLevel + 1 : zoomLevel;
            myMap.setView(myMap.getCenter(), zoomLevel, {animate: false});
          }
          sync.update();
          sync.idle();
        }
      }
      function removeCountries() {
        var i;
        for (i = 0; i < countries.length; i++) {
          countries[i].layer.removeFrom(myMap);
        }
        countries = [];
      }
    }
    function messageCallback() {}
  }
})();
