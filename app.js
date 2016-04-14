(function() {
  'use strict';
  var BASE_URL = 'http://192.168.1.2/apps/debug2/'; // PROD
  // var BASE_URL = 'http://localhost/apps/isfs-maps/'; // DEV
  var BROWSERS = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  var MIN_ZOOM = 4;
  var MAX_ZOOM = 9;
  var EXAMPLE1 = [
    {region: 'USA', color: 'rgb(255,0,0)'},
    {region: 'MEX', color: 'rgb(0,255,0)'}
  ];
  var EXAMPLE2 = [
    {region: 'USA/WY', color: '#fff5eb'},
    {region: 'USA/VT', color: '#fff5eb'},
    {region: 'USA/AK', color: '#fff5eb'},
    {region: 'USA/ND', color: '#fff5eb'},
    {region: 'USA/SD', color: '#fff5eb'},
    {region: 'USA/DE', color: '#fff5eb'},
    {region: 'USA/MT', color: '#fff5eb'},
    {region: 'USA/RI', color: '#fff5eb'},
    {region: 'USA/ME', color: '#fff5eb'},
    {region: 'USA/NH', color: '#fff5eb'},
    {region: 'USA/HI', color: '#fff5eb'},
    {region: 'USA/ID', color: '#fff5eb'},
    {region: 'USA/WV', color: '#fff5eb'},
    {region: 'USA/NE', color: '#fff5eb'},
    {region: 'USA/NM', color: '#fff5eb'},
    {region: 'USA/NV', color: '#fff5eb'},
    {region: 'USA/KS', color: '#fff5eb'},
    {region: 'USA/AR', color: '#fff5eb'},
    {region: 'USA/MS', color: '#fff5eb'},
    {region: 'USA/UT', color: '#fff5eb'},
    {region: 'USA/IA', color: '#fff5eb'},
    {region: 'USA/CT', color: '#fff5eb'},
    {region: 'USA/OK', color: '#fff5eb'},
    {region: 'USA/OR', color: '#fee6ce'},
    {region: 'USA/KY', color: '#fee6ce'},
    {region: 'USA/LA', color: '#fee6ce'},
    {region: 'USA/AL', color: '#fee6ce'},
    {region: 'USA/SC', color: '#fee6ce'},
    {region: 'USA/CO', color: '#fee6ce'},
    {region: 'USA/MN', color: '#fee6ce'},
    {region: 'USA/WI', color: '#fee6ce'},
    {region: 'USA/MD', color: '#fee6ce'},
    {region: 'USA/MO', color: '#fee6ce'},
    {region: 'USA/TN', color: '#fee6ce'},
    {region: 'USA/IN', color: '#fee6ce'},
    {region: 'USA/MA', color: '#fee6ce'},
    {region: 'USA/AZ', color: '#fee6ce'},
    {region: 'USA/WA', color: '#fee6ce'},
    {region: 'USA/VA', color: '#fdd0a2'},
    {region: 'USA/NJ', color: '#fdd0a2'},
    {region: 'USA/MI', color: '#fdd0a2'},
    {region: 'USA/NC', color: '#fdd0a2'},
    {region: 'USA/GA', color: '#fdd0a2'},
    {region: 'USA/OH', color: '#fdd0a2'},
    {region: 'USA/PA', color: '#fdae6b'},
    {region: 'USA/IL', color: '#fdae6b'},
    {region: 'USA/NY', color: '#f16913'},
    {region: 'USA/FL', color: '#f16913'},
    {region: 'USA/TX', color: '#a63603'},
    {region: 'USA/CA', color: '#7f2704'}
  ];
  var EXAMPLE3 = [
    {
      latlng: [41.4831349,-101.9244864],
      iconUrls: [
        'img/markers/cat.jpg',
        'img/markers/single.png'
      ],
      minZoom: 5
    }
  ];
  var SIZE_SINGLE = 0;
  var SIZE_DOUBLE = 1;
  var SIZE_FULL = 2;
  var CHARTS = {
    example1: {
      popup: true,
      center: [41.4831349,-101.9244864],
      zoom: {
        0: 4,
        1: 4,
        2: 4
      },
      regions: EXAMPLE1,
      markers: []
    },
    example2: {
      popup: false,
      center: [41.4831349,-101.9244864],
      zoom: {
        0: 4,
        1: 5,
        2: 6
      },
      regions: EXAMPLE2,
      markers: []
    },
    example3: {
      popup: false,
      center: [41.4831349,-101.9244864],
      zoom: {
        0: 4,
        1: 5,
        2: 6
      },
      regions: [],
      markers: EXAMPLE3
    }
  };
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
      var chart = null;
      var tiles = null;
      var regions = [];
      var markers = [];
      var grid;
      var wm;
      var chartSync;
      var leafletMap;
      var map;
      var matrix;
      var rows;
      var base;
      var windowX;
      var windowY;
      var controlChannel;
      var tileLayer;
      var channel = thr0w.getChannel();
      var size = parseInt(parameters.size);
      var singleEl = document.getElementById('single');
      var doubleEl = document.getElementById('double');
      var fullEl = document.getElementById('full');
      var satelliteEl = document.getElementById('satellite');
      var streetEl = document.getElementById('street');
      switch (size) {
        case SIZE_SINGLE:
          fullEl.style.display = 'block';
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
          fullEl.style.display = 'block';
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
      chartSync = new thr0w.Sync(
        grid,
        base + '_chart',
        chartMessage,
        chartReceive
      );
      leafletMap = L.map(
        'mapid',
        {
          minZoom: MIN_ZOOM,
          maxZoom: MAX_ZOOM,
          zoomControl: false,
          attributionControl: false
        }
      );
      leafletMap.setView([0, 0], MIN_ZOOM);
      leafletMap.addEventListener('zoom', zoomed);
      tiles = 'satellite';
      updateTiles();
      map = new thr0w.leaflet.Map(grid, leafletMap);
      // CONTROLS
      if (channel === controlChannel) {
        document.getElementById('controls').style.display = 'block';
      }
      singleEl.addEventListener('click', handleSingleClick);
      doubleEl.addEventListener('click', handleDoubleClick);
      document.getElementById('full')
        .addEventListener('click', handleFullClick);
      satelliteEl.addEventListener('click', handleSatelliteClick);
      streetEl.addEventListener('click', handleStreetClick);
      document.getElementById('remove')
        .addEventListener('click', handleRemoveClick);
      document.getElementById('example1')
        .addEventListener('click', handleExample1Click);
      document.getElementById('example2')
        .addEventListener('click', handleExample2Click);
      document.getElementById('example3')
        .addEventListener('click', handleExample3Click);
      function chartMessage() {
        return {
          chart: chart,
          tiles: tiles
        };
      }
      function chartReceive(data) {
        chart = data.chart;
        tiles = data.tiles;
        updateChart();
        updateTiles();
      }
      function zoomed() {
        var zoom = leafletMap.getZoom();
        var i;
        for (i = 0; i < markers.length; i++) {
          if (zoom >= markers[i].minZoom && !markers[i].added) {
            markers[i].added = true;
            markers[i].layer.addTo(leafletMap);
          }
          if (zoom < markers[i].minZoom && markers[i].added) {
            markers[i].added = false;
            markers[i].layer.removeFrom(leafletMap);
          }
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
      function handleSatelliteClick() {
        satelliteEl.style.display = 'none';
        streetEl.style.display = 'block';
        tiles = 'satellite';
        updateTiles();
        chartSync.update();
        chartSync.idle();
      }
      function handleStreetClick() {
        streetEl.style.display = 'none';
        satelliteEl.style.display = 'block';
        tiles = 'street';
        updateTiles();
        chartSync.update();
        chartSync.idle();
      }
      function handleRemoveClick() {
        chart = null;
        updateChart();
        chartSync.update();
        chartSync.idle();
      }
      function handleExample1Click() {
        chart = 'example1';
        updateChart();
        chartSync.update();
        chartSync.idle();
      }
      function handleExample2Click() {
        chart = 'example2';
        updateChart();
        chartSync.update();
        chartSync.idle();
      }
      function handleExample3Click() {
        chart = 'example3';
        updateChart();
        chartSync.update();
        chartSync.idle();
      }
      function updateChart() {
        var i;
        var j;
        wm.closeAllWindows();
        removeRegions();
        removeMarkers();
        if (chart) {
          if (channel === controlChannel) {
            map.moveTo(
              0,
              CHARTS[chart].center[0],
              CHARTS[chart].center[1],
              CHARTS[chart].zoom[size]
            );
          }
          for (i = 0; i < CHARTS[chart].regions.length; i++) {
            addregion(CHARTS[chart].regions[i].region,
              CHARTS[chart].regions[i].color,
              CHARTS[chart].popup
            );
          }
          for (i = 0; i < CHARTS[chart].markers.length; i++) {
            for (j = 0; j < CHARTS[chart].markers[i].iconUrls.length; j++) {
              addMarker(
                CHARTS[chart].markers[i].latlng,
                CHARTS[chart].markers[i].iconUrls[j],
                CHARTS[chart].markers[i].minZoom
              );
            }
          }
        }
      }
      function updateTiles() {
        if (tileLayer) {
          tileLayer.removeFrom(leafletMap);
        }
        if (tiles === 'street') {
          tileLayer = L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(leafletMap);
        }
        if (tiles === 'satellite') {
          // PROD
          // jscs:disable
          tileLayer =  L.tileLayer(
            'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            {
               attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            }
          ).addTo(leafletMap);
          // jscs:enable
          // DEV
          /*
          return L.tileLayer(
            'map/{z}/{x}/{y}.png',
            {
              minZoom: 0,
              maxZoom: 7,
              opacity: 1.0,
              tms: false
            }
          ).addTo(leafletMap);
          */
        }
      }
      function addregion(code, color, popup) {
        var region = {};
        var xmlhttp = new XMLHttpRequest();
        regions.push(region);
        xmlhttp.onreadystatechange = handleOnReadyStateChange;
        function handleOnReadyStateChange() {
          var layer;
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
            region.layer = layer;
            layer.addTo(leafletMap);
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
      function removeRegions() {
        var i;
        var layer;
        for (i = 0; i < regions.length; i++) {
          layer = regions[i].layer;
          layer.removeEventListener();
          layer.removeFrom(leafletMap);
        }
        regions = [];
      }
      function addMarker(latlng, iconUrl, minZoom) {
        var marker = {};
        var icon = L.icon({
          iconUrl: iconUrl
        });
        var layer = L.marker(latlng, {icon: icon});
        marker.layer = layer;
        marker.minZoom = minZoom;
        marker.added = false;
        markers.push(marker);
        if (leafletMap.getZoom() >= minZoom) {
          marker.added = true;
          layer.addTo(leafletMap);
        }
      }
      function removeMarkers() {
        var i;
        var layer;
        for (i = 0; i < markers.length; i++) {
          layer = markers[i].layer;
          layer.removeEventListener();
          if (markers[i].added) {
            layer.removeFrom(leafletMap);
          }
        }
        markers = [];
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
        parsed[parameterArray[0]] =
          decodeURIComponent(parameterArray[1].replace(/\+/g, ' '));
      }
    }
    return parsed;
  }
})();
