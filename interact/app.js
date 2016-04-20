(function() {
  'use strict';
  var TIMEOUT = 120 * 1000;
  var BASE_URL = 'http://192.168.1.2/apps/isfs-steering/interact/'; // PROD
  // var BASE_URL = 'http://localhost/apps/isfs-steering/interact/'; // DEV
  var CHANNELS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var BROWSERS = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  var MIN_ZOOM = 4;
  var MAX_ZOOM = 19;
  var FISHERIES = [
    {
      marker: 'chinook_salmon',
      latlng: [40,-125],
      iconUrls: [
        'img/markers/chinook_salmon.png'
      ],
      minZoom: 7
    },
    {
      marker: 'dungeness_crab',
      latlng: [38.5,-124.25],
      iconUrls: [
        'img/markers/dungeness_crab.png'
      ],
      minZoom: 7
    },
    {
      marker: 'sablefish',
      latlng: [37.5,-123.65],
      iconUrls: [
        'img/markers/sablefish.png'
      ],
      minZoom: 7
    },
    {
      marker: 'market_squid',
      latlng: [36.5,-123.15],
      iconUrls: [
        'img/markers/market_squid.png'
      ],
      minZoom: 7
    },
    {
      marker: 'nearshore_finfish',
      latlng: [35.5,-122.15],
      iconUrls: [
        'img/markers/nearshore_finfish.png'
      ],
      minZoom: 7
    },
    {
      marker: 'spot_prawn',
      latlng: [33,-120.75],
      iconUrls: [
        'img/markers/spot_prawn.png'
      ],
      minZoom: 7
    },
    {
      marker: 'sea_cucumber',
      latlng: [34.1,-120.75],
      iconUrls: [
        'img/markers/sea_cucumber.png'
      ],
      minZoom: 7
    },
    {
      marker: 'sea_urchin',
      latlng: [33.9,-119.5],
      iconUrls: [
        'img/markers/sea_urchin.png'
      ],
      minZoom: 7
    },
    {
      marker: 'spiny_lobster',
      latlng: [33,-118.5],
      iconUrls: [
        'img/markers/spiny_lobster.png'
      ],
      minZoom: 7
    },
    {
      marker: 'rock_crab',
      latlng: [34.3,-122],
      iconUrls: [
        'img/markers/rock_crab.png'
      ],
      minZoom: 7
    }
  ];
  var SIZE_SINGLE = 0;
  var SIZE_DOUBLE = 1;
  var SIZE_FULL = 2;
  var CHARTS = {
    fisheries: {
      regionsPopup: false,
      markersPopup: true,
      markersPopupWidth: 308,
      markersPopupHeight: 480,
      center: [35, -120.817917],
      zoom: {
        0: 7,
        1: 7,
        2: 9
      },
      regions: [],
      markers: FISHERIES
    }
  };
  var L = window.L;
  var thr0w = window.thr0w;
  var parameters = parseQueryString();
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    var active = true;
    var frameEl = document.getElementById('my_frame');
    var contentEl = document.getElementById('interact_content');
    thr0w.setBase('http://192.168.1.2'); // PROD
    // thr0w.setBase('http://localhost'); // DEV
    thr0w.addAdminTools(frameEl,
      connectCallback, messageCallback);
    function connectCallback() {
      var markerCode;
      var markerEvent;
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
      var windowYBase;
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
          windowYBase = 0;
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
          windowYBase = 0;
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
          windowYBase = 1882;
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
      var markerSync = new thr0w.Sync(
        grid,
        base + '_marker',
        markerMessage,
        markerReceive
      );
      map = new thr0w.leaflet.Map(grid, 0, 0, MIN_ZOOM,
        {
          minZoom: MIN_ZOOM,
          maxZoom: MAX_ZOOM,
          zoomControl: false,
          attributionControl: false
        }
      );
      leafletMap = map.getLeafletMap();
      leafletMap.addEventListener('zoom', zoomed);
      tiles = 'satellite';
      updateTiles();
      // CONTROLS
      if (channel === controlChannel) {
        document.getElementById('controls').style.display = 'block';
      }
      frameEl.addEventListener('touchstart', keepActive, true);
      singleEl.addEventListener('click', handleSingleClick);
      doubleEl.addEventListener('click', handleDoubleClick);
      document.getElementById('full')
        .addEventListener('click', handleFullClick);
      satelliteEl.addEventListener('click', handleSatelliteClick);
      streetEl.addEventListener('click', handleStreetClick);
      document.getElementById('none')
        .addEventListener('click', handleNoneClick);
      document.getElementById('fisheries')
        .addEventListener('click', handleFisheriesClick);
      window.setInterval(checkIdle, TIMEOUT);
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
      function markerMessage() {
        return {
          code: markerCode,
          event: markerEvent
        };
      }
      function markerReceive(data) {
        var i;
        for (i = 0; i < markers.length; i++) {
          if (markers[i].code === data.code) {
            if (data.event === 'popupopen') {
              markers[i].layer.openPopup();
            }
            if (data.event === 'popupclose') {
              markers[i].layer.closePopup();
            }
          }
        }
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
      function handleNoneClick() {
        chart = null;
        updateChart();
        chartSync.update();
        chartSync.idle();
      }
      function handleFisheriesClick() {
        chart = 'fisheries';
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
            addRegion(
              CHARTS[chart].regions[i].region,
              CHARTS[chart].regions[i].color,
              CHARTS[chart].regionsPopup,
              CHARTS[chart].regionsPopupWidth,
              CHARTS[chart].regionsPopupHeight
            );
          }
          for (i = 0; i < CHARTS[chart].markers.length; i++) {
            for (j = 0; j < CHARTS[chart].markers[i].iconUrls.length; j++) {
              addMarker(
                CHARTS[chart].markers[i].marker,
                CHARTS[chart].markers[i].latlng,
                CHARTS[chart].markers[i].iconUrls[j],
                CHARTS[chart].markers[i].minZoom,
                CHARTS[chart].markersPopup,
                CHARTS[chart].markersPopupWidth,
                CHARTS[chart].markersPopupHeight
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
          // jscs:disable
          tileLayer = L.tileLayer(
            'http://192.168.1.2/street/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(leafletMap);
          // jscs:enable
        }
        if (tiles === 'satellite') {
          // PROD
          // jscs:disable
          tileLayer =  L.tileLayer(
            'http://192.168.1.2/satellite/{z}/{y}/{x}',
            {
               attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            }
          ).addTo(leafletMap);
          // jscs:enable
          /*
          // DEV
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
      function addRegion(code, color, popup,
        popupWidth, popupHeight) {
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
              // TODO: IMPLEMENT POPUP
              window.console.log(popupWidth);
              window.console.log(popupHeight);
            }
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
      function addMarker(code, latlng, iconUrl, minZoom, popup,
        popupWidth, popupHeight) {
        var marker = {};
        var icon = L.icon({
          iconUrl: iconUrl
        });
        var layer = L.marker(latlng, {icon: icon});
        if (popup) {
          layer.addEventListener('popupopen', handlePopupOpen);
          layer.addEventListener('popupclose', handlePopupClose);
          layer.bindPopup([
            '<iframe src="',
            chart + '/?code=' + code,
            '" ',
            'width="',
            popupWidth,
            '" ',
            'height="',
            popupHeight,
            '" style="border:none">',
            '</iframe>'
          ].join(''), {autoPan: false});
        }
        marker.code = code;
        marker.layer = layer;
        marker.minZoom = minZoom;
        marker.added = false;
        markers.push(marker);
        if (leafletMap.getZoom() >= minZoom) {
          marker.added = true;
          layer.addTo(leafletMap);
        }
        function handlePopupOpen() {
          markerCode = code;
          markerEvent = 'popupopen';
          markerSync.update();
          markerSync.idle();
        }
        function handlePopupClose() {
          markerCode = code;
          markerEvent = 'popupclose';
          markerSync.update();
          markerSync.idle();
        }
      }
      function removeMarkers() {
        var i;
        var layer;
        for (i = 0; i < markers.length; i++) {
          layer = markers[i].layer;
          layer.closePopup();
          markerCode = markers[i].code;
          markerEvent = 'popupclose';
          markerSync.update();
          markerSync.idle();
          layer.removeEventListener();
          if (markers[i].added) {
            layer.removeFrom(leafletMap);
          }
        }
        markers = [];
      }
      function keepActive() {
        window.console.log('KEEPACTIVE');
        active = true;
        thr0w.thr0wChannel(CHANNELS, {type: 'active'});
      }
      function checkIdle() {
        if (!active) {
          thr0w.thr0wChannel(CHANNELS, {type: 'idle'});
        }
        active = false;
      }
    }
    function messageCallback(data) {
      if (data.message.type === 'idle') {
        document.location.href = '../';
      } else if (data.message.type === 'active') {
        active = true;
      }
    }
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
