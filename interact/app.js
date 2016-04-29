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
    },
    {
      marker: 'gambia_artisanal_sole_and_catfish',
      latlng: [13.42, -17.25],
      iconUrls: [
        'img/markers/gambia_artisanal_sole_and_catfish.png'
      ],
      minZoom: 8
    },
    {
      marker: 'gambia_try_oysters',
      latlng: [13.42, -17.958683],
      iconUrls: [
        'img/markers/gambia_try_oysters.png'
      ],
      minZoom: 8
    },
    {
      marker: 'ghana_artisanal',
      latlng: [4.845139, -0.463350],
      iconUrls: [
        'img/markers/ghana_artisanal.png'
      ],
      minZoom: 7
    },
    {
      marker: 'ghana_axim_artisanal',
      latlng: [4.489268, -2.748506],
      iconUrls: [
        'img/markers/ghana_axim_artisanal.png'
      ],
      minZoom: 7
    },
    {
      marker: 'kenya_shimoni_artisanal',
      latlng: [-4.537789, 39.944896],
      iconUrls: [
        'img/markers/kenya_shimoni_artisanal.png'
      ],
      minZoom: 7
    },
    {
      marker: 'kenya_octopus',
      latlng: [-3.3, 40.4],
      iconUrls: [
        'img/markers/kenya_octopus.png'
      ],
      minZoom: 7
    },
    {
      marker: 'liberia_westpoint_artisanal',
      latlng: [6.192568, -11.172748],
      iconUrls: [
        'img/markers/liberia_westpoint_artisanal.png'
      ],
      minZoom: 8
    },
    /*
    {
      marker: 'liberia_westpoint_artisanal_2',
      latlng: [33,-118.5],
      iconUrls: [
        'img/markers/liberia_westpoint_artisanal_2.png'
      ],
      minZoom: 7
    },
    */
    {
      marker: 'liberia_robertsport_artisanal',
      latlng: [6.596532, -11.584735],
      iconUrls: [
        'img/markers/liberia_robertsport_artisanal.png'
      ],
      minZoom: 8
    },
    {
      marker: 'liberia_semi-industrial',
      latlng: [5.766433, -10.370746],
      iconUrls: [
        'img/markers/liberia_semi-industrial.png'
      ],
      minZoom: 8
    },
    {
      marker: 'malawi_lake_chiuta',
      latlng: [-14.800886, 35.865439],
      iconUrls: [
        'img/markers/malawi_lake_chiuta.png'
      ],
      minZoom: 7
    },
    {
      marker: 'morocco_central_zone',
      latlng: [30.813943, -10.986501],
      iconUrls: [
        'img/markers/morocco_central_zone.png'
      ],
      minZoom: 7
    },
    {
      marker: 'morocco_southern_zone',
      latlng: [26.142019, -16.303884],
      iconUrls: [
        'img/markers/morocco_southern_zone.png'
      ],
      minZoom: 7
    },
    {
      marker: 'senegal_artisanal',
      latlng: [14.659583, -18.101505],
      iconUrls: [
        'img/markers/senegal_artisanal.png'
      ],
      minZoom: 8
    },
    {
      marker: 'senegal_ngaparou_artisanal',
      latlng: [14.310286, -17.409366],
      iconUrls: [
        'img/markers/senegal_ngaparou_artisanal.png'
      ],
      minZoom: 8
    },
    {
      marker: 'sierra_leone_sherbro',
      latlng: [7.468817, -12.996478],
      iconUrls: [
        'img/markers/sierra_leone_sherbro.png'
      ],
      minZoom: 8
    },
    {
      marker: 'sierra_leone_tombo',
      latlng: [8.062079, -13.073382],
      iconUrls: [
        'img/markers/sierra_leone_tombo.png'
      ],
      minZoom: 8
    },
    {
      marker: 'uganda_lake_victoria_dagaa',
      latlng: [-0.451243, 33.020296],
      iconUrls: [
        'img/markers/uganda_lake_victoria_dagaa.png'
      ],
      minZoom: 8
    },
    {
      marker: 'uganda_lake_victoria_tilapia',
      latlng: [-1.140316, 32.826649],
      iconUrls: [
        'img/markers/uganda_lake_victoria_tilapia.png'
      ],
      minZoom: 8
    },
    {
      marker: 'uganda_nile_perch',
      latlng: [-1.5, 32.178456],
      iconUrls: [
        'img/markers/uganda_nile_perch.png'
      ],
      minZoom: 8
    },
    {
      marker: 'shrimp_artisanal',
      latlng: [6.007321, -79.750257],
      iconUrls: [
        'img/markers/shrimp_artisanal.png'
      ],
      minZoom: 7
    },
    {
      marker: 'shrimp_industrial',
      latlng: [4.905359, -80.396452],
      iconUrls: [
        'img/markers/shrimp_industrial.png'
      ],
      minZoom: 7
    },
    {
      marker: 'industrial_tuna',
      latlng: [-0.257219, -83.035502],
      iconUrls: [
        'img/markers/industrial_tuna.png'
      ],
      minZoom: 5
    },
    {
      marker: 'la_paz_bivalves',
      latlng: [26.667472, -110.521220],
      iconUrls: [
        'img/markers/la_paz_bivalves.png'
      ],
      minZoom: 6
    },
    /*
    {
      marker: 'la_paz_bivalves',
      latlng: [0, 0],
      iconUrls: [
        'img/markers/la_paz_bivalves.png'
      ],
      minZoom: 5
    },
    */
    {
      marker: 'la_paz_chocolata',
      latlng: [24.268098, -109.452236],
      iconUrls: [
        'img/markers/la_paz_chocolata.png'
      ],
      minZoom: 6
    },
    {
      marker: 'purse_seine_tuna',
      latlng: [19.803150, -109.568574],
      iconUrls: [
        'img/markers/purse_seine_tuna.png'
      ],
      minZoom: 6
    },
    {
      marker: 'anchovy',
      latlng: [-10.698497, -80.487562],
      iconUrls: [
        'img/markers/anchovy.png'
      ],
      minZoom: 5
    },
    {
      marker: 'ak_pollock',
      latlng: [56.349602, -167.723229],
      iconUrls: [
        'img/markers/ak_pollock.png'
      ],
      minZoom: 5
    },
    {
      marker: 'fl_spiny_lobster',
      latlng: [25.080696, -81.629106],
      iconUrls: [
        'img/markers/fl_spiny_lobster.png'
      ],
      minZoom: 5
    },
    {
      marker: 'louisiana_shrimp',
      latlng: [28.625209, -90.490466],
      iconUrls: [
        'img/markers/louisiana_shrimp.png'
      ],
      minZoom: 6
    },
    {
      marker: 'ak_salmon',
      latlng: [58.923187, -162.812096],
      iconUrls: [
        'img/markers/ak_salmon.png'
      ],
      minZoom: 5
    },
    {
      marker: 'ne_groundfish',
      latlng: [42.487950, -69.600870],
      iconUrls: [
        'img/markers/ne_groundfish.png'
      ],
      minZoom: 5
    },
    {
      marker: 'or_dungeness_crab',
      latlng: [45.126981, -125.517987],
      iconUrls: [
        'img/markers/or_dungeness_crab.png'
      ],
      minZoom: 6
    },
    {
      marker: 'ak_crab',
      latlng: [58.664182, -171.642374],
      iconUrls: [
        'img/markers/ak_crab.png'
      ],
      minZoom: 5
    },
    {
      marker: 'ak_halibut',
      latlng: [58.675757, -150.375991],
      iconUrls: [
        'img/markers/ak_halibut.png'
      ],
      minZoom: 5
    },
    {
      marker: 'pacific_groundfish',
      latlng: [42.419284, -126.048231],
      iconUrls: [
        'img/markers/pacific_groundfish.png'
      ],
      minZoom: 6
    },
    {
      marker: 'gom_snapper',
      latlng: [29.697035, -86.668360],
      iconUrls: [
        'img/markers/gom_snapper.png'
      ],
      minZoom: 6
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
      center: [0, 0],
      zoom: {
        0: 4,
        1: 4,
        2: 4
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
          attributionControl: false,
          closePopupOnClick: false
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
              markers[i].popped = true;
              if (markers[i].added) {
                markers[i].layer.openPopup();
              } else {
                markers[i].pinLayer.openPopup();
              }
            }
            if (data.event === 'popupclose') {
              markers[i].popped = false;
              if (markers[i].added) {
                markers[i].layer.closePopup();
              } else {
                markers[i].pinLayer.closePopup();
              }
            }
          }
        }
      }
      function zoomed() {
        var zoom = leafletMap.getZoom();
        var i;
        var iPopped;
        for (i = 0; i < markers.length; i++) {
          iPopped = markers[i].popped;
          if (zoom >= markers[i].minZoom && !markers[i].added) {
            markers[i].added = true;
            markers[i].pinLayer.removeFrom(leafletMap);
            markers[i].layer.addTo(leafletMap);
            if (iPopped) {
              markers[i].layer.openPopup();
            }
          }
          if (zoom < markers[i].minZoom && markers[i].added) {
            markers[i].added = false;
            markers[i].layer.removeFrom(leafletMap);
            markers[i].pinLayer.addTo(leafletMap);
            if (iPopped) {
              markers[i].pinLayer.openPopup();
            }
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
          // DEV DEBUG
          // jscs:disable
          tileLayer = L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
              maxZoom: 19,
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }
          ).addTo(leafletMap);
          // jscs:enable
          // DEV LOCAL
          tileLayer = L.tileLayer(
            '../map/{z}/{x}/{y}.png',
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
        var popupHtml;
        var marker = {};
        var pinIcon = L.icon({
          iconUrl: 'img/pins/red.png'
        });
        var pinLayer = L.marker(latlng, {icon: pinIcon});
        var icon = L.icon({
          iconUrl: iconUrl
        });
        var layer = L.marker(latlng, {icon: icon});
        if (popup) {
          popupHtml = [
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
          ].join('');
          pinLayer.addEventListener('popupopen', handlePopupOpen);
          pinLayer.addEventListener('popupclose', handlePopupClose);
          layer.addEventListener('popupopen', handlePopupOpen);
          layer.addEventListener('popupclose', handlePopupClose);
          pinLayer.bindPopup(popupHtml, {autoPan: false});
          layer.bindPopup(popupHtml, {autoPan: false});
        }
        marker.code = code;
        marker.pinLayer = pinLayer;
        marker.layer = layer;
        marker.minZoom = minZoom;
        marker.added = false;
        marker.popped = false;
        markers.push(marker);
        if (leafletMap.getZoom() >= minZoom) {
          marker.added = true;
          layer.addTo(leafletMap);
        } else {
          pinLayer.addTo(leafletMap);
        }
        function handlePopupOpen() {
          markerCode = code;
          marker.popped = true;
          markerEvent = 'popupopen';
          markerSync.update();
          markerSync.idle();
        }
        function handlePopupClose() {
          markerCode = code;
          marker.popped = false;
          markerEvent = 'popupclose';
          markerSync.update();
          markerSync.idle();
        }
      }
      function removeMarkers() {
        var i;
        var pinLayer;
        var layer;
        for (i = 0; i < markers.length; i++) {
          pinLayer = markers[i].pinLayer;
          layer = markers[i].layer;
          layer.closePopup();
          pinLayer.closePopup();
          markers[i].popped = false;
          markerCode = markers[i].code;
          markerEvent = 'popupclose';
          markerSync.update();
          markerSync.idle();
          pinLayer.removeEventListener();
          layer.removeEventListener();
          if (markers[i].added) {
            layer.removeFrom(leafletMap);
          } else {
            pinLayer.removeFrom(leafletMap);
          }
        }
        markers = [];
      }
      function keepActive() {
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
