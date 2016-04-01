(function() {
  'use strict';
  var BASE_URL = 'http://192.168.1.2/apps/isfs-maps/';
  var BROWSERS = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  var MIN_ZOOM = 4;
  var MAX_ZOOM = 9;
  var EXAMPLE1 = [
    {country: 'USA', color: 'rgb(255,0,0)'},
    {country: 'MEX', color: 'rgb(0,255,0)'}
  ];
  var EXAMPLE2 = [
    {country: 'USA/WY', color: '#fff5eb'},
    {country: 'USA/VT', color: '#fff5eb'},
    {country: 'USA/AK', color: '#fff5eb'},
    {country: 'USA/ND', color: '#fff5eb'},
    {country: 'USA/SD', color: '#fff5eb'},
    {country: 'USA/DE', color: '#fff5eb'},
    {country: 'USA/MT', color: '#fff5eb'},
    {country: 'USA/RI', color: '#fff5eb'},
    {country: 'USA/ME', color: '#fff5eb'},
    {country: 'USA/NH', color: '#fff5eb'},
    {country: 'USA/HI', color: '#fff5eb'},
    {country: 'USA/ID', color: '#fff5eb'},
    {country: 'USA/WV', color: '#fff5eb'},
    {country: 'USA/NE', color: '#fff5eb'},
    {country: 'USA/NM', color: '#fff5eb'},
    {country: 'USA/NV', color: '#fff5eb'},
    {country: 'USA/KS', color: '#fff5eb'},
    {country: 'USA/AR', color: '#fff5eb'},
    {country: 'USA/MS', color: '#fff5eb'},
    {country: 'USA/UT', color: '#fff5eb'},
    {country: 'USA/IA', color: '#fff5eb'},
    {country: 'USA/PR', color: '#fff5eb'},
    {country: 'USA/CT', color: '#fff5eb'},
    {country: 'USA/OK', color: '#fff5eb'},
    {country: 'USA/OR', color: '#fee6ce'},
    {country: 'USA/KY', color: '#fee6ce'},
    {country: 'USA/LA', color: '#fee6ce'},
    {country: 'USA/AL', color: '#fee6ce'},
    {country: 'USA/SC', color: '#fee6ce'},
    {country: 'USA/CO', color: '#fee6ce'},
    {country: 'USA/MN', color: '#fee6ce'},
    {country: 'USA/WI', color: '#fee6ce'},
    {country: 'USA/MD', color: '#fee6ce'},
    {country: 'USA/MO', color: '#fee6ce'},
    {country: 'USA/TN', color: '#fee6ce'},
    {country: 'USA/IN', color: '#fee6ce'},
    {country: 'USA/MA', color: '#fee6ce'},
    {country: 'USA/AZ', color: '#fee6ce'},
    {country: 'USA/WA', color: '#fee6ce'},
    {country: 'USA/VA', color: '#fdd0a2'},
    {country: 'USA/NJ', color: '#fdd0a2'},
    {country: 'USA/MI', color: '#fdd0a2'},
    {country: 'USA/NC', color: '#fdd0a2'},
    {country: 'USA/GA', color: '#fdd0a2'},
    {country: 'USA/OH', color: '#fdd0a2'},
    {country: 'USA/PA', color: '#fdae6b'},
    {country: 'USA/IL', color: '#fdae6b'},
    {country: 'USA/NY', color: '#f16913'},
    {country: 'USA/FL', color: '#f16913'},
    {country: 'USA/TX', color: '#a63603'},
    {country: 'USA/CA', color: '#7f2704'}
  ];
  var SIZE_SINGLE = 0;
  var SIZE_DOUBLE = 1;
  var SIZE_FULL = 2;
  var L = window.L;
  var thr0w = window.thr0w;
  var parameters = parseQueryString();
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    var frameEl = document.getElementById('my_frame');
    var contentEl = document.getElementById('my_content');
    thr0w.setBase('http://192.168.1.2'); // PROD
    // thr0w.setBase('http://localhost'); // DEV
    thr0w.addAdminTools(frameEl,
      connectCallback, messageCallback);
    function connectCallback() {
      var chart;
      var popup;
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
      var grid;
      var wm;
      var sync;
      var countriesSync;
      var myMap;
      var matrix;
      var rows;
      var base;
      var windowX;
      var windowY;
      var controlChannel;
      var channel = thr0w.getChannel();
      var size = parseInt(parameters.size);
      var singleEl = document.getElementById('single');
      var doubleEl = document.getElementById('double');
      switch (size) {
        case SIZE_SINGLE:
          base = 'single';
          controlChannel = channel;
          windowX = 180;
          windowY = 1420;
          matrix = [
            [channel]
          ];
          rows = [
            {
              width: 1080,
              height: 1920
            }
          ];
          break;
        case SIZE_DOUBLE:
          singleEl.style.display = 'block';
          controlChannel = parseInt(parameters.control);
          base = 'double_' + controlChannel;
          windowX = 180;
          windowY = 1420;
          switch (controlChannel) {
            case 6:
              if (channel !== 6 && channel !== 7) {
                throw 400;
              }
              matrix = [
                [6, 7]
              ];
              break;
            case 7:
              if (channel !== 7 && channel !== 8) {
                throw 400;
              }
              matrix = [
                [7, 8]
              ];
              break;
            case 8:
              if (channel !== 8 && channel !== 9) {
                throw 400;
              }
              matrix = [
                [8, 9]
              ];
              break;
            default:
              throw 400;
          }
          rows = [
            {
              width: 1080,
              height: 1920,
              spacing: 112
            }
          ];
          break;
        case SIZE_FULL:
          singleEl.style.display = 'block';
          doubleEl.style.display = 'block';
          base = 'full';
          controlChannel = 6;
          windowX = 300;
          windowY = 3252;
          matrix = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8, 9]
          ];
          rows = [
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
          ];
          break;
        default:
          throw 400;
      }
      grid = new thr0w.FlexGrid(
        frameEl,
        contentEl,
        matrix,
        rows
      );
      wm = new thr0w.windows.WindowManager(
        'wm',
        grid
      );
      sync = new thr0w.Sync(
        grid,
        base + '_map',
        message,
        receive
      );
      countriesSync = new thr0w.Sync(
        grid,
        base + '_countries',
        countriesMessage,
        countriesReceive
      );
      myMap = L.map(
        'mapid',
        {
          minZoom: MIN_ZOOM,
          maxZoom: MAX_ZOOM,
          touchZoom: false,
          doubleClickZoom: false,
          bounceAtZoomLimits: false,
          inertia: false,
          zoomControl: false,
          attributionControl: false,
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
      if (channel === controlChannel) {
        document.getElementById('controls').style.display = 'block';
      }
      contentEl.addEventListener('touchstart', handleTouchStart, true);
      contentEl.addEventListener('touchmove', handleTouchMove, true);
      contentEl.addEventListener('touchend', handleTouchEnd, true);
      singleEl.addEventListener('click', handleSingleClick);
      doubleEl.addEventListener('click', handleDoubleClick);
      document.getElementById('full')
        .addEventListener('click', handleFullClick);
      document.getElementById('remove')
        .addEventListener('click', handleRemoveClick);
      document.getElementById('example1')
        .addEventListener('click', handleExample1Click);
      document.getElementById('example2')
        .addEventListener('click', handleExample2Click);
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
      function handleTouchStart(e) {
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
      function handleTouchMove(e) {
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
      function handleTouchEnd(e) {
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
      function handleSingleClick() {
        switch (size) {
          case SIZE_FULL:
            thr0w.thr0wChannel([16, 17, 18, 19], {action: 'update',
              url: BASE_URL + '?size=0'});
            break;
          case SIZE_DOUBLE:
            switch (channel) {
              case 6:
                thr0w.thr0wChannel([16, 17], {action: 'update',
                  url: BASE_URL + '?size=0'});
                break;
              case 8:
                thr0w.thr0wChannel([18, 19], {action: 'update',
                  url: BASE_URL + '?size=0'});
                break;
              default:
            }
            break;
          default:
        }
      }
      function handleDoubleClick() {
        switch (size) {
          case SIZE_FULL:
            thr0w.thr0wChannel([16, 17], {action: 'update', url: BASE_URL +
              '?size=1&control=6'});
            thr0w.thr0wChannel([18, 19], {action: 'update', url: BASE_URL +
              '?size=1&control=8'});
            break;
          default:
        }
      }
      function handleFullClick() {
        thr0w.thr0wChannel(BROWSERS, {action: 'update', url: BASE_URL +
          '?size=2'});
      }
      function handleRemoveClick() {
        chart = null;
        popup = false;
        removeCountries();
        countriesSync.update();
        countriesSync.idle();
      }
      function handleExample1Click() {
        var i;
        chart = 'example1';
        popup = true;
        removeCountries();
        zoomLevel = 4;
        myMap.setView([51.505, -0.09], zoomLevel);
        centerY = myMap.latLngToContainerPoint(myMap.getCenter()).y;
        sync.update();
        sync.idle();
        countriesSync.update();
        for (i = 0; i < EXAMPLE1.length; i++) {
          addCountry(EXAMPLE1[i].country, EXAMPLE1[i].color);
        }
        countriesSync.update();
        countriesSync.idle();
      }
      function handleExample2Click() {
        var i;
        chart = 'usa_population';
        popup = false;
        removeCountries();
        switch (size) {
          case SIZE_SINGLE:
            zoomLevel = 4;
            break;
          case SIZE_DOUBLE:
            zoomLevel = 5;
            break;
          case SIZE_FULL:
            zoomLevel = 6;
            break;
          default:
        }
        myMap.setView([41.4831349,-101.9244864], zoomLevel);
        centerY = myMap.latLngToContainerPoint(myMap.getCenter()).y;
        sync.update();
        sync.idle();
        countriesSync.update();
        for (i = 0; i < EXAMPLE2.length; i++) {
          addCountry(EXAMPLE2[i].country, EXAMPLE2[i].color);
        }
        countriesSync.update();
        countriesSync.idle();
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
            if (popup) {
              layer.addEventListener('click', handleClick);
            }
          }
          function handleClick() {
            wm.closeAllWindows();
            wm.openWindow(code, windowX, windowY, 300, 300,
              chart + '/?code=' + code);
          }
        }
        xmlhttp.open('GET', 'lib/world.geo.json/countries/' +
          code + '.geo.json', true);
        xmlhttp.send();
      }
      function removeCountries() {
        var i;
        var layer;
        wm.closeAllWindows();
        for (i = 0; i < countries.length; i++) {
          layer = countries[i].layer;
          layer.removeEventListener();
          layer.removeFrom(myMap);
        }
        countries = [];
      }
    }
    function messageCallback() {}
  }
  function parseQueryString() {
    var i;
    var parameterArray;
    var parsed = {};
    var qs = window.location.search;
    var qsArray;
    if (!qs) {
      return parsed;
    }
    qsArray = qs.substr(1).split('&');
    for (i = 0; i < qsArray.length; ++i) {
      parameterArray = qsArray[i].split('=', 2);
      if (parameterArray.length === 1) {
        parsed[parameterArray[0]] = '';
      } else {
        parsed[parameterArray[0]] = decodeURIComponent(parameterArray[1].replace(/\+/g, ' '));
      }
    }
    return parsed;
  }
})();
