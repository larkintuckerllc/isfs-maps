(function() {
  'use strict';
  var TIMEOUT = 120 * 1000;
  var BASE_URL = 'http://192.168.1.2/larkintuckerllc-isfs-maps/interact/'; // PROD
  // var BASE_URL = 'http://localhost:8080/larkintuckerllc-isfs-maps/interact/'; // DEV
  var CHANNELS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var BROWSERS = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  var MIN_ZOOM = {
    0: 3,
    1: 4,
    2: 4
  };
  var MAX_ZOOM = 19;
  var DISEASE = [
    // AMRO A
    {
      region: 'CAN',
      color: 'rgb(181,221,235)'
    },
    {
      region: 'CUB',
      color: 'rgb(181,221,235)'
    },
    {
      region: 'USA',
      color: 'rgb(181,221,235)'
    },
    // AMRO B
    {
      region: 'ATG',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'ARG',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'BHS',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'BRB',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'BLZ',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'BRA',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'CHL',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'COL',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'CRI',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'DMA',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'DOM',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'SLV',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'GRD',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'GUY',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'HND',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'JAM',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'MEX',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'PAN',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'PRY',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'KNA',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'LCA',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'VCT',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'SUR',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'TTO',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'URY',
      color: 'rgb(61,91,166)'
    },
    {
      region: 'VEN',
      color: 'rgb(61,91,166)'
    },
    // AMRO D
    {
      region: 'BOL',
      color: 'rgb(255,246,181)'
    },
    {
      region: 'ECU',
      color: 'rgb(255,246,181)'
    },
    {
      region: 'GTM',
      color: 'rgb(255,246,181)'
    },
    {
      region: 'HTI',
      color: 'rgb(255,246,181)'
    },
    {
      region: 'NIC',
      color: 'rgb(255,246,181)'
    },
    {
      region: 'PER',
      color: 'rgb(255,246,181)'
    },
    // AFRO D
    {
      region: 'DZA',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'AGO',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'BEN',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'BFA',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'CMR',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'CPV',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'TCD',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'COM',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'GNQ',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'GAB',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'GMB',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'GHA',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'GIN',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'GNB',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'LBR',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'MDG',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'MLI',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'MRT',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'MUS',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'NER',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'NGA',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'STP',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'SEN',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'SYC',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'SLE',
      color: 'rgb(163,0,35)'
    },
    {
      region: 'TGO',
      color: 'rgb(163,0,35)'
    },
    // AFRO E
    {
      region: 'BWA',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'BDI',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'CAF',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'COG',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'CIV',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'COD',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'ERI',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'ETH',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'KEN',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'LSO',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'MWI',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'MOZ',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'NAM',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'RWA',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'ZAF',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'SWZ',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'UGA',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'TZA',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'ZMB',
      color: 'rgb(191,27,38)'
    },
    {
      region: 'ZWE',
      color: 'rgb(191,27,38)'
    },
    // EMR B
    {
      region: 'BHR',
      color: 'rgb(252,220,157)'
    },
    {
      region: 'IRN',
      color: 'rgb(252,220,157)'
    },
    {
      region: 'JOR',
      color: 'rgb(252,220,157)'
    },
    {
      region: 'KWT',
      color: 'rgb(252,220,157)'
    },
    {
      region: 'LBN',
      color: 'rgb(252,220,157)'
    },
    {
      region: 'LBY',
      color: 'rgb(252,220,157)'
    },
    {
      region: 'OMN',
      color: 'rgb(252,220,157)'
    },
    {
      region: 'QAT',
      color: 'rgb(252,220,157)'
    },
    {
      region: 'SAU',
      color: 'rgb(252,220,157)'
    },
    {
      region: 'SYR',
      color: 'rgb(252,220,157)'
    },
    {
      region: 'TUN',
      color: 'rgb(252,220,157)'
    },
    {
      region: 'ARE',
      color: 'rgb(252,220,157)'
    },
    // EMR D
    {
      region: 'AFG',
      color: 'rgb(250,157,90)'
    },
    {
      region: 'DJI',
      color: 'rgb(250,157,90)'
    },
    {
      region: 'EGY',
      color: 'rgb(250,157,90)'
    },
    {
      region: 'IRQ',
      color: 'rgb(250,157,90)'
    },
    {
      region: 'MAR',
      color: 'rgb(250,157,90)'
    },
    {
      region: 'PAK',
      color: 'rgb(250,157,90)'
    },
    {
      region: 'SOM',
      color: 'rgb(250,157,90)'
    },
    {
      region: 'SSD',
      color: 'rgb(250,157,90)'
    },
    {
      region: 'SDN',
      color: 'rgb(250,157,90)'
    },
    {
      region: 'YEM',
      color: 'rgb(250,157,90)'
    },
    // EUR A
    {
      region: 'AND',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'AUT',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'BEL',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'HRV',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'CYP',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'CZE',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'DNK',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'FIN',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'FRA',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'DEU',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'GRC',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'ISL',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'IRL',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'ISR',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'ITA',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'LUX',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'MLT',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'MCO',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'NLD',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'NOR',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'PRT',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'SMR',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'SVN',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'ESP',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'SWE',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'CHE',
      color: 'rgb(127,181,212)'
    },
    {
      region: 'GBR',
      color: 'rgb(127,181,212)'
    },
    // EURO B
    {
      region: 'ALB',
      color: 'rgb(85,137,189)'
    },
    {
      region: 'ARM',
      color: 'rgb(85,137,189)'
    },
    {
      region: 'AZE',
      color: 'rgb(85,137,189)'
    },
    {
      region: 'BIH',
      color: 'rgb(85,137,189)'
    },
    {
      region: 'BGR',
      color: 'rgb(85,137,189)'
    },
    {
      region: 'GEO',
      color: 'rgb(85,137,189)'
    },
    {
      region: 'KGZ',
      color: 'rgb(85,137,189)'
    },
    {
      region: 'MNE',
      color: 'rgb(85,137,189)'
    },
    {
      region: 'POL',
      color: 'rgb(85,137,189)'
    },
    {
      region: 'ROU',
      color: 'rgb(85,137,189)'
    },
    {
      region: 'SRB',
      color: 'rgb(85,137,189)'
    },
    {
      region: 'SVK',
      color: 'rgb(85,137,189)'
    },
    {
      region: 'TJK',
      color: 'rgb(85,137,189)'
    },
    {
      region: 'MKD',
      color: 'rgb(85,137,189)'
    },
    {
      region: 'TUR',
      color: 'rgb(85,137,189)'
    },
    {
      region: 'TKM',
      color: 'rgb(85,137,189)'
    },
    {
      region: 'UZB',
      color: 'rgb(85,137,189)'
    },
    // EURO C
    {
      region: 'BLR',
      color: 'rgb(103,158,199)'
    },
    {
      region: 'EST',
      color: 'rgb(103,158,199)'
    },
    {
      region: 'HUN',
      color: 'rgb(103,158,199)'
    },
    {
      region: 'KAZ',
      color: 'rgb(103,158,199)'
    },
    {
      region: 'LVA',
      color: 'rgb(103,158,199)'
    },
    {
      region: 'LTU',
      color: 'rgb(103,158,199)'
    },
    {
      region: 'MDA',
      color: 'rgb(103,158,199)'
    },
    {
      region: 'RUS',
      color: 'rgb(103,158,199)'
    },
    {
      region: 'UKR',
      color: 'rgb(103,158,199)'
    },
    // SEAR B
    {
      region: 'IDN',
      color: 'rgb(230,78,55)'
    },
    {
      region: 'LKA',
      color: 'rgb(230,78,55)'
    },
    {
      region: 'THA',
      color: 'rgb(230,78,55)'
    },
    // SEAR D
    {
      region: 'BGD',
      color: 'rgb(230,78,55)'
    },
    {
      region: 'BTN',
      color: 'rgb(230,78,55)'
    },
    {
      region: 'PRK',
      color: 'rgb(230,78,55)'
    },
    {
      region: 'IND',
      color: 'rgb(230,78,55)'
    },
    {
      region: 'MDV',
      color: 'rgb(230,78,55)'
    },
    {
      region: 'MMR',
      color: 'rgb(230,78,55)'
    },
    {
      region: 'NPL',
      color: 'rgb(230,78,55)'
    },
    {
      region: 'TLS',
      color: 'rgb(230,78,55)'
    },
    // WPR A
    {
      region: 'AUS',
      color: 'rgb(158,205,219)'
    },
    {
      region: 'BRN',
      color: 'rgb(158,205,219)'
    },
    {
      region: 'JPN',
      color: 'rgb(158,205,219)'
    },
    {
      region: 'NZL',
      color: 'rgb(158,205,219)'
    },
    {
      region: 'SGP',
      color: 'rgb(158,205,219)'
    },
    // WPR B
    {
      region: 'KHM',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'CHN',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'COK',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'FJI',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'KIR',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'LAO',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'MYS',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'MHL',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'FSM',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'MNG',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'NRU',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'NIU',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'PLW',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'PNG',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'PHL',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'KOR',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'WSM',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'SLB',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'TON',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'TUV',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'VUT',
      color: 'rgb(58,82,161)'
    },
    {
      region: 'VNM',
      color: 'rgb(58,82,161)'
    }
  ];
  var FISHERIES = [
    {
      marker: 'chinook_salmon',
      latlng: [40,-125],
      iconUrls: [
        'img/markers/chinook_salmon.png'
      ],
      minZoom: 5
    },
    {
      marker: 'dungeness_crab',
      latlng: [38.5,-124.25],
      iconUrls: [
        'img/markers/dungeness_crab.png'
      ],
      minZoom: 5
    },
    {
      marker: 'sablefish',
      latlng: [37.5,-123.65],
      iconUrls: [
        'img/markers/sablefish.png'
      ],
      minZoom: 5
    },
    {
      marker: 'market_squid',
      latlng: [36.5,-123.15],
      iconUrls: [
        'img/markers/market_squid.png'
      ],
      minZoom: 5
    },
    {
      marker: 'nearshore_finfish',
      latlng: [35.5,-122.15],
      iconUrls: [
        'img/markers/nearshore_finfish.png'
      ],
      minZoom: 5
    },
    {
      marker: 'spot_prawn',
      latlng: [33,-120.75],
      iconUrls: [
        'img/markers/spot_prawn.png'
      ],
      minZoom: 5
    },
    {
      marker: 'sea_cucumber',
      latlng: [34.1,-120.75],
      iconUrls: [
        'img/markers/sea_cucumber.png'
      ],
      minZoom: 5
    },
    {
      marker: 'sea_urchin',
      latlng: [33.9,-119.5],
      iconUrls: [
        'img/markers/sea_urchin.png'
      ],
      minZoom: 5
    },
    {
      marker: 'spiny_lobster',
      latlng: [33,-118.5],
      iconUrls: [
        'img/markers/spiny_lobster.png'
      ],
      minZoom: 5
    },
    {
      marker: 'rock_crab',
      latlng: [34.3,-122],
      iconUrls: [
        'img/markers/rock_crab.png'
      ],
      minZoom: 5
    },
    {
      marker: 'gambia_artisanal_sole_and_catfish',
      latlng: [13.42, -17.25],
      iconUrls: [
        'img/markers/gambia_artisanal_sole_and_catfish.png'
      ],
      minZoom: 5
    },
    {
      marker: 'gambia_try_oysters',
      latlng: [13.42, -17.958683],
      iconUrls: [
        'img/markers/gambia_try_oysters.png'
      ],
      minZoom: 5
    },
    {
      marker: 'ghana_artisanal',
      latlng: [4.845139, -0.463350],
      iconUrls: [
        'img/markers/ghana_artisanal.png'
      ],
      minZoom: 5
    },
    {
      marker: 'ghana_axim_artisanal',
      latlng: [4.489268, -2.748506],
      iconUrls: [
        'img/markers/ghana_axim_artisanal.png'
      ],
      minZoom: 5
    },
    {
      marker: 'kenya_shimoni_artisanal',
      latlng: [-4.537789, 39.944896],
      iconUrls: [
        'img/markers/kenya_shimoni_artisanal.png'
      ],
      minZoom: 5
    },
    {
      marker: 'kenya_octopus',
      latlng: [-3.3, 40.4],
      iconUrls: [
        'img/markers/kenya_octopus.png'
      ],
      minZoom: 5
    },
    {
      marker: 'liberia_westpoint_artisanal',
      latlng: [6.192568, -11.172748],
      iconUrls: [
        'img/markers/liberia_westpoint_artisanal.png'
      ],
      minZoom: 5
    },
    /*
    {
      marker: 'liberia_westpoint_artisanal_2',
      latlng: [33,-118.5],
      iconUrls: [
        'img/markers/liberia_westpoint_artisanal_2.png'
      ],
      minZoom: 5
    },
    */
    {
      marker: 'liberia_robertsport_artisanal',
      latlng: [6.596532, -11.584735],
      iconUrls: [
        'img/markers/liberia_robertsport_artisanal.png'
      ],
      minZoom: 5
    },
    {
      marker: 'liberia_semi-industrial',
      latlng: [5.766433, -10.370746],
      iconUrls: [
        'img/markers/liberia_semi-industrial.png'
      ],
      minZoom: 5
    },
    {
      marker: 'malawi_lake_chiuta',
      latlng: [-14.800886, 35.865439],
      iconUrls: [
        'img/markers/malawi_lake_chiuta.png'
      ],
      minZoom: 5
    },
    {
      marker: 'morocco_central_zone',
      latlng: [30.813943, -10.986501],
      iconUrls: [
        'img/markers/morocco_central_zone.png'
      ],
      minZoom: 5
    },
    {
      marker: 'morocco_southern_zone',
      latlng: [26.142019, -16.303884],
      iconUrls: [
        'img/markers/morocco_southern_zone.png'
      ],
      minZoom: 5
    },
    {
      marker: 'senegal_artisanal',
      latlng: [14.659583, -18.101505],
      iconUrls: [
        'img/markers/senegal_artisanal.png'
      ],
      minZoom: 5
    },
    {
      marker: 'senegal_ngaparou_artisanal',
      latlng: [14.310286, -17.409366],
      iconUrls: [
        'img/markers/senegal_ngaparou_artisanal.png'
      ],
      minZoom: 5
    },
    {
      marker: 'sierra_leone_sherbro',
      latlng: [7.468817, -12.996478],
      iconUrls: [
        'img/markers/sierra_leone_sherbro.png'
      ],
      minZoom: 5
    },
    {
      marker: 'sierra_leone_tombo',
      latlng: [8.062079, -13.073382],
      iconUrls: [
        'img/markers/sierra_leone_tombo.png'
      ],
      minZoom: 5
    },
    {
      marker: 'uganda_lake_victoria_dagaa',
      latlng: [-0.451243, 33.020296],
      iconUrls: [
        'img/markers/uganda_lake_victoria_dagaa.png'
      ],
      minZoom: 5
    },
    {
      marker: 'uganda_lake_victoria_tilapia',
      latlng: [-1.140316, 32.826649],
      iconUrls: [
        'img/markers/uganda_lake_victoria_tilapia.png'
      ],
      minZoom: 5
    },
    {
      marker: 'uganda_nile_perch',
      latlng: [-1.5, 32.178456],
      iconUrls: [
        'img/markers/uganda_nile_perch.png'
      ],
      minZoom: 5
    },
    {
      marker: 'shrimp_artisanal',
      latlng: [6.007321, -79.750257],
      iconUrls: [
        'img/markers/shrimp_artisanal.png'
      ],
      minZoom: 5
    },
    {
      marker: 'shrimp_industrial',
      latlng: [4.905359, -80.396452],
      iconUrls: [
        'img/markers/shrimp_industrial.png'
      ],
      minZoom: 5
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
      minZoom: 5
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
      minZoom: 5
    },
    {
      marker: 'purse_seine_tuna',
      latlng: [19.803150, -109.568574],
      iconUrls: [
        'img/markers/purse_seine_tuna.png'
      ],
      minZoom: 5
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
      minZoom: 5
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
      minZoom: 5
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
      minZoom: 5
    },
    {
      marker: 'gom_snapper',
      latlng: [29.697035, -86.668360],
      iconUrls: [
        'img/markers/gom_snapper.png'
      ],
      minZoom: 5
    },
    {
      marker: 'se_sl_skipjack_tuna',
      latlng: [-4.534977, 122.532078],
      iconUrls: [
        'img/markers/se_sl_skipjack_tuna.png'
      ],
      minZoom: 5
    },
    {
      marker: 'lombok_shark',
      latlng: [-9.214523, 115.580407],
      iconUrls: [
        'img/markers/lombok_shark.png'
      ],
      minZoom: 5
    },
    {
      marker: 's_sb_yellowfin_tuna',
      latlng: [-9.880516, 116.774507],
      iconUrls: [
        'img/markers/s_sb_yellowfin_tuna.png'
      ],
      minZoom: 5
    },
    {
      marker: 'n_sb_yellowfin_tuna',
      latlng: [-7.549081, 116.784295],
      iconUrls: [
        'img/markers/n_sb_yellowfin_tuna.png'
      ],
      minZoom: 5
    },
    {
      marker: 's_sm_blue_swming_crab',
      latlng: [-4.194371, 107.081856],
      iconUrls: [
        'img/markers/s_sm_blue_swming_crab.png'
      ],
      minZoom: 5
    },
    {
      marker: 'n_sb_demersal',
      latlng: [-7.053957, 118.575445],
      iconUrls: [
        'img/markers/n_sb_demersal.png'
      ],
      minZoom: 5
    },
    {
      marker: 'se_sl_blue_swming_crab',
      latlng: [-5.068920, 121.599003],
      iconUrls: [
        'img/markers/se_sl_blue_swming_crab.png'
      ],
      minZoom: 5
    },
    {
      marker: 'central_sl_demersal',
      latlng: [-0.418821, 124.528146],
      iconUrls: [
        'img/markers/central_sl_demersal.png'
      ],
      minZoom: 5
    },
    {
      marker: 's_sl_grouper',
      latlng: [-5.497042, 118.655953],
      iconUrls: [
        'img/markers/s_sl_grouper.png'
      ],
      minZoom: 5
    },
    {
      marker: 's_sb_demersal',
      latlng: [-9.793722, 118.183937],
      iconUrls: [
        'img/markers/s_sb_demersal.png'
      ],
      minZoom: 5
    },
    {
      marker: 'is_lobster',
      latlng: [63.836833, -15.019223],
      iconUrls: [
        'img/markers/is_lobster.png'
      ],
      minZoom: 5
    },
    {
      marker: 'mv_skipjack_tuna',
      latlng: [3.558032, 73.593691],
      iconUrls: [
        'img/markers/mv_skipjack_tuna.png'
      ],
      minZoom: 5
    },
    {
      marker: 'no_cod',
      latlng: [74.435238, 21.719056],
      iconUrls: [
        'img/markers/no_cod.png'
      ],
      minZoom: 5
    },
    {
      marker: 'no_purse_seine',
      latlng: [67.756106, 9.590150],
      iconUrls: [
        'img/markers/no_purse_seine.png'
      ],
      minZoom: 5
    },
    {
      marker: 'au_spencer_gulf_prawn',
      latlng: [-34.482839, 136.871064],
      iconUrls: [
        'img/markers/au_spencer_gulf_prawn.png'
      ],
      minZoom: 5
    },
    {
      marker: 'nz_hoki',
      latlng: [-42.453335, 167.167302],
      iconUrls: [
        'img/markers/nz_hoki.png'
      ],
      minZoom: 5
    },
    {
      marker: 'au_w_zn_abalone',
      latlng: [-33.736732, 133.577217],
      iconUrls: [
        'img/markers/au_w_zn_abalone.png'
      ],
      minZoom: 5
    },
    {
      marker: 'eu_purse_seine_tuna',
      latlng: [-18.168574, 62.173707],
      iconUrls: [
        'img/markers/eu_purse_seine_tuna.png'
      ],
      minZoom: 5
    },
    {
      marker: 'se_baltic_cod',
      latlng: [58.922845, 19.961244],
      iconUrls: [
        'img/markers/se_baltic_cod.png'
      ],
      minZoom: 5
    },
    {
      marker: 'au_s_zn_rock_lobster',
      latlng: [-37.078922, 138.859801],
      iconUrls: [
        'img/markers/au_s_zn_rock_lobster.png'
      ],
      minZoom: 5
    },
    {
      marker: 'sc_inshore_artisanal',
      latlng: [-4.776912, 55.726373],
      iconUrls: [
        'img/markers/sc_inshore_artisanal.png'
      ],
      minZoom: 5
    },
    {
      marker: 'sc_semi-industrial',
      latlng: [-4.570192, 55.801608],
      iconUrls: [
        'img/markers/sc_semi-industrial.png'
      ],
      minZoom: 5
    },
    {
      marker: 'sc_sea_cucumber',
      latlng: [-4.481132, 55.494752],
      iconUrls: [
        'img/markers/sc_sea_cucumber.png'
      ],
      minZoom: 5
    },
    {
      marker: 'pabna_sadullaspracole',
      latlng: [23.571352, 89.866387],
      iconUrls: [
        'img/markers/pabna_sadullaspracole.png'
      ],
      minZoom: 5
    },
    {
      marker: 'beel_chatra',
      latlng: [23.469702, 90.180492],
      iconUrls: [
        'img/markers/beel_chatra.png'
      ],
      minZoom: 5
    },
    {
      marker: 'kailin_nadi',
      latlng: [23.342530, 90.503834],
      iconUrls: [
        'img/markers/kailin_nadi.png'
      ],
      minZoom: 5
    },
    {
      marker: 'suruga_pink_shrimp',
      latlng: [34.864099, 138.584939],
      iconUrls: [
        'img/markers/suruga_pink_shrimp.png'
      ],
      minZoom: 5
    },
    {
      marker: 'tokyo_bay',
      latlng: [35.400526, 139.767449],
      iconUrls: [
        'img/markers/tokyo_bay.png'
      ],
      minZoom: 5
    },
    {
      marker: 'philippines_blue_crab',
      latlng: [12.930268, 122.484781],
      iconUrls: [
        'img/markers/philippines_blue_crab.png'
      ],
      minZoom: 5
    },
    {
      marker: 'longline_tuna_taiwan',
      latlng: [-1.999583, 80.342334],
      iconUrls: [
        'img/markers/longline_tuna_taiwan.png'
      ],
      minZoom: 5
    },
    {
      marker: 'thanh_hoa',
      latlng: [19.900078, 107.003797],
      iconUrls: [
        'img/markers/thanh_hoa.png'
      ],
      minZoom: 5
    },
    {
      marker: 'fish_trawl_offshore',
      latlng: [13.399177, 110.033515],
      iconUrls: [
        'img/markers/fish_trawl_offshore.png'
      ],
      minZoom: 5
    },
    {
      marker: 'shrimp_trawl_inshore',
      latlng: [12.884756, 110.064589],
      iconUrls: [
        'img/markers/shrimp_trawl_inshore.png'
      ],
      minZoom: 5
    }
  ];
  var SIZE_SINGLE = 0;
  var SIZE_DOUBLE = 1;
  var SIZE_FULL = 2;
  var CHARTS = {
    fisheries: {
      regionsPopup: false,
      markersPopup: true,
      markersPopupDetail: true,
      markersPopupWidth: 308,
      markersPopupHeight: 480,
      markersPopupDetailWidth: 308,
      markersPopupDetailHeight: 535,
      regions: [],
      markers: FISHERIES
    },
    disease: {
      regionsPopup: true,
      regionsPopupDetail: true,
      regionsPopupWidth: 508,
      regionsPopupHeight: 550,
      regionsPopupDetailWidth: 563,
      regionsPopupDetailHeight: 800,
      markersPopup: false,
      regions: DISEASE,
      markers: []
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
      var regionCode;
      var regionEvent;
      var regionLat;
      var regionLng;
      var chart = parameters.chart ?
        parameters.chart : null;
      var tiles = parameters.tiles ?
        parameters.tiles : 'satellite';
      var regions = [];
      var markers = [];
      var video = false;
      var grid;
      var wm;
      var chartSync;
      var tilesSync;
      var markerSync;
      var regionSync;
      var videoSync;
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
      var videoCoverEl = document.getElementById('video_cover');
      var videoContainerEl = document.getElementById('video_container');
      var videoElementEl = document.getElementById('video_element');
      var videoStopEl = document.getElementById('video_stop');
      var videoObj;
      var singleEl = document.getElementById('single');
      var doubleEl = document.getElementById('double');
      var fullEl = document.getElementById('full');
      var satelliteEl = document.getElementById('satellite');
      var streetEl = document.getElementById('street');
      var initialCenterLat = parameters.initialCenterLat ?
        parseFloat(parameters.initialCenterLat) : 0;
      var initialCenterLng = parameters.initialCenterLng ?
        parseFloat(parameters.initialCenterLng) : 0;
      var initialZoomLevel = parameters.initialZoomLevel ?
        parseInt(parameters.initialZoomLevel) : MIN_ZOOM[size];
      var initialMarkerPopped = parameters.initialMarkerPopped ?
        parameters.initialMarkerPopped : null;
      var initialRegionPopped = parameters.initialRegionPopped ?
        parameters.initialRegionPopped : null;
      var initialRegionPoppedLat = parameters.initialRegionPoppedLat ?
        parameters.initialRegionPoppedLat : null;
      var initialRegionPoppedLng = parameters.initialRegionPoppedLng ?
        parameters.initialRegionPoppedLng : null;
      var iMarker;
      initialZoomLevel = Math.max(initialZoomLevel, MIN_ZOOM[size]);
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
          videoElementEl.setAttribute('width', 1600);
          videoElementEl.setAttribute('height', 900);
          videoContainerEl.style.width = '1600px';
          videoContainerEl.style.height = '900px';
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
          videoElementEl.setAttribute('width', 3200);
          videoElementEl.setAttribute('height', 1800);
          videoContainerEl.style.width = '3200px';
          videoContainerEl.style.height = '1800px';
          videoStopEl.style.right = 'initial';
          videoStopEl.style.top = 'initial';
          videoStopEl.style.left = '0px';
          videoStopEl.style.bottom = '0px';
          videoStopEl.style.width = '100px';
          videoStopEl.style.height = '100px';
          videoStopEl.style.transform = 'translate(-150%, 150%)';
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
      tilesSync = new thr0w.Sync(
        grid,
        base + '_tiles',
        tilesMessage,
        tilesReceive
      );
      markerSync = new thr0w.Sync(
        grid,
        base + '_marker',
        markerMessage,
        markerReceive
      );
      regionSync = new thr0w.Sync(
        grid,
        base + '_region',
        regionMessage,
        regionReceive
      );
      videoSync = new thr0w.Sync(
        grid,
        base + '_video',
        videoMessage,
        videoReceive
      );
      map = new thr0w.leaflet.Map(grid, initialCenterLat, initialCenterLng,
        initialZoomLevel,
        {
          minZoom: MIN_ZOOM[size],
          maxZoom: MAX_ZOOM,
          zoomControl: false,
          attributionControl: false,
          closePopupOnClick: false
        }
      );
      leafletMap = map.getLeafletMap();
      leafletMap.addEventListener('zoom', zoomed);
      updateTiles();
      updateChart();
      if (initialMarkerPopped) {
        for (iMarker = 0; iMarker < markers.length; iMarker++) {
          if (initialMarkerPopped === markers[iMarker].code) {
            markers.popped = true;
            if (markers[iMarker].added) {
              markers[iMarker].layer.openPopup();
            } else {
              markers[iMarker].pinLayer.openPopup();
            }
            break;
          }
        }
      }
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
      document.getElementById('disease')
        .addEventListener('click', handleDiseaseClick);
      document.getElementById('video')
        .addEventListener('click', handleVideoClick);
      videoStopEl.addEventListener('click', handleVideoStopClick);
      videoObj = new thr0w.video.Video(grid, videoElementEl);
      videoObj.addEventListener('ended', handleVideoStopClick);
      window.setInterval(checkIdle, TIMEOUT);
      function chartMessage() {
        return {
          chart: chart
        };
      }
      function chartReceive(data) {
        chart = data.chart;
        updateChart();
      }
      function tilesMessage() {
        return {
          tiles: tiles
        };
      }
      function tilesReceive(data) {
        tiles = data.tiles;
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
      function regionMessage() {
        return {
          code: regionCode,
          event: regionEvent,
          lat: regionLat,
          lng: regionLng
        };
      }
      function regionReceive(data) {
        var i;
        for (i = 0; i < regions.length; i++) {
          if (regions[i].code === data.code) {
            if (data.event === 'popupopen') {
              regions[i].popped = true;
              regions[i].poppedLat = data.lat;
              regions[i].poppedLng = data.lng;
              regions[i].layer.openPopup(L.latLng(data.lat, data.lng));
            }
            if (data.event === 'popupclose') {
              regions[i].popped = false;
              regions[i].layer.closePopup();
            }
          }
        }
      }
      function videoMessage() {
        return {
          video: video
        };
      }
      function videoReceive(data) {
        video = data.video;
        updateVideo();
      }
      function updateVideo() {
        if (!video) {
          videoContainerEl.style.display = 'none';
          videoCoverEl.style.display = 'none';
        } else {
          videoCoverEl.style.display = 'block';
          videoContainerEl.style.display = 'block';
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
        var url = [
          BASE_URL,
          '?size=0',
          '&initialCenterLat=' + map.getCenterLat(),
          '&initialCenterLng=' + map.getCenterLng(),
          '&initialZoomLevel=' + map.getZoomLevel(),
          '&tiles=' + tiles
        ].join('');
        if (chart) {
          url += '&chart=' + chart;
        }
        url += initialMarkerPoppedParameter();
        url += initialRegionPoppedParameter();
        switch (size) {
          case SIZE_FULL:
            thr0w.thr0wChannel([16, 17, 18, 19], {action: 'update',
              url: url});
            break;
          case SIZE_DOUBLE:
            switch (channel) {
              case 6:
                thr0w.thr0wChannel([16, 17], {action: 'update',
                  url: url});
                break;
              case 8:
                thr0w.thr0wChannel([18, 19], {action: 'update',
                  url: url});
                break;
              default:
            }
            break;
          default:
        }
      }
      function handleDoubleClick() {
        var url = [
          BASE_URL,
          '?size=1&control=6',
          '&initialCenterLat=' + map.getCenterLat(),
          '&initialCenterLng=' + map.getCenterLng(),
          '&initialZoomLevel=' + map.getZoomLevel(),
          '&tiles=' + tiles
        ].join('');
        if (chart) {
          url += '&chart=' + chart;
        }
        url += initialMarkerPoppedParameter();
        url += initialRegionPoppedParameter();
        thr0w.thr0wChannel([16, 17], {action: 'update', url: url});
        url = [
          BASE_URL,
          '?size=1&control=8',
          '&initialCenterLat=' + map.getCenterLat(),
          '&initialCenterLng=' + map.getCenterLng(),
          '&initialZoomLevel=' + map.getZoomLevel(),
          '&tiles=' + tiles
        ].join('');
        if (chart) {
          url += '&chart=' + chart;
        }
        url += initialMarkerPoppedParameter();
        url += initialRegionPoppedParameter();
        thr0w.thr0wChannel([18, 19], {action: 'update', url: url});
      }
      function handleFullClick() {
        var url = [
          BASE_URL,
          '?size=2',
          '&initialCenterLat=' + map.getCenterLat(),
          '&initialCenterLng=' + map.getCenterLng(),
          '&initialZoomLevel=' + map.getZoomLevel(),
          '&tiles=' + tiles
        ].join('');
        if (chart) {
          url += '&chart=' + chart;
        }
        url += initialMarkerPoppedParameter();
        url += initialRegionPoppedParameter();
        thr0w.thr0wChannel(BROWSERS, {action: 'update', url: url});
      }
      function initialMarkerPoppedParameter() {
        var i;
        var parameter = '';
        for (i = 0; i < markers.length; i++) {
          if (markers[i].popped) {
            parameter = '&initialMarkerPopped=' + markers[i].code;
            break;
          }
        }
        return parameter;
      }
      function initialRegionPoppedParameter() {
        var i;
        var parameter = '';
        for (i = 0; i < regions.length; i++) {
          if (regions[i].popped) {
            parameter = [
              '&initialRegionPopped=' + regions[i].code,
              '&initialRegionPoppedLat=' + regions[i].poppedLat,
              '&initialRegionPoppedLng=' + regions[i].poppedLng
            ].join('');
            break;
          }
        }
        return parameter;
      }
      function handleSatelliteClick() {
        tiles = 'satellite';
        updateTiles();
        tilesSync.update();
        tilesSync.idle();
      }
      function handleStreetClick() {
        tiles = 'street';
        updateTiles();
        tilesSync.update();
        tilesSync.idle();
      }
      function handleNoneClick() {
        wm.closeAllWindows();
        map.moveTo(0, 0, 0, MIN_ZOOM[size]);
        chart = null;
        updateChart();
        chartSync.update();
        chartSync.idle();
      }
      function handleFisheriesClick() {
        wm.closeAllWindows();
        map.moveTo(0, 0, 0, MIN_ZOOM[size]);
        chart = 'fisheries';
        updateChart();
        chartSync.update();
        chartSync.idle();
      }
      function handleDiseaseClick() {
        wm.closeAllWindows();
        map.moveTo(0, 0, 0, MIN_ZOOM[size]);
        chart = 'fisheries';
        chart = 'disease';
        updateChart();
        chartSync.update();
        chartSync.idle();
      }
      function handleVideoClick() {
        video = true;
        updateVideo();
        videoSync.update();
        videoSync.idle();
        videoObj.play();
      }
      function handleVideoStopClick() {
        video = false;
        videoObj.pause();
        updateVideo();
        videoSync.update();
        videoSync.idle();
        videoObj.setCurrentTime(0);
      }
      function updateChart() {
        var i;
        var j;
        removeRegions();
        removeMarkers();
        if (chart) {
          for (i = 0; i < CHARTS[chart].regions.length; i++) {
            addRegion(
              CHARTS[chart].regions[i].region,
              CHARTS[chart].regions[i].color,
              CHARTS[chart].regionsPopup,
              CHARTS[chart].regionsPopupDetail,
              CHARTS[chart].regionsPopupWidth,
              CHARTS[chart].regionsPopupHeight,
              CHARTS[chart].regionsPopupDetailWidth,
              CHARTS[chart].regionsPopupDetailHeight
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
                CHARTS[chart].markersPopupDetail,
                CHARTS[chart].markersPopupWidth,
                CHARTS[chart].markersPopupHeight,
                CHARTS[chart].markersPopupDetailWidth,
                CHARTS[chart].markersPopupDetailHeight
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
          streetEl.style.display = 'none';
          satelliteEl.style.display = 'block';
          // jscs:disable
          tileLayer = L.tileLayer(
            'http://192.168.1.2:8081/street/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(leafletMap);
          // jscs:enable
        }
        if (tiles === 'satellite') {
          satelliteEl.style.display = 'none';
          streetEl.style.display = 'block';
          // PROD
          // jscs:disable
          tileLayer =  L.tileLayer(
            'http://192.168.1.2:8080/satellite/{z}/{y}/{x}',
            {
               attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            }
          ).addTo(leafletMap);
          // jscs:enable
          /*
          // DEV
          // jscs:disable
          tileLayer = L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            {
              maxZoom: 19,
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }
          ).addTo(leafletMap);
          */
        }
      }
      function addRegion(code, color, popup,
        popupDetail, popupWidth, popupHeight,
        popupDetailWidth, popupDetailHeight) {
        var popupHtml = '';
        var popupDetailHtml = '';
        var popupDetailButton;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = handleOnReadyStateChange;
        function handleOnReadyStateChange() {
          var layer;
          var region = {};
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
              if (popupDetail) {
                popupDetailHtml = [
                  '<div id="popup__detail--',
                  code,
                  '" class="popup__detail">',
                  '<img src="img/info.png" width="50" height="50"/>',
                  '</div>',
                  '<div style="clear: both;">&nbsp;</div>',
                ].join('');
              }
              layer.addEventListener('popupopen', handlePopupOpen);
              layer.addEventListener('popupclose', handlePopupClose);
              layer.addEventListener('click', handleClick);
              layer.bindPopup(popupHtml + popupDetailHtml,
                {autoPan: false, maxWidth: popupWidth});
            }
            region.code = code;
            region.layer = layer;
            region.popped = false;
            regions.push(region);
            layer.addTo(leafletMap);
            if (initialRegionPopped === code) {
              initialRegionPopped = null;
              region.popped = true;
              region.poppedLat = initialRegionPoppedLat;
              region.poppedLng = initialRegionPoppedLng;
              layer.openPopup(
                L.latLng(initialRegionPoppedLat,
                  initialRegionPoppedLng));
            }
          }
          function handlePopupOpen(e) {
            if (popupDetail) {
              popupDetailButton = document.getElementById(
                'popup__detail--' + code
              );
              popupDetailButton.addEventListener('click',
                handlePopupDetailClick);
            }
            if (!region.popped) {
              region.popped = true;
              region.poppedLat = e.popup.getLatLng().lat;
              region.poppedLng = e.popup.getLatLng().lng;
              regionCode = code;
              regionEvent = 'popupopen';
              regionLat = region.poppedLat;
              regionLng = region.poppedLng;
              regionSync.update();
              regionSync.idle();
            }
          }
          function handlePopupDetailClick() {
            try {
              wm.openWindow(code, windowX,
                windowYBase + 1920 - popupDetailHeight - 100,
                popupDetailWidth,
                popupDetailHeight, chart + '_detail' + '/?code=' + code
              );
            } catch (error) {
              wm.closeWindow(code);
              wm.openWindow(code, windowX,
                windowYBase + 1920 - popupDetailHeight - 100,
                popupDetailWidth,
                popupDetailHeight, chart + '_detail' + '/?code=' + code
              );
            }
          }
          function handlePopupClose() {
            if (popupDetail) {
              popupDetailButton.removeEventListener('click',
                handlePopupDetailClick);
            }
            if (region.popped) {
              region.popped = false;
              regionCode = code;
              regionEvent = 'popupclose';
              regionSync.update();
              regionSync.idle();
            }
          }
          function handleClick(e) {
            if (region.popped) {
              regionCode = code;
              regionEvent = 'popupclose';
              regionSync.update();
              regionSync.idle();
              regionEvent = 'popupopen';
              regionLat = e.latlng.lat;
              regionLng = e.latlng.lng;
              regionSync.update();
              regionSync.idle();
            }
          }
        }
        xmlhttp.open('GET', '../../upload/larkintuckerllc-isfs-maps/world.geo.json/countries/' +
          code + '.geo.json', true);
        xmlhttp.send();
      }
      function removeRegions() {
        var i;
        var layer;
        for (i = 0; i < regions.length; i++) {
          layer = regions[i].layer;
          if (regions[i].popped) {
            regions[i].popped = false;
            layer.closePopup();
          }
          layer.removeEventListener();
          layer.removeFrom(leafletMap);
        }
        regions = [];
      }
      function addMarker(code, latlng, iconUrl, minZoom, popup,
        popupDetail, popupWidth, popupHeight, popupDetailWidth,
        popupDetailHeight) {
        var popupHtml;
        var popupDetailHtml = '';
        var popupDetailPinHtml = '';
        var popupDetailButton;
        var marker = {};
        var pinIcon = L.icon({
          iconUrl: 'img/pins/red.png',
          iconSize: L.point(25,43),
          iconAnchor: L.point(12,43)
        });
        var pinLayer = L.marker(latlng, {icon: pinIcon});
        var icon = L.icon({
          iconUrl: iconUrl,
          iconSize: L.point(100,100),
          iconAnchor: L.point(50,50)
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
          if (popupDetail) {
            popupDetailHtml = [
              '<div id="popup__detail--',
              code,
              '" class="popup__detail">',
              '<img src="img/info.png" width="50" height="50"/>',
              '</div>',
              '<div style="clear: both;">&nbsp;</div>',
            ].join('');
            popupDetailPinHtml = [
              '<div id="popup__detail--pin--',
              code,
              '" class="popup__detail">',
              '<img src="img/info.png" width="50" height="50"/>',
              '</div>',
              '<div style="clear: both;">&nbsp;</div>',
            ].join('');
          }
          pinLayer.addEventListener('popupopen', handlePopupPinOpen);
          pinLayer.addEventListener('popupclose', handlePopupClose);
          layer.addEventListener('popupopen', handlePopupOpen);
          layer.addEventListener('popupclose', handlePopupClose);
          pinLayer.bindPopup(popupHtml + popupDetailPinHtml,
            {autoPan: false, maxWidth: popupWidth});
          layer.bindPopup(popupHtml + popupDetailHtml,
            {autoPan: false, maxWidth: popupWidth});
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
        function handlePopupPinOpen() {
          handleOpen('popup__detail--pin--');
        }
        function handlePopupOpen() {
          handleOpen('popup__detail--');
        }
        function handlePopupClose() {
          if (popupDetail) {
            popupDetailButton.removeEventListener('click',
              handlePopupDetailClick);
          }
          if (marker.popped) {
            marker.popped = false;
            markerCode = code;
            markerEvent = 'popupclose';
            markerSync.update();
            markerSync.idle();
          }
        }
        function handleOpen(prefix) {
          if (popupDetail) {
            popupDetailButton = document.getElementById(
              prefix + code
            );
            popupDetailButton.addEventListener('click',
              handlePopupDetailClick);
          }
          if (!marker.popped) {
            marker.popped = true;
            markerCode = code;
            markerEvent = 'popupopen';
            markerSync.update();
            markerSync.idle();
          }
        }
        function handlePopupDetailClick() {
          try {
            wm.openWindow(code, windowX,
              windowYBase + 1920 - popupDetailHeight - 100,
              popupDetailWidth,
              popupDetailHeight, chart + '_detail' + '/?code=' + code
            );
          } catch (error) {
            wm.closeWindow(code);
            wm.openWindow(code, windowX,
              windowYBase + 1920 - popupDetailHeight - 100,
              popupDetailWidth,
              popupDetailHeight, chart + '_detail' + '/?code=' + code
            );
          }
        }
      }
      function removeMarkers() {
        var i;
        var pinLayer;
        var layer;
        for (i = 0; i < markers.length; i++) {
          pinLayer = markers[i].pinLayer;
          layer = markers[i].layer;
          if (markers[i].popped) {
            markers[i].popped = false;
            layer.closePopup();
            pinLayer.closePopup();
          }
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
        if (video) {
          keepActive();
          return;
        }
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
