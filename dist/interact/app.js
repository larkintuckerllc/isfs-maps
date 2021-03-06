(function() {
  'use strict';
  var APP_USER = 'larkintuckerllc';
  var APP_REPO = 'isfs-maps';
  var SIZE_SINGLE = 0;
  var SIZE_DOUBLE = 1;
  var SIZE_QUAD = 2;
  var SIZE_FULL = 3;
  var TIMEOUT = 120 * 60 * 1000;
  var CHANNELS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var BROWSERS = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  var MIN_ZOOM = {
  };
  MIN_ZOOM[SIZE_SINGLE] = 3;
  MIN_ZOOM[SIZE_DOUBLE] = 4;
  MIN_ZOOM[SIZE_QUAD] = 4;
  MIN_ZOOM[SIZE_FULL] = 4;
  var MAX_ZOOM = 19;
  var OBESITY = [
    {
      region: 'TLS',
      color: 'rgb(11,0,0)'
    },
    {
      region: 'PRK',
      color: 'rgb(12,0,0)'
    },
    {
      region: 'BDI',
      color: 'rgb(13,0,0)'
    },
    {
      region: 'AFG',
      color: 'rgb(14,0,0)'
    },
    {
      region: 'MMR',
      color: 'rgb(14,0,0)'
    },
    {
      region: 'KHM',
      color: 'rgb(16,0,0)'
    },
    {
      region: 'JPN',
      color: 'rgb(16,0,0)'
    },
    {
      region: 'NPL',
      color: 'rgb(16,0,0)'
    },
    {
      region: 'LAO',
      color: 'rgb(17,0,0)'
    },
    {
      region: 'BGD',
      color: 'rgb(18,0,0)'
    },
    {
      region: 'VNM',
      color: 'rgb(18,0,0)'
    },
    {
      region: 'ETH',
      color: 'rgb(20,0,0)'
    },
    {
      region: 'RWA',
      color: 'rgb(20,0,0)'
    },
    {
      region: 'ERI',
      color: 'rgb(20,0,0)'
    },
    {
      region: 'NER',
      color: 'rgb(21,0,0)'
    },
    {
      region: 'COD',
      color: 'rgb(22,0,0)'
    },
    {
      region: 'SOM',
      color: 'rgb(23,0,0)'
    },
    {
      region: 'IND',
      color: 'rgb(24,0,0)'
    },
    {
      region: 'UGA',
      color: 'rgb(24,0,0)'
    },
    {
      region: 'CAF',
      color: 'rgb(25,0,0)'
    },
    {
      region: 'PHL',
      color: 'rgb(25,0,0)'
    },
    {
      region: 'MWI',
      color: 'rgb(26,0,0)'
    },
    {
      region: 'MOZ',
      color: 'rgb(26,0,0)'
    },
    {
      region: 'MDG',
      color: 'rgb(27,0,0)'
    },
    {
      region: 'PAK',
      color: 'rgb(27,0,0)'
    },
    {
      region: 'IDN',
      color: 'rgb(28,0,0)'
    },
    {
      region: 'KOR',
      color: 'rgb(29,0,0)'
    },
    {
      region: 'SGP',
      color: 'rgb(31,0,0)'
    },
    {
      region: 'BFA',
      color: 'rgb(31,0,0)'
    },
    {
      region: 'LKA',
      color: 'rgb(32,0,0)'
    },
    {
      region: 'COM',
      color: 'rgb(33,0,0)'
    },
    {
      region: 'LBR',
      color: 'rgb(33,0,0)'
    },
    {
      region: 'BTN',
      color: 'rgb(33,0,0)'
    },
    {
      region: 'GIN',
      color: 'rgb(34,0,0)'
    },
    {
      region: 'MLI',
      color: 'rgb(34,0,0)'
    },
    {
      region: 'CHN',
      color: 'rgb(34,0,0)'
    },
    {
      region: 'KEN',
      color: 'rgb(35,0,0)'
    },
    {
      region: 'TZA',
      color: 'rgb(35,0,0)'
    },
    {
      region: 'GNB',
      color: 'rgb(36,0,0)'
    },
    {
      region: 'SSD',
      color: 'rgb(37,0,0)'
    },
    {
      region: 'SDN',
      color: 'rgb(37,0,0)'
    },
    {
      region: 'TGO',
      color: 'rgb(37,0,0)'
    },
    {
      region: 'SLE',
      color: 'rgb(38,0,0)'
    },
    {
      region: 'MDV',
      color: 'rgb(39,0,0)'
    },
    {
      region: 'TCD',
      color: 'rgb(40,0,0)'
    },
    {
      region: 'THA',
      color: 'rgb(42,0,0)'
    },
    {
      region: 'ZMB',
      color: 'rgb(44,0,0)'
    },
    {
      region: 'CIV',
      color: 'rgb(46,0,0)'
    },
    {
      region: 'BEN',
      color: 'rgb(46,0,0)'
    },
    {
      region: 'DJI',
      color: 'rgb(48,0,0)'
    },
    {
      region: 'MRT',
      color: 'rgb(48,0,0)'
    },
    {
      region: 'SEN',
      color: 'rgb(49,0,0)'
    },
    {
      region: 'AGO',
      color: 'rgb(51,0,0)'
    },
    {
      region: 'ZWE',
      color: 'rgb(52,0,0)'
    },
    {
      region: 'GMB',
      color: 'rgb(54,0,0)'
    },
    {
      region: 'COG',
      color: 'rgb(55,0,0)'
    },
    {
      region: 'NGA',
      color: 'rgb(55,0,0)'
    },
    {
      region: 'CMR',
      color: 'rgb(57,0,0)'
    },
    {
      region: 'HTI',
      color: 'rgb(59,0,0)'
    },
    {
      region: 'GHA',
      color: 'rgb(61,0,0)'
    },
    {
      region: 'STP',
      color: 'rgb(61,0,0)'
    },
    {
      region: 'CPV',
      color: 'rgb(65,0,0)'
    },
    {
      region: 'MYS',
      color: 'rgb(66,0,0)'
    },
    {
      region: 'TJK',
      color: 'rgb(68,0,0)'
    },
    {
      region: 'LSO',
      color: 'rgb(71,0,0)'
    },
    {
      region: 'KGZ',
      color: 'rgb(72,0,0)'
    },
    {
      region: 'MDA',
      color: 'rgb(74,0,0)'
    },
    {
      region: 'UZB',
      color: 'rgb(77,0,0)'
    },
    {
      region: 'PRY',
      color: 'rgb(81,0,0)'
    },
    {
      region: 'MNG',
      color: 'rgb(83,0,0)'
    },
    {
      region: 'BOL',
      color: 'rgb(85,0,0)'
    },
    {
      region: 'NIC',
      color: 'rgb(85,0,0)'
    },
    {
      region: 'YEM',
      color: 'rgb(86,0,0)'
    },
    {
      region: 'GNQ',
      color: 'rgb(87,0,0)'
    },
    {
      region: 'ALB',
      color: 'rgb(88,0,0)'
    },
    {
      region: 'GAB',
      color: 'rgb(88,0,0)'
    },
    {
      region: 'SWZ',
      color: 'rgb(88,0,0)'
    },
    {
      region: 'BIH',
      color: 'rgb(89,0,0)'
    },
    {
      region: 'MUS',
      color: 'rgb(89,0,0)'
    },
    {
      region: 'BRN',
      color: 'rgb(90,0,0)'
    },
    {
      region: 'HND',
      color: 'rgb(91,0,0)'
    },
    {
      region: 'AUT',
      color: 'rgb(92,0,0)'
    },
    {
      region: 'GTM',
      color: 'rgb(93,0,0)'
    },
    {
      region: 'ECU',
      color: 'rgb(93,0,0)'
    },
    {
      region: 'NAM',
      color: 'rgb(94,0,0)'
    },
    {
      region: 'DNK',
      color: 'rgb(96,0,0)'
    },
    {
      region: 'CHE',
      color: 'rgb(97,0,0)'
    },
    {
      region: 'ARM',
      color: 'rgb(97,0,0)'
    },
    {
      region: 'SRB',
      color: 'rgb(97,0,0)'
    },
    {
      region: 'MKD',
      color: 'rgb(98,0,0)'
    },
    {
      region: 'NLD',
      color: 'rgb(99,0,0)'
    },
    {
      region: 'BRA',
      color: 'rgb(100,0,0)'
    },
    {
      region: 'MNE',
      color: 'rgb(100,0,0)'
    },
    {
      region: 'DEU',
      color: 'rgb(100,0,0)'
    },
    {
      region: 'PRT',
      color: 'rgb(100,0,0)'
    },
    {
      region: 'TKM',
      color: 'rgb(100,0,0)'
    },
    {
      region: 'UKR',
      color: 'rgb(100,0,0)'
    },
    {
      region: 'BEL',
      color: 'rgb(101,0,0)'
    },
    {
      region: 'SWE',
      color: 'rgb(102,0,0)'
    },
    {
      region: 'FIN',
      color: 'rgb(103,0,0)'
    },
    {
      region: 'GEO',
      color: 'rgb(104,0,0)'
    },
    {
      region: 'COL',
      color: 'rgb(105,0,0)'
    },
    {
      region: 'ITA',
      color: 'rgb(105,0,0)'
    },
    {
      region: 'PER',
      color: 'rgb(105,0,0)'
    },
    {
      region: 'ROU',
      color: 'rgb(108,0,0)'
    },
    {
      region: 'SLV',
      color: 'rgb(109,0,0)'
    },
    {
      region: 'MAR',
      color: 'rgb(111,0,0)'
    },
    {
      region: 'BWA',
      color: 'rgb(112,0,0)'
    },
    {
      region: 'AZE',
      color: 'rgb(112,0,0)'
    },
    {
      region: 'BLZ',
      color: 'rgb(112,0,0)'
    },
    {
      region: 'EST',
      color: 'rgb(113,0,0)'
    },
    {
      region: 'ISL',
      color: 'rgb(114,0,0)'
    },
    {
      region: 'GRC',
      color: 'rgb(114,0,0)'
    },
    {
      region: 'GUY',
      color: 'rgb(114,0,0)'
    },
    {
      region: 'LUX',
      color: 'rgb(115,0,0)'
    },
    {
      region: 'NOR',
      color: 'rgb(115,0,0)'
    },
    {
      region: 'BGR',
      color: 'rgb(116,0,0)'
    },
    {
      region: 'HRV',
      color: 'rgb(116,0,0)'
    },
    {
      region: 'BLR',
      color: 'rgb(117,0,0)'
    },
    {
      region: 'KAZ',
      color: 'rgb(117,0,0)'
    },
    {
      region: 'SYR',
      color: 'rgb(117,0,0)'
    },
    {
      region: 'LVA',
      color: 'rgb(118,0,0)'
    },
    {
      region: 'ESP',
      color: 'rgb(118,0,0)'
    },
    {
      region: 'CYP',
      color: 'rgb(119,0,0)'
    },
    {
      region: 'IRQ',
      color: 'rgb(119,0,0)'
    },
    {
      region: 'DOM',
      color: 'rgb(119,0,0)'
    },
    {
      region: 'FRA',
      color: 'rgb(119,0,0)'
    },
    {
      region: 'HUN',
      color: 'rgb(120,0,0)'
    },
    {
      region: 'RUS',
      color: 'rgb(120,0,0)'
    },
    {
      region: 'CRI',
      color: 'rgb(121,0,0)'
    },
    {
      region: 'VCT',
      color: 'rgb(121,0,0)'
    },
    {
      region: 'DZA',
      color: 'rgb(124,0,0)'
    },
    {
      region: 'VEN',
      color: 'rgb(124,0,0)'
    },
    {
      region: 'SVN',
      color: 'rgb(125,0,0)'
    },
    {
      region: 'CUB',
      color: 'rgb(126,0,0)'
    },
    {
      region: 'POL',
      color: 'rgb(126,0,0)'
    },
    {
      region: 'ISR',
      color: 'rgb(126,0,0)'
    },
    {
      region: 'IRL',
      color: 'rgb(128,0,0)'
    },
    {
      region: 'SVK',
      color: 'rgb(128,0,0)'
    },
    {
      region: 'DMA',
      color: 'rgb(129,0,0)'
    },
    {
      region: 'LTU',
      color: 'rgb(129,0,0)'
    },
    {
      region: 'IRN',
      color: 'rgb(130,0,0)'
    },
    {
      region: 'SUR',
      color: 'rgb(130,0,0)'
    },
    {
      region: 'GRD',
      color: 'rgb(131,0,0)'
    },
    {
      region: 'ARG',
      color: 'rgb(131,0,0)'
    },
    {
      region: 'SYC',
      color: 'rgb(131,0,0)'
    },
    {
      region: 'MLT',
      color: 'rgb(133,0,0)'
    },
    {
      region: 'URY',
      color: 'rgb(133,0,0)'
    },
    {
      region: 'CZE',
      color: 'rgb(134,0,0)'
    },
    {
      region: 'PAN',
      color: 'rgb(134,0,0)'
    },
    {
      region: 'ZAF',
      color: 'rgb(134,0,0)'
    },
    {
      region: 'LCA',
      color: 'rgb(134,0,0)'
    },
    {
      region: 'TUN',
      color: 'rgb(135,0,0)'
    },
    {
      region: 'JAM',
      color: 'rgb(136,0,0)'
    },
    {
      region: 'SLB',
      color: 'rgb(138,0,0)'
    },
    {
      region: 'CHL',
      color: 'rgb(139,0,0)'
    },
    {
      region: 'PNG',
      color: 'rgb(139,0,0)'
    },
    {
      region: 'CAN',
      color: 'rgb(140,0,0)'
    },
    {
      region: 'MEX',
      color: 'rgb(140,0,0)'
    },
    {
      region: 'GBR',
      color: 'rgb(140,0,0)'
    },
    {
      region: 'KNA',
      color: 'rgb(141,0,0)'
    },
    {
      region: 'AUS',
      color: 'rgb(143,0,0)'
    },
    {
      region: 'EGY',
      color: 'rgb(144,0,0)'
    },
    {
      region: 'NZL',
      color: 'rgb(146,0,0)'
    },
    {
      region: 'AND',
      color: 'rgb(147,0,0)'
    },
    {
      region: 'TUR',
      color: 'rgb(147,0,0)'
    },
    {
      region: 'JOR',
      color: 'rgb(152,0,0)'
    },
    {
      region: 'ATG',
      color: 'rgb(154,0,0)'
    },
    {
      region: 'OMN',
      color: 'rgb(154,0,0)'
    },
    {
      region: 'TTO',
      color: 'rgb(155,0,0)'
    },
    {
      region: 'BRB',
      color: 'rgb(156,0,0)'
    },
    {
      region: 'LBN',
      color: 'rgb(159,0,0)'
    },
    {
      region: 'LBY',
      color: 'rgb(165,0,0)'
    },
    {
      region: 'USA',
      color: 'rgb(168,0,0)'
    },
    {
      region: 'SAU',
      color: 'rgb(173,0,0)'
    },
    {
      region: 'BHR',
      color: 'rgb(175,0,0)'
    },
    {
      region: 'VUT',
      color: 'rgb(177,0,0)'
    },
    {
      region: 'BHS',
      color: 'rgb(181,0,0)'
    },
    {
      region: 'FJI',
      color: 'rgb(182,0,0)'
    },
    {
      region: 'FSM',
      color: 'rgb(186,0,0)'
    },
    {
      region: 'ARE',
      color: 'rgb(186,0,0)'
    },
    {
      region: 'KWT',
      color: 'rgb(198,0,0)'
    },
    {
      region: 'TUV',
      color: 'rgb(201,0,0)'
    },
    {
      region: 'KIR',
      color: 'rgb(203,0,0)'
    },
    {
      region: 'QAT',
      color: 'rgb(211,0,0)'
    },
    {
      region: 'MHL',
      color: 'rgb(214,0,0)'
    },
    {
      region: 'NIU',
      color: 'rgb(216,0,0)'
    },
    {
      region: 'TON',
      color: 'rgb(216,0,0)'
    },
    {
      region: 'WSM',
      color: 'rgb(217,0,0)'
    },
    {
      region: 'NRU',
      color: 'rgb(228,0,0)'
    },
    {
      region: 'PLW',
      color: 'rgb(238,0,0)'
    },
    {
      region: 'COK',
      color: 'rgb(254,0,0)'
    }
  ];
  var OVERWEIGHT = [
    {
      region: 'TLS',
      color: 'rgb(213,0,0)'
    },
    {
      region: 'PRK',
      color: 'rgb(95,0,0)'
    },
    {
      region: 'BDI',
      color: 'rgb(77,0,0)'
    },
    {
      region: 'AFG',
      color: 'rgb(45,0,0)'
    },
    {
      region: 'MMR',
      color: 'rgb(182,0,0)'
    },
    {
      region: 'KHM',
      color: 'rgb(79,0,0)'
    },
    {
      region: 'JPN',
      color: 'rgb(167,0,0)'
    },
    {
      region: 'NPL',
      color: 'rgb(182,0,0)'
    },
    {
      region: 'LAO',
      color: 'rgb(172,0,0)'
    },
    {
      region: 'BGD',
      color: 'rgb(64,0,0)'
    },
    {
      region: 'VNM',
      color: 'rgb(249,0,0)'
    },
    {
      region: 'ETH',
      color: 'rgb(108,0,0)'
    },
    {
      region: 'RWA',
      color: 'rgb(190,0,0)'
    },
    {
      region: 'ERI',
      color: 'rgb(105,0,0)'
    },
    {
      region: 'NER',
      color: 'rgb(184,0,0)'
    },
    {
      region: 'COD',
      color: 'rgb(96,0,0)'
    },
    {
      region: 'SOM',
      color: 'rgb(198,0,0)'
    },
    {
      region: 'IND',
      color: 'rgb(155,0,0)'
    },
    {
      region: 'UGA',
      color: 'rgb(230,0,0)'
    },
    {
      region: 'CAF',
      color: 'rgb(81,0,0)'
    },
    {
      region: 'PHL',
      color: 'rgb(186,0,0)'
    },
    {
      region: 'MWI',
      color: 'rgb(175,0,0)'
    },
    {
      region: 'MOZ',
      color: 'rgb(182,0,0)'
    },
    {
      region: 'MDG',
      color: 'rgb(174,0,0)'
    },
    {
      region: 'PAK',
      color: 'rgb(185,0,0)'
    },
    {
      region: 'IDN',
      color: 'rgb(158,0,0)'
    },
    {
      region: 'KOR',
      color: 'rgb(189,0,0)'
    },
    {
      region: 'SGP',
      color: 'rgb(196,0,0)'
    },
    {
      region: 'BFA',
      color: 'rgb(77,0,0)'
    },
    {
      region: 'LKA',
      color: 'rgb(201,0,0)'
    },
    {
      region: 'COM',
      color: 'rgb(85,0,0)'
    },
    {
      region: 'LBR',
      color: 'rgb(173,0,0)'
    },
    {
      region: 'BTN',
      color: 'rgb(68,0,0)'
    },
    {
      region: 'GIN',
      color: 'rgb(146,0,0)'
    },
    {
      region: 'MLI',
      color: 'rgb(175,0,0)'
    },
    {
      region: 'CHN',
      color: 'rgb(82,0,0)'
    },
    {
      region: 'KEN',
      color: 'rgb(170,0,0)'
    },
    {
      region: 'TZA',
      color: 'rgb(235,0,0)'
    },
    {
      region: 'GNB',
      color: 'rgb(147,0,0)'
    },
    {
      region: 'SSD',
      color: 'rgb(199,0,0)'
    },
    {
      region: 'SDN',
      color: 'rgb(201,0,0)'
    },
    {
      region: 'TGO',
      color: 'rgb(216,0,0)'
    },
    {
      region: 'SLE',
      color: 'rgb(195,0,0)'
    },
    {
      region: 'MDV',
      color: 'rgb(175,0,0)'
    },
    {
      region: 'TCD',
      color: 'rgb(81,0,0)'
    },
    {
      region: 'THA',
      color: 'rgb(211,0,0)'
    },
    {
      region: 'CIV',
      color: 'rgb(78,0,0)'
    },
    {
      region: 'BEN',
      color: 'rgb(68,0,0)'
    },
    {
      region: 'DJI',
      color: 'rgb(97,0,0)'
    },
    {
      region: 'MRT',
      color: 'rgb(177,0,0)'
    },
    {
      region: 'SEN',
      color: 'rgb(194,0,0)'
    },
    {
      region: 'AGO',
      color: 'rgb(55,0,0)'
    },
    {
      region: 'GMB',
      color: 'rgb(121,0,0)'
    },
    {
      region: 'COG',
      color: 'rgb(87,0,0)'
    },
    {
      region: 'NGA',
      color: 'rgb(184,0,0)'
    },
    {
      region: 'CMR',
      color: 'rgb(80,0,0)'
    },
    {
      region: 'HTI',
      color: 'rgb(148,0,0)'
    },
    {
      region: 'GHA',
      color: 'rgb(135,0,0)'
    },
    {
      region: 'STP',
      color: 'rgb(193,0,0)'
    },
    {
      region: 'CPV',
      color: 'rgb(79,0,0)'
    },
    {
      region: 'MYS',
      color: 'rgb(175,0,0)'
    },
    {
      region: 'TJK',
      color: 'rgb(210,0,0)'
    },
    {
      region: 'LSO',
      color: 'rgb(173,0,0)'
    },
    {
      region: 'KGZ',
      color: 'rgb(171,0,0)'
    },
    {
      region: 'MDA',
      color: 'rgb(189,0,0)'
    },
    {
      region: 'UZB',
      color: 'rgb(238,0,0)'
    },
    {
      region: 'PRY',
      color: 'rgb(186,0,0)'
    },
    {
      region: 'MNG',
      color: 'rgb(180,0,0)'
    },
    {
      region: 'BOL',
      color: 'rgb(69,0,0)'
    },
    {
      region: 'NIC',
      color: 'rgb(183,0,0)'
    },
    {
      region: 'YEM',
      color: 'rgb(255,0,0)'
    },
    {
      region: 'GNQ',
      color: 'rgb(105,0,0)'
    },
    {
      region: 'ALB',
      color: 'rgb(48,0,0)'
    },
    {
      region: 'GAB',
      color: 'rgb(121,0,0)'
    },
    {
      region: 'SWZ',
      color: 'rgb(202,0,0)'
    },
    {
      region: 'BIH',
      color: 'rgb(71,0,0)'
    },
    {
      region: 'MUS',
      color: 'rgb(177,0,0)'
    },
    {
      region: 'BRN',
      color: 'rgb(74,0,0)'
    },
    {
      region: 'HND',
      color: 'rgb(151,0,0)'
    },
    {
      region: 'AUT',
      color: 'rgb(59,0,0)'
    },
    {
      region: 'GTM',
      color: 'rgb(141,0,0)'
    },
    {
      region: 'ECU',
      color: 'rgb(103,0,0)'
    },
    {
      region: 'NAM',
      color: 'rgb(182,0,0)'
    },
    {
      region: 'DNK',
      color: 'rgb(96,0,0)'
    },
    {
      region: 'CHE',
      color: 'rgb(207,0,0)'
    },
    {
      region: 'ARM',
      color: 'rgb(59,0,0)'
    },
    {
      region: 'SRB',
      color: 'rgb(194,0,0)'
    },
    {
      region: 'MKD',
      color: 'rgb(212,0,0)'
    },
    {
      region: 'NLD',
      color: 'rgb(182,0,0)'
    },
    {
      region: 'BRA',
      color: 'rgb(74,0,0)'
    },
    {
      region: 'MNE',
      color: 'rgb(181,0,0)'
    },
    {
      region: 'DEU',
      color: 'rgb(131,0,0)'
    },
    {
      region: 'PRT',
      color: 'rgb(189,0,0)'
    },
    {
      region: 'TKM',
      color: 'rgb(224,0,0)'
    },
    {
      region: 'UKR',
      color: 'rgb(230,0,0)'
    },
    {
      region: 'BEL',
      color: 'rgb(68,0,0)'
    },
    {
      region: 'SWE',
      color: 'rgb(202,0,0)'
    },
    {
      region: 'FIN',
      color: 'rgb(111,0,0)'
    },
    {
      region: 'GEO',
      color: 'rgb(130,0,0)'
    },
    {
      region: 'COL',
      color: 'rgb(82,0,0)'
    },
    {
      region: 'ITA',
      color: 'rgb(165,0,0)'
    },
    {
      region: 'PER',
      color: 'rgb(186,0,0)'
    },
    {
      region: 'ROU',
      color: 'rgb(190,0,0)'
    },
    {
      region: 'SLV',
      color: 'rgb(105,0,0)'
    },
    {
      region: 'MAR',
      color: 'rgb(181,0,0)'
    },
    {
      region: 'BWA',
      color: 'rgb(72,0,0)'
    },
    {
      region: 'AZE',
      color: 'rgb(61,0,0)'
    },
    {
      region: 'BLZ',
      color: 'rgb(68,0,0)'
    },
    {
      region: 'EST',
      color: 'rgb(105,0,0)'
    },
    {
      region: 'ISL',
      color: 'rgb(154,0,0)'
    },
    {
      region: 'GRC',
      color: 'rgb(141,0,0)'
    },
    {
      region: 'GUY',
      color: 'rgb(147,0,0)'
    },
    {
      region: 'LUX',
      color: 'rgb(174,0,0)'
    },
    {
      region: 'NOR',
      color: 'rgb(184,0,0)'
    },
    {
      region: 'BGR',
      color: 'rgb(76,0,0)'
    },
    {
      region: 'HRV',
      color: 'rgb(91,0,0)'
    },
    {
      region: 'BLR',
      color: 'rgb(65,0,0)'
    },
    {
      region: 'KAZ',
      color: 'rgb(169,0,0)'
    },
    {
      region: 'SYR',
      color: 'rgb(208,0,0)'
    },
    {
      region: 'LVA',
      color: 'rgb(172,0,0)'
    },
    {
      region: 'ESP',
      color: 'rgb(199,0,0)'
    },
    {
      region: 'CYP',
      color: 'rgb(93,0,0)'
    },
    {
      region: 'IRQ',
      color: 'rgb(163,0,0)'
    },
    {
      region: 'DOM',
      color: 'rgb(102,0,0)'
    },
    {
      region: 'FRA',
      color: 'rgb(116,0,0)'
    },
    {
      region: 'HUN',
      color: 'rgb(152,0,0)'
    },
    {
      region: 'RUS',
      color: 'rgb(190,0,0)'
    },
    {
      region: 'CRI',
      color: 'rgb(90,0,0)'
    },
    {
      region: 'VCT',
      color: 'rgb(191,0,0)'
    },
    {
      region: 'DZA',
      color: 'rgb(51,0,0)'
    },
    {
      region: 'VEN',
      color: 'rgb(245,0,0)'
    },
    {
      region: 'SVN',
      color: 'rgb(196,0,0)'
    },
    {
      region: 'CUB',
      color: 'rgb(93,0,0)'
    },
    {
      region: 'POL',
      color: 'rgb(187,0,0)'
    },
    {
      region: 'ISR',
      color: 'rgb(164,0,0)'
    },
    {
      region: 'IRL',
      color: 'rgb(163,0,0)'
    },
    {
      region: 'SVK',
      color: 'rgb(196,0,0)'
    },
    {
      region: 'DMA',
      color: 'rgb(100,0,0)'
    },
    {
      region: 'LTU',
      color: 'rgb(173,0,0)'
    },
    {
      region: 'IRN',
      color: 'rgb(162,0,0)'
    },
    {
      region: 'SUR',
      color: 'rgb(201,0,0)'
    },
    {
      region: 'GRD',
      color: 'rgb(141,0,0)'
    },
    {
      region: 'ARG',
      color: 'rgb(56,0,0)'
    },
    {
      region: 'SYC',
      color: 'rgb(195,0,0)'
    },
    {
      region: 'MLT',
      color: 'rgb(177,0,0)'
    },
    {
      region: 'URY',
      color: 'rgb(237,0,0)'
    },
    {
      region: 'CZE',
      color: 'rgb(95,0,0)'
    },
    {
      region: 'PAN',
      color: 'rgb(185,0,0)'
    },
    {
      region: 'ZAF',
      color: 'rgb(199,0,0)'
    },
    {
      region: 'LCA',
      color: 'rgb(191,0,0)'
    },
    {
      region: 'TUN',
      color: 'rgb(217,0,0)'
    },
    {
      region: 'JAM',
      color: 'rgb(166,0,0)'
    },
    {
      region: 'SLB',
      color: 'rgb(198,0,0)'
    },
    {
      region: 'CHL',
      color: 'rgb(81,0,0)'
    },
    {
      region: 'PNG',
      color: 'rgb(185,0,0)'
    },
    {
      region: 'CAN',
      color: 'rgb(80,0,0)'
    },
    {
      region: 'MEX',
      color: 'rgb(178,0,0)'
    },
    {
      region: 'GBR',
      color: 'rgb(233,0,0)'
    },
    {
      region: 'KNA',
      color: 'rgb(191,0,0)'
    },
    {
      region: 'AUS',
      color: 'rgb(59,0,0)'
    },
    {
      region: 'EGY',
      color: 'rgb(104,0,0)'
    },
    {
      region: 'NZL',
      color: 'rgb(183,0,0)'
    },
    {
      region: 'AND',
      color: 'rgb(55,0,0)'
    },
    {
      region: 'TUR',
      color: 'rgb(219,0,0)'
    },
    {
      region: 'JOR',
      color: 'rgb(169,0,0)'
    },
    {
      region: 'ATG',
      color: 'rgb(56,0,0)'
    },
    {
      region: 'OMN',
      color: 'rgb(184,0,0)'
    },
    {
      region: 'TTO',
      color: 'rgb(216,0,0)'
    },
    {
      region: 'BRB',
      color: 'rgb(64,0,0)'
    },
    {
      region: 'LBN',
      color: 'rgb(173,0,0)'
    },
    {
      region: 'LBY',
      color: 'rgb(173,0,0)'
    },
    {
      region: 'USA',
      color: 'rgb(235,0,0)'
    },
    {
      region: 'SAU',
      color: 'rgb(194,0,0)'
    },
    {
      region: 'BHR',
      color: 'rgb(64,0,0)'
    },
    {
      region: 'VUT',
      color: 'rgb(244,0,0)'
    },
    {
      region: 'BHS',
      color: 'rgb(62,0,0)'
    },
    {
      region: 'FJI',
      color: 'rgb(109,0,0)'
    },
    {
      region: 'FSM',
      color: 'rgb(178,0,0)'
    },
    {
      region: 'ARE',
      color: 'rgb(232,0,0)'
    },
    {
      region: 'KWT',
      color: 'rgb(170,0,0)'
    },
    {
      region: 'TUV',
      color: 'rgb(225,0,0)'
    },
    {
      region: 'KIR',
      color: 'rgb(170,0,0)'
    },
    {
      region: 'QAT',
      color: 'rgb(189,0,0)'
    },
    {
      region: 'MHL',
      color: 'rgb(177,0,0)'
    },
    {
      region: 'NIU',
      color: 'rgb(184,0,0)'
    },
    {
      region: 'TON',
      color: 'rgb(216,0,0)'
    },
    {
      region: 'WSM',
      color: 'rgb(192,0,0)'
    },
    {
      region: 'NRU',
      color: 'rgb(182,0,0)'
    },
    {
      region: 'PLW',
      color: 'rgb(185,0,0)'
    },
    {
      region: 'COK',
      color: 'rgb(87,0,0)'
    },
    {
      region: 'MCO',
      color: 'rgb(179,0,0)'
    },
    {
      region: 'SMR',
      color: 'rgb(192,0,0)'
    }
  ];
  var INADEQUATE = [
  {
    region: 'ZAF',
    color: 'rgb(22,0,0)'
  },
  {
    region: 'BRN',
    color: 'rgb(22,0,0)'
  },
  {
    region: 'AZE',
    color: 'rgb(24,0,0)'
  },
  {
    region: 'GHA',
    color: 'rgb(26,0,0)'
  },
  {
    region: 'KAZ',
    color: 'rgb(26,0,0)'
  },
  {
    region: 'KWT',
    color: 'rgb(26,0,0)'
  },
  {
    region: 'DZA',
    color: 'rgb(27,0,0)'
  },
  {
    region: 'MYS',
    color: 'rgb(27,0,0)'
  },
  {
    region: 'KIR',
    color: 'rgb(28,0,0)'
  },
  {
    region: 'MLI',
    color: 'rgb(29,0,0)'
  },
  {
    region: 'GAB',
    color: 'rgb(30,0,0)'
  },
  {
    region: 'WSM',
    color: 'rgb(31,0,0)'
  },
  {
    region: 'TKM',
    color: 'rgb(33,0,0)'
  },
  {
    region: 'CHL',
    color: 'rgb(33,0,0)'
  },
  {
    region: 'ARE',
    color: 'rgb(33,0,0)'
  },
  {
    region: 'MAR',
    color: 'rgb(35,0,0)'
  },
  {
    region: 'BRB',
    color: 'rgb(35,0,0)'
  },
  {
    region: 'MEX',
    color: 'rgb(36,0,0)'
  },
  {
    region: 'GMB',
    color: 'rgb(37,0,0)'
  },
  {
    region: 'FJI',
    color: 'rgb(39,0,0)'
  },
  {
    region: 'URY',
    color: 'rgb(39,0,0)'
  },
  {
    region: 'LBN',
    color: 'rgb(39,0,0)'
  },
  {
    region: 'MRT',
    color: 'rgb(41,0,0)'
  },
  {
    region: 'IRN',
    color: 'rgb(42,0,0)'
  },
  {
    region: 'MUS',
    color: 'rgb(43,0,0)'
  },
  {
    region: 'OMN',
    color: 'rgb(43,0,0)'
  },
  {
    region: 'UZB',
    color: 'rgb(43,0,0)'
  },
  {
    region: 'VUT',
    color: 'rgb(45,0,0)'
  },
  {
    region: 'MDV',
    color: 'rgb(47,0,0)'
  },
  {
    region: 'NGA',
    color: 'rgb(48,0,0)'
  },
  {
    region: 'KGZ',
    color: 'rgb(49,0,0)'
  },
  {
    region: 'BLZ',
    color: 'rgb(49,0,0)'
  },
  {
    region: 'STP',
    color: 'rgb(50,0,0)'
  },
  {
    region: 'CRI',
    color: 'rgb(51,0,0)'
  },
  {
    region: 'VCT',
    color: 'rgb(54,0,0)'
  },
  {
    region: 'BEN',
    color: 'rgb(55,0,0)'
  },
  {
    region: 'NPL',
    color: 'rgb(56,0,0)'
  },
  {
    region: 'ARM',
    color: 'rgb(57,0,0)'
  },
  {
    region: 'IDN',
    color: 'rgb(59,0,0)'
  },
  {
    region: 'NER',
    color: 'rgb(62,0,0)'
  },
  {
    region: 'TTO',
    color: 'rgb(63,0,0)'
  },
  {
    region: 'PER',
    color: 'rgb(64,0,0)'
  },
  {
    region: 'SUR',
    color: 'rgb(67,0,0)'
  },
  {
    region: 'THA',
    color: 'rgb(69,0,0)'
  },
  {
    region: 'GEO',
    color: 'rgb(69,0,0)'
  },
  {
    region: 'JAM',
    color: 'rgb(69,0,0)'
  },
  {
    region: 'COL',
    color: 'rgb(70,0,0)'
  },
  {
    region: 'CHN',
    color: 'rgb(70,0,0)'
  },
  {
    region: 'CMR',
    color: 'rgb(70,0,0)'
  },
  {
    region: 'PAN',
    color: 'rgb(73,0,0)'
  },
  {
    region: 'CPV',
    color: 'rgb(73,0,0)'
  },
  {
    region: 'SEN',
    color: 'rgb(73,0,0)'
  },
  {
    region: 'SLB',
    color: 'rgb(76,0,0)'
  },
  {
    region: 'LSO',
    color: 'rgb(76,0,0)'
  },
  {
    region: 'CIV',
    color: 'rgb(78,0,0)'
  },
  {
    region: 'GUY',
    color: 'rgb(78,0,0)'
  },
  {
    region: 'HND',
    color: 'rgb(79,0,0)'
  },
  {
    region: 'VNM',
    color: 'rgb(80,0,0)'
  },
  {
    region: 'PRY',
    color: 'rgb(81,0,0)'
  },
  {
    region: 'TGO',
    color: 'rgb(82,0,0)'
  },
  {
    region: 'ECU',
    color: 'rgb(86,0,0)'
  },
  {
    region: 'SLV',
    color: 'rgb(88,0,0)'
  },
  {
    region: 'PHL',
    color: 'rgb(90,0,0)'
  },
  {
    region: 'AGO',
    color: 'rgb(91,0,0)'
  },
  {
    region: 'DOM',
    color: 'rgb(92,0,0)'
  },
  {
    region: 'GTM',
    color: 'rgb(95,0,0)'
  },
  {
    region: 'GIN',
    color: 'rgb(100,0,0)'
  },
  {
    region: 'KHM',
    color: 'rgb(101,0,0)'
  },
  {
    region: 'MMR',
    color: 'rgb(103,0,0)'
  },
  {
    region: 'IND',
    color: 'rgb(103,0,0)'
  },
  {
    region: 'NIC',
    color: 'rgb(104,0,0)'
  },
  {
    region: 'DJI',
    color: 'rgb(107,0,0)'
  },
  {
    region: 'BFA',
    color: 'rgb(109,0,0)'
  },
  {
    region: 'BGD',
    color: 'rgb(113,0,0)'
  },
  {
    region: 'BOL',
    color: 'rgb(113,0,0)'
  },
  {
    region: 'MWI',
    color: 'rgb(119,0,0)'
  },
  {
    region: 'IRQ',
    color: 'rgb(123,0,0)'
  },
  {
    region: 'LAO',
    color: 'rgb(125,0,0)'
  },
  {
    region: 'LKA',
    color: 'rgb(127,0,0)'
  },
  {
    region: 'PAK',
    color: 'rgb(129,0,0)'
  },
  {
    region: 'SLE',
    color: 'rgb(129,0,0)'
  },
  {
    region: 'GNB',
    color: 'rgb(130,0,0)'
  },
  {
    region: 'MNG',
    color: 'rgb(136,0,0)'
  },
  {
    region: 'KEN',
    color: 'rgb(137,0,0)'
  },
  {
    region: 'UGA',
    color: 'rgb(140,0,0)'
  },
  {
    region: 'MOZ',
    color: 'rgb(141,0,0)'
  },
  {
    region: 'AFG',
    color: 'rgb(150,0,0)'
  },
  {
    region: 'TLS',
    color: 'rgb(151,0,0)'
  },
  {
    region: 'YEM',
    color: 'rgb(151,0,0)'
  },
  {
    region: 'BWA',
    color: 'rgb(156,0,0)'
  },
  {
    region: 'SWZ',
    color: 'rgb(160,0,0)'
  },
  {
    region: 'LBR',
    color: 'rgb(167,0,0)'
  },
  {
    region: 'TZA',
    color: 'rgb(168,0,0)'
  },
  {
    region: 'COG',
    color: 'rgb(170,0,0)'
  },
  {
    region: 'RWA',
    color: 'rgb(175,0,0)'
  },
  {
    region: 'ETH',
    color: 'rgb(180,0,0)'
  },
  {
    region: 'MDG',
    color: 'rgb(183,0,0)'
  },
  {
    region: 'ZWE',
    color: 'rgb(185,0,0)'
  },
  {
    region: 'TCD',
    color: 'rgb(185,0,0)'
  },
  {
    region: 'TJK',
    color: 'rgb(189,0,0)'
  },
  {
    region: 'CAF',
    color: 'rgb(234,0,0)'
  },
  {
    region: 'ZMB',
    color: 'rgb(234,0,0)'
  },
  {
    region: 'NAM',
    color: 'rgb(236,0,0)'
  },
  {
    region: 'PRK',
    color: 'rgb(242,0,0)'
  },
  {
    region: 'HTI',
    color: 'rgb(251,0,0)'
  },
  {
    region: 'ALB',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'AND',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'ARG',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'AUS',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'AUT',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'BMU',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'BRA',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'BGR',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'CAN',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'CUB',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'CYP',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'DNK',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'BLR',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'EGY',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'EST',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'FRO',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'FIN',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'FRA',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'DEU',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'BIH',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'GIB',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'GRC',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'GRL',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'VAT',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'HUN',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'HRV',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'ISL',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'IRL',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'ISR',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'ITA',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'JPN',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'JOR',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'KOR',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'LVA',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'LIE',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'LTU',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'MLT',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'MCO',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'MDA',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'NLD',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'MKD',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'NZL',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'NOR',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'CZE',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'POL',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'PRT',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'ROU',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'RUS',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'SRB',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'SPM',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'SMR',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'SAU',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'SVN',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'SVK',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'ESP',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'SWE',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'CHE',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'TUN',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'TUR',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'GBR',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'UKR',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'USA',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'VEN',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'BEL',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'LUX',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'SRB',
    color: 'rgb(21,0,0)'
  },
  {
    region: 'MNE',
    color: 'rgb(21,0,0)'
  }
  ];
  var UNDER = [
{
  region: 'ZAF',
  color: 'rgb(24,0,0)'
},
{
  region: 'BRN',
  color: 'rgb(24,0,0)'
},
{
  region: 'AZE',
  color: 'rgb(24,0,0)'
},
{
  region: 'GHA',
  color: 'rgb(24,0,0)'
},
{
  region: 'KAZ',
  color: 'rgb(24,0,0)'
},
{
  region: 'KWT',
  color: 'rgb(24,0,0)'
},
{
  region: 'DZA',
  color: 'rgb(24,0,0)'
},
{
  region: 'MYS',
  color: 'rgb(24,0,0)'
},
{
  region: 'KIR',
  color: 'rgb(24,0,0)'
},
{
  region: 'MLI',
  color: 'rgb(24,0,0)'
},
{
  region: 'GAB',
  color: 'rgb(24,0,0)'
},
{
  region: 'WSM',
  color: 'rgb(24,0,0)'
},
{
  region: 'TKM',
  color: 'rgb(24,0,0)'
},
{
  region: 'CHL',
  color: 'rgb(24,0,0)'
},
{
  region: 'ARE',
  color: 'rgb(24,0,0)'
},
{
  region: 'MAR',
  color: 'rgb(24,0,0)'
},
{
  region: 'BRB',
  color: 'rgb(24,0,0)'
},
{
  region: 'MEX',
  color: 'rgb(24,0,0)'
},
{
  region: 'GMB',
  color: 'rgb(25,0,0)'
},
{
  region: 'FJI',
  color: 'rgb(24,0,0)'
},
{
  region: 'URY',
  color: 'rgb(24,0,0)'
},
{
  region: 'LBN',
  color: 'rgb(24,0,0)'
},
{
  region: 'MRT',
  color: 'rgb(27,0,0)'
},
{
  region: 'IRN',
  color: 'rgb(24,0,0)'
},
{
  region: 'MUS',
  color: 'rgb(24,0,0)'
},
{
  region: 'OMN',
  color: 'rgb(24,0,0)'
},
{
  region: 'UZB',
  color: 'rgb(24,0,0)'
},
{
  region: 'VUT',
  color: 'rgb(30,0,0)'
},
{
  region: 'MDV',
  color: 'rgb(28,0,0)'
},
{
  region: 'NGA',
  color: 'rgb(32,0,0)'
},
{
  region: 'KGZ',
  color: 'rgb(28,0,0)'
},
{
  region: 'BLZ',
  color: 'rgb(30,0,0)'
},
{
  region: 'STP',
  color: 'rgb(30,0,0)'
},
{
  region: 'CRI',
  color: 'rgb(26,0,0)'
},
{
  region: 'VCT',
  color: 'rgb(30,0,0)'
},
{
  region: 'BEN',
  color: 'rgb(38,0,0)'
},
{
  region: 'NPL',
  color: 'rgb(37,0,0)'
},
{
  region: 'ARM',
  color: 'rgb(30,0,0)'
},
{
  region: 'IDN',
  color: 'rgb(36,0,0)'
},
{
  region: 'NER',
  color: 'rgb(46,0,0)'
},
{
  region: 'TTO',
  color: 'rgb(38,0,0)'
},
{
  region: 'PER',
  color: 'rgb(38,0,0)'
},
{
  region: 'SUR',
  color: 'rgb(39,0,0)'
},
{
  region: 'THA',
  color: 'rgb(38,0,0)'
},
{
  region: 'GEO',
  color: 'rgb(38,0,0)'
},
{
  region: 'JAM',
  color: 'rgb(41,0,0)'
},
{
  region: 'COL',
  color: 'rgb(45,0,0)'
},
{
  region: 'CHN',
  color: 'rgb(47,0,0)'
},
{
  region: 'CMR',
  color: 'rgb(49,0,0)'
},
{
  region: 'PAN',
  color: 'rgb(48,0,0)'
},
{
  region: 'CPV',
  color: 'rgb(48,0,0)'
},
{
  region: 'SEN',
  color: 'rgb(51,0,0)'
},
{
  region: 'SLB',
  color: 'rgb(52,0,0)'
},
{
  region: 'LSO',
  color: 'rgb(53,0,0)'
},
{
  region: 'CIV',
  color: 'rgb(64,0,0)'
},
{
  region: 'GUY',
  color: 'rgb(53,0,0)'
},
{
  region: 'HND',
  color: 'rgb(59,0,0)'
},
{
  region: 'VNM',
  color: 'rgb(56,0,0)'
},
{
  region: 'PRY',
  color: 'rgb(53,0,0)'
},
{
  region: 'TGO',
  color: 'rgb(62,0,0)'
},
{
  region: 'ECU',
  color: 'rgb(53,0,0)'
},
{
  region: 'SLV',
  color: 'rgb(60,0,0)'
},
{
  region: 'PHL',
  color: 'rgb(66,0,0)'
},
{
  region: 'AGO',
  color: 'rgb(73,0,0)'
},
{
  region: 'DOM',
  color: 'rgb(60,0,0)'
},
{
  region: 'GTM',
  color: 'rgb(75,0,0)'
},
{
  region: 'GIN',
  color: 'rgb(80,0,0)'
},
{
  region: 'KHM',
  color: 'rgb(72,0,0)'
},
{
  region: 'MMR',
  color: 'rgb(71,0,0)'
},
{
  region: 'IND',
  color: 'rgb(73,0,0)'
},
{
  region: 'NIC',
  color: 'rgb(82,0,0)'
},
{
  region: 'DJI',
  color: 'rgb(83,0,0)'
},
{
  region: 'BFA',
  color: 'rgb(99,0,0)'
},
{
  region: 'BGD',
  color: 'rgb(81,0,0)'
},
{
  region: 'BOL',
  color: 'rgb(79,0,0)'
},
{
  region: 'MWI',
  color: 'rgb(100,0,0)'
},
{
  region: 'IRQ',
  color: 'rgb(111,0,0)'
},
{
  region: 'LAO',
  color: 'rgb(90,0,0)'
},
{
  region: 'LKA',
  color: 'rgb(110,0,0)'
},
{
  region: 'PAK',
  color: 'rgb(105,0,0)'
},
{
  region: 'SLE',
  color: 'rgb(109,0,0)'
},
{
  region: 'GNB',
  color: 'rgb(105,0,0)'
},
{
  region: 'MNG',
  color: 'rgb(103,0,0)'
},
{
  region: 'KEN',
  color: 'rgb(103,0,0)'
},
{
  region: 'UGA',
  color: 'rgb(121,0,0)'
},
{
  region: 'MOZ',
  color: 'rgb(126,0,0)'
},
{
  region: 'AFG',
  color: 'rgb(125,0,0)'
},
{
  region: 'TLS',
  color: 'rgb(134,0,0)'
},
{
  region: 'YEM',
  color: 'rgb(124,0,0)'
},
{
  region: 'BWA',
  color: 'rgb(119,0,0)'
},
{
  region: 'SWZ',
  color: 'rgb(127,0,0)'
},
{
  region: 'LBR',
  color: 'rgb(156,0,0)'
},
{
  region: 'TZA',
  color: 'rgb(154,0,0)'
},
{
  region: 'COG',
  color: 'rgb(139,0,0)'
},
{
  region: 'RWA',
  color: 'rgb(157,0,0)'
},
{
  region: 'ETH',
  color: 'rgb(159,0,0)'
},
{
  region: 'MDG',
  color: 'rgb(157,0,0)'
},
{
  region: 'ZWE',
  color: 'rgb(163,0,0)'
},
{
  region: 'TCD',
  color: 'rgb(173,0,0)'
},
{
  region: 'TJK',
  color: 'rgb(163,0,0)'
},
{
  region: 'CAF',
  color: 'rgb(214,0,0)'
},
{
  region: 'ZMB',
  color: 'rgb(232,0,0)'
},
{
  region: 'NAM',
  color: 'rgb(203,0,0)'
},
{
  region: 'PRK',
  color: 'rgb(201,0,0)'
},
{
  region: 'HTI',
  color: 'rgb(251,0,0)'
},
{
  region: 'ALB',
  color: 'rgb(24,0,0)'
},
{
  region: 'AND',
  color: 'rgb(24,0,0)'
},
{
  region: 'ARG',
  color: 'rgb(24,0,0)'
},
{
  region: 'AUS',
  color: 'rgb(24,0,0)'
},
{
  region: 'AUT',
  color: 'rgb(24,0,0)'
},
{
  region: 'BMU',
  color: 'rgb(24,0,0)'
},
{
  region: 'BRA',
  color: 'rgb(24,0,0)'
},
{
  region: 'BGR',
  color: 'rgb(24,0,0)'
},
{
  region: 'CAN',
  color: 'rgb(24,0,0)'
},
{
  region: 'CUB',
  color: 'rgb(24,0,0)'
},
{
  region: 'CYP',
  color: 'rgb(24,0,0)'
},
{
  region: 'DNK',
  color: 'rgb(24,0,0)'
},
{
  region: 'BLR',
  color: 'rgb(24,0,0)'
},
{
  region: 'EGY',
  color: 'rgb(24,0,0)'
},
{
  region: 'EST',
  color: 'rgb(24,0,0)'
},
{
  region: 'FRO',
  color: 'rgb(24,0,0)'
},
{
  region: 'FIN',
  color: 'rgb(24,0,0)'
},
{
  region: 'FRA',
  color: 'rgb(24,0,0)'
},
{
  region: 'DEU',
  color: 'rgb(24,0,0)'
},
{
  region: 'BIH',
  color: 'rgb(24,0,0)'
},
{
  region: 'GIB',
  color: 'rgb(24,0,0)'
},
{
  region: 'GRC',
  color: 'rgb(24,0,0)'
},
{
  region: 'GRL',
  color: 'rgb(24,0,0)'
},
{
  region: 'VAT',
  color: 'rgb(24,0,0)'
},
{
  region: 'HUN',
  color: 'rgb(24,0,0)'
},
{
  region: 'HRV',
  color: 'rgb(24,0,0)'
},
{
  region: 'ISL',
  color: 'rgb(24,0,0)'
},
{
  region: 'IRL',
  color: 'rgb(24,0,0)'
},
{
  region: 'ISR',
  color: 'rgb(24,0,0)'
},
{
  region: 'ITA',
  color: 'rgb(24,0,0)'
},
{
  region: 'JPN',
  color: 'rgb(24,0,0)'
},
{
  region: 'JOR',
  color: 'rgb(24,0,0)'
},
{
  region: 'KOR',
  color: 'rgb(24,0,0)'
},
{
  region: 'LVA',
  color: 'rgb(24,0,0)'
},
{
  region: 'LIE',
  color: 'rgb(24,0,0)'
},
{
  region: 'LTU',
  color: 'rgb(24,0,0)'
},
{
  region: 'MLT',
  color: 'rgb(24,0,0)'
},
{
  region: 'MCO',
  color: 'rgb(24,0,0)'
},
{
  region: 'MDA',
  color: 'rgb(24,0,0)'
},
{
  region: 'NLD',
  color: 'rgb(24,0,0)'
},
{
  region: 'MKD',
  color: 'rgb(24,0,0)'
},
{
  region: 'NZL',
  color: 'rgb(24,0,0)'
},
{
  region: 'NOR',
  color: 'rgb(24,0,0)'
},
{
  region: 'CZE',
  color: 'rgb(24,0,0)'
},
{
  region: 'POL',
  color: 'rgb(24,0,0)'
},
{
  region: 'PRT',
  color: 'rgb(24,0,0)'
},
{
  region: 'ROU',
  color: 'rgb(24,0,0)'
},
{
  region: 'RUS',
  color: 'rgb(24,0,0)'
},
{
  region: 'SRB',
  color: 'rgb(24,0,0)'
},
{
  region: 'SPM',
  color: 'rgb(24,0,0)'
},
{
  region: 'SMR',
  color: 'rgb(24,0,0)'
},
{
  region: 'SAU',
  color: 'rgb(24,0,0)'
},
{
  region: 'SVN',
  color: 'rgb(24,0,0)'
},
{
  region: 'SVK',
  color: 'rgb(24,0,0)'
},
{
  region: 'ESP',
  color: 'rgb(24,0,0)'
},
{
  region: 'SWE',
  color: 'rgb(24,0,0)'
},
{
  region: 'CHE',
  color: 'rgb(24,0,0)'
},
{
  region: 'TUN',
  color: 'rgb(24,0,0)'
},
{
  region: 'TUR',
  color: 'rgb(24,0,0)'
},
{
  region: 'GBR',
  color: 'rgb(24,0,0)'
},
{
  region: 'UKR',
  color: 'rgb(24,0,0)'
},
{
  region: 'USA',
  color: 'rgb(24,0,0)'
},
{
  region: 'VEN',
  color: 'rgb(24,0,0)'
},
{
  region: 'BEL',
  color: 'rgb(24,0,0)'
},
{
  region: 'LUX',
  color: 'rgb(24,0,0)'
},
{
  region: 'SRB',
  color: 'rgb(24,0,0)'
},
{
  region: 'MNE',
  color: 'rgb(24,0,0)'
}
  ];
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
    },
    under: {
      regionsPopup: false,
      markersPopup: false,
      regions: UNDER,
      markers: []
    },
    inadequate: {
      regionsPopup: false,
      markersPopup: false,
      regions: INADEQUATE,
      markers: []
    },
    overweight: {
      regionsPopup: false,
      markersPopup: false,
      regions: OVERWEIGHT,
      markers: []
    },
    obesity: {
      regionsPopup: false,
      markersPopup: false,
      regions: OBESITY,
      markers: []
    }
  };
  var L = window.L;
  var thr0w = window.thr0w;
  var ds = window.ds;
  var parameters = parseQueryString();
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    var active = true;
    var frameEl = document.getElementById('my_frame');
    var contentEl = document.getElementById('interact_content');
    var base = window.location.protocol + '//' +
      window.location.hostname;
    var captureSingleLeftEl = document.getElementById('capture__single__left');
    var captureDoubleLeftEl = document.getElementById('capture__double__left');
    var captureDoubleRightEl = document.getElementById('capture__double__right');
    var captureQuadLeftEl = document.getElementById('capture__quad__left');
    var captureQuadMiddleLeftEl = document.getElementById('capture__quad__middle_left');
    var captureQuadMiddleRightEl = document.getElementById('capture__quad__middle_right');
    var captureQuadRightEl = document.getElementById('capture__quad__right');
    var captureCover = false;
    var captureCoverEl = document.getElementById('capture_cover');
    var captureEl = document.getElementById('capture');
    var captureSingleEl = document.getElementById('capture__single');
    var captureDoubleEl = document.getElementById('capture__double');
    var captureQuadEl = document.getElementById('capture__quad');
    var captureControlsEmailEl = document.getElementById('capture__controls__email');
    var captureSync;
    var size = parseInt(parameters.size);
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
      }
      function handleDsLogin() {
        var dsToken = ds.getToken();
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
        var weightControlsVisible = parameters.weightControlsVisible ?
          parameters.weightControlsVisible : 'none';
        var regions = [];
        var markers = [];
        var video = false;
        var videoSrc =
          '/upload/larkintuckerllc-isfs-maps/ifas_research.mp4';
        var grid;
        var drawing = false;
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
        var baseSize;
        var windowX;
        var windowYBase;
        var controlChannel;
        var tileLayer;
        var channel = thr0w.getChannel();
        var videoCoverEl = document.getElementById('video_cover');
        var videoContainerEl = document.getElementById('video_container');
        var videoElementEl = document.getElementById('video_element');
        var videoStopEl = document.getElementById('video_stop');
        var videoObj;
        var singleEl = document.getElementById('single');
        var doubleEl = document.getElementById('double');
        var quadEl = document.getElementById('quad');
        var fullEl = document.getElementById('full');
        var satelliteEl = document.getElementById('satellite');
        var streetEl = document.getElementById('street');
        var nightEl = document.getElementById('night');
        var whiteEl = document.getElementById('white');
        var blackEl = document.getElementById('black');
        var cameraEl = document.getElementById('camera');
        var weightControlsEl = document.getElementById('weight_controls');
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
            drawing = true;
            fullEl.style.display = 'block';
            baseSize = 'single';
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
            drawing = true;
            videoElementEl.setAttribute('width', 1600);
            videoElementEl.setAttribute('height', 900);
            videoContainerEl.style.width = '1600px';
            videoContainerEl.style.height = '900px';
            singleEl.style.display = 'block';
            fullEl.style.display = 'block';
            controlChannel = parseInt(parameters.control);
            baseSize = 'double_' + controlChannel;
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
          case SIZE_QUAD:
            drawing = true;
            videoElementEl.setAttribute('width', 1600);
            videoElementEl.setAttribute('height', 900);
            videoContainerEl.style.width = '1600px';
            videoContainerEl.style.height = '900px';
            singleEl.style.display = 'block';
            doubleEl.style.display = 'block';
            fullEl.style.display = 'block';
            controlChannel = 6;
            baseSize = 'quad';
            windowX = 180;
            windowYBase = 0;
            matrix = [
              [6, 7, 8, 9]
            ];
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
            quadEl.style.display = 'block';
            baseSize = 'full';
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
        if (channel === controlChannel) {
          weightControlsEl.style.display = weightControlsVisible;
        }
        grid = new thr0w.FlexGrid(
          frameEl,
          contentEl,
          matrix,
          rows
        );
        if (drawing) {
          thr0w.draw.load(grid);
        }
        wm = new thr0w.windows.WindowManager(
          'wm',
          grid
        );
        captureSync = new thr0w.Sync(
          grid,
          baseSize + '_capture',
          captureMessage,
          captureReceive
        );
        chartSync = new thr0w.Sync(
          grid,
          baseSize + '_chart',
          chartMessage,
          chartReceive
        );
        tilesSync = new thr0w.Sync(
          grid,
          baseSize + '_tiles',
          tilesMessage,
          tilesReceive
        );
        markerSync = new thr0w.Sync(
          grid,
          baseSize + '_marker',
          markerMessage,
          markerReceive
        );
        regionSync = new thr0w.Sync(
          grid,
          baseSize + '_region',
          regionMessage,
          regionReceive
        );
        videoSync = new thr0w.Sync(
          grid,
          baseSize + '_video',
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
          if (size !== SIZE_FULL) {
            cameraEl.style.display = 'block';
          }
        }
        frameEl.addEventListener('touchstart', keepActive, true);
        singleEl.addEventListener('click', handleSingleClick);
        doubleEl.addEventListener('click', handleDoubleClick);
        quadEl.addEventListener('click', handleQuadClick);
        document.getElementById('full')
          .addEventListener('click', handleFullClick);
        satelliteEl.addEventListener('click', handleSatelliteClick);
        streetEl.addEventListener('click', handleStreetClick);
        nightEl.addEventListener('click', handleNightClick);
        whiteEl.addEventListener('click', handleWhiteClick);
        blackEl.addEventListener('click', handleBlackClick);
        document.getElementById('none')
          .addEventListener('click', handleNoneClick);
        document.getElementById('fisheries')
          .addEventListener('click', handleFisheriesClick);
        document.getElementById('disease')
          .addEventListener('click', handleDiseaseClick);
        document.getElementById('weight')
          .addEventListener('click', handleWeightClick);
        document.getElementById('weight_controls__under')
          .addEventListener('click', handleWeightUnderClick);
        document.getElementById('weight_controls__inadequate')
          .addEventListener('click', handleWeightInadequateClick);
        document.getElementById('weight_controls__overweight')
          .addEventListener('click', handleWeightOverweightClick);
        document.getElementById('weight_controls__obesity')
          .addEventListener('click', handleWeightObesityClick);
        document.getElementById('video')
          .addEventListener('click', handleVideoClick);
        window.handleFisheriesVideoClick = handleFisheriesVideoClick; // ALLOW CALLING FROM IFRAME
        videoStopEl.addEventListener('click', handleVideoStopClick);
        videoObj = new thr0w.video.Video(grid, videoElementEl);
        videoObj.addEventListener('ended', handleVideoStopClick);
        cameraEl.addEventListener('click', handleCameraClick);
        document.getElementById('capture__controls__send')
          .addEventListener('click', handleCaptureControlSend);
        document.getElementById('capture__controls__cancel')
          .addEventListener('click', handleCaptureControlCancel);
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
        function captureMessage() {
          return {
            captureCover: captureCover
          }
        }
        function captureReceive(data) {
          if (data.captureCover) {
            captureCoverEl.style.display = 'block';
          } else {
            captureCoverEl.style.display = 'none';
          }
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
            video: video,
            videoSrc: videoSrc
          };
        }
        function videoReceive(data) {
          video = data.video;
          videoSrc = data.videoSrc;
          updateVideo();
        }
        function updateVideo() {
          if (!video) {
            videoContainerEl.style.display = 'none';
            videoCoverEl.style.display = 'none';
          } else {
            videoElementEl.src = videoSrc;
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
            base  + '/' + APP_USER  + '-' + APP_REPO,
            '/dist/interact/',
            '?size=' + SIZE_SINGLE,
            '&initialCenterLat=' + map.getCenterLat(),
            '&initialCenterLng=' + map.getCenterLng(),
            '&initialZoomLevel=' + map.getZoomLevel(),
            '&tiles=' + tiles,
            '&weightControlsVisible=' + weightControlsVisible
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
            case SIZE_QUAD:
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
            base  + '/' + APP_USER  + '-' + APP_REPO,
            '/dist/interact/',
            '?size=' + SIZE_DOUBLE + '&control=6',
            '&initialCenterLat=' + map.getCenterLat(),
            '&initialCenterLng=' + map.getCenterLng(),
            '&initialZoomLevel=' + map.getZoomLevel(),
            '&tiles=' + tiles,
            '&weightControlsVisible=' + weightControlsVisible
          ].join('');
          if (chart) {
            url += '&chart=' + chart;
          }
          url += initialMarkerPoppedParameter();
          url += initialRegionPoppedParameter();
          thr0w.thr0wChannel([16, 17], {action: 'update', url: url});
          url = [
            base  + '/' + APP_USER  + '-' + APP_REPO,
            '/dist/interact/',
            '?size=' + SIZE_DOUBLE + '&control=8',
            '&initialCenterLat=' + map.getCenterLat(),
            '&initialCenterLng=' + map.getCenterLng(),
            '&initialZoomLevel=' + map.getZoomLevel(),
            '&tiles=' + tiles,
            '&weightControlsVisible=' + weightControlsVisible
          ].join('');
          if (chart) {
            url += '&chart=' + chart;
          }
          url += initialMarkerPoppedParameter();
          url += initialRegionPoppedParameter();
          thr0w.thr0wChannel([18, 19], {action: 'update', url: url});
        }
        function handleQuadClick() {
          var url = [
            base  + '/' + APP_USER  + '-' + APP_REPO,
            '/dist/interact/',
            '?size=' + SIZE_QUAD,
            '&initialCenterLat=' + map.getCenterLat(),
            '&initialCenterLng=' + map.getCenterLng(),
            '&initialZoomLevel=' + map.getZoomLevel(),
            '&tiles=' + tiles,
            '&weightControlsVisible=' + weightControlsVisible
          ].join('');
          if (chart) {
            url += '&chart=' + chart;
          }
          url += initialMarkerPoppedParameter();
          url += initialRegionPoppedParameter();
          thr0w.thr0wChannel([16, 17, 18, 19], {action: 'update', url: url});
        }
        function handleFullClick() {
          var url = [
            base  + '/' + APP_USER  + '-' + APP_REPO,
            '/dist/interact/',
            '?size=' + SIZE_FULL,
            '&initialCenterLat=' + map.getCenterLat(),
            '&initialCenterLng=' + map.getCenterLng(),
            '&initialZoomLevel=' + map.getZoomLevel(),
            '&tiles=' + tiles,
            '&weightControlsVisible=' + weightControlsVisible
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
        function handleNightClick() {
          tiles = 'night';
          updateTiles();
          tilesSync.update();
          tilesSync.idle();
        }
        function handleWhiteClick() {
          tiles = 'white';
          updateTiles();
          tilesSync.update();
          tilesSync.idle();
        }
        function handleBlackClick() {
          tiles = 'black';
          updateTiles();
          tilesSync.update();
          tilesSync.idle();
        }
        function removeControlCovers() {
          document.getElementById('fisheries')
            .getElementsByClassName('control__cover')[0].style.display = 'none';
          document.getElementById('disease')
            .getElementsByClassName('control__cover')[0].style.display = 'none';
          document.getElementById('weight_controls__inadequate')
            .getElementsByClassName('control__cover')[0].style.display = 'none';
          document.getElementById('weight_controls__under')
            .getElementsByClassName('control__cover')[0].style.display = 'none';
          document.getElementById('weight_controls__overweight')
            .getElementsByClassName('control__cover')[0].style.display = 'none';
          document.getElementById('weight_controls__obesity')
            .getElementsByClassName('control__cover')[0].style.display = 'none';
        }
        function handleNoneClick() {
          removeControlCovers();
          wm.closeAllWindows();
          weightControlsVisible = 'none';
          weightControlsEl.style.display = 'none';
          map.moveTo(0, 0, 0, MIN_ZOOM[size]);
          chart = null;
          updateChart();
          chartSync.update();
          chartSync.idle();
        }
        function handleFisheriesClick() {
          removeControlCovers();
          document.getElementById('fisheries')
            .getElementsByClassName('control__cover')[0].style.display = 'block';
          wm.closeAllWindows();
          weightControlsVisible = 'none';
          weightControlsEl.style.display = 'none';
          map.moveTo(0, 0, 0, MIN_ZOOM[size]);
          chart = 'fisheries';
          updateChart();
          chartSync.update();
          chartSync.idle();
          wm.openWindow('fisheries_overview', windowX,
            windowYBase + 1920 - 500 - 100,
            500,
            500, 'fisheries_overview/'
          );
        }
        function handleDiseaseClick() {
          removeControlCovers();
          document.getElementById('disease')
            .getElementsByClassName('control__cover')[0].style.display = 'block';
          wm.closeAllWindows();
          weightControlsVisible = 'none';
          weightControlsEl.style.display = 'none';
          map.moveTo(0, 0, 0, MIN_ZOOM[size]);
          chart = 'disease';
          updateChart();
          chartSync.update();
          chartSync.idle();
        }
        function handleWeightClick() {
          weightControlsVisible = 'block';
          weightControlsEl.style.display = 'block';
        }
        function handleWeightUnderClick() {
          removeControlCovers();
          document.getElementById('weight_controls__under')
            .getElementsByClassName('control__cover')[0].style.display = 'block';
          wm.closeAllWindows();
          map.moveTo(0, 0, 0, MIN_ZOOM[size]);
          chart = 'under';
          updateChart();
          chartSync.update();
          chartSync.idle();
        }
        function handleWeightInadequateClick() {
          removeControlCovers();
          document.getElementById('weight_controls__inadequate')
            .getElementsByClassName('control__cover')[0].style.display = 'block';
          wm.closeAllWindows();
          map.moveTo(0, 0, 0, MIN_ZOOM[size]);
          chart = 'inadequate';
          updateChart();
          chartSync.update();
          chartSync.idle();
        }
        function handleWeightOverweightClick() {
          removeControlCovers();
          document.getElementById('weight_controls__overweight')
            .getElementsByClassName('control__cover')[0].style.display = 'block';
          wm.closeAllWindows();
          map.moveTo(0, 0, 0, MIN_ZOOM[size]);
          chart = 'overweight';
          updateChart();
          chartSync.update();
          chartSync.idle();
        }
        function handleWeightObesityClick() {
          removeControlCovers();
          document.getElementById('weight_controls__obesity')
            .getElementsByClassName('control__cover')[0].style.display = 'block';
          wm.closeAllWindows();
          map.moveTo(0, 0, 0, MIN_ZOOM[size]);
          chart = 'obesity';
          updateChart();
          chartSync.update();
          chartSync.idle();
        }
        function handleVideoClick() {
          videoSrc =
            '/upload/larkintuckerllc-isfs-maps/ifas_research.mp4';
          video = true;
          updateVideo();
          videoSync.update();
          videoSync.idle();
          videoObj.play();
        }
        function handleFisheriesVideoClick() {
          videoSrc =
            '/upload/larkintuckerllc-isfs-maps/fisheries.mp4';
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
        function handleCameraClick() {

          switch (size) {
            case SIZE_SINGLE:
              thr0w.thr0w([channel + 10], {
                action: 'capture',
                target: channel
              });
              captureSingleEl.style.display = 'block';
              break;
            case SIZE_DOUBLE:
              thr0w.thr0w([channel + 10, channel + 11], {
                action: 'capture',
                target: channel
              });
              captureDoubleEl.style.display = 'block';
              break;
            case SIZE_QUAD:
              thr0w.thr0w([channel + 10, channel + 11, channel + 12, channel + 13], {
                action: 'capture',
                target: channel
              });
              captureQuadEl.style.display = 'block';
              break;
            default:
          }
        }
        function handleCaptureControlCancel() {
          captureEl.style.display = 'none';
          captureSingleEl.style.display = 'none';
          captureDoubleEl.style.display = 'none';
          captureQuadEl.style.display = 'none';
          captureSingleLeftEl.style.backgroundImage = 'none';
          captureDoubleLeftEl.style.backgroundImage = 'none';
          captureDoubleRightEl.style.backgroundImage = 'none';
          captureQuadLeftEl.style.backgroundImage = 'none';
          captureQuadMiddleLeftEl.style.backgroundImage = 'none';
          captureQuadMiddleRightEl.style.backgroundImage = 'none';
          captureQuadRightEl.style.backgroundImage = 'none';
          captureCoverEl.style.display = 'none';
          captureCover = false;
          captureSync.update();
          captureSync.idle();
        }
        function handleCaptureControlSend() {
          var leftImage = null;
          var middleLeftImage = null;
          var middleRightImage = null;
          var rightImage = null;
          var email = captureControlsEmailEl.value;
          if (email === '') {
            return;
          }
          switch (size) {
            case SIZE_SINGLE:
              leftImage = captureSingleLeftEl.style.backgroundImage;
              leftImage = leftImage !== 'none' ? leftImage
                .substring(28, leftImage.length - 2) : null;
              break;
            case SIZE_DOUBLE:
              leftImage = captureDoubleLeftEl.style.backgroundImage;
              leftImage = leftImage !== 'none' ? leftImage
                .substring(28, leftImage.length - 2) : null;
              rightImage = captureDoubleRightEl.style.backgroundImage;
              rightImage = rightImage !== 'none' ? rightImage
                .substring(28, rightImage.length - 2) : null;
              break;
            case SIZE_QUAD:
              leftImage = captureQuadLeftEl.style.backgroundImage;
              leftImage = leftImage !== 'none' ? leftImage
                .substring(28, leftImage.length - 2) : null;
              middleLeftImage = captureQuadMiddleLeftEl.style.backgroundImage;
              middleLeftImage = middleLeftImage !== 'none' ? middleLeftImage
                .substring(28, middleLeftImage.length - 2) : null;
              middleRightImage = captureQuadMiddleRightEl.style.backgroundImage;
              middleRightImage = middleRightImage !== 'none' ? middleRightImage
                .substring(28, middleRightImage.length - 2) : null;
              rightImage = captureQuadRightEl.style.backgroundImage;
              rightImage = rightImage !== 'none' ? rightImage
                .substring(28, rightImage.length - 2) : null;
              break;
            default:
          }
          var xmlhttp = new XMLHttpRequest();
          var message = {
            html: '<p>Attached are the screen captures.</p>',
            text: 'Attached are the screen captures.',
            subject: 'Screen Captures - ISFS Wall Whiteboard',
            to: [{
              email: email,
              name: 'ISFS Wall User',
              type: 'to'
            }]
          };
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
            handleCaptureControlCancel();
          }
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
            satelliteEl.style.display = 'none';
            whiteEl.style.display = 'none';
            nightEl.style.display = 'block';
            document.querySelector('.leaflet-container')
              .style.backgroundColor = 'rgb(255,255,255)';
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
            nightEl.style.display = 'none';
            whiteEl.style.display = 'none';
            blackEl.style.display = 'none';
            streetEl.style.display = 'block';
            document.querySelector('.leaflet-container')
              .style.backgroundColor = 'rgb(0,0,0)';
            // jscs:disable
            tileLayer =  L.tileLayer(
              'http://192.168.1.2:8080/satellite/{z}/{y}/{x}',
              {
                 attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
              }
            ).addTo(leafletMap);
            // jscs:enable
          }
          if (tiles === 'night') {
            nightEl.style.display = 'none';
            streetEl.style.display = 'none';
            satelliteEl.style.display = 'none';
            blackEl.style.display = 'none';
            whiteEl.style.display = 'block';
            document.querySelector('.leaflet-container')
              .style.backgroundColor = 'rgb(0,0,0)';
            // jscs:disable
            tileLayer = L.tileLayer(
              'http://192.168.1.2:8082/night/{z}/{x}/{y}.png', {
              maxZoom: 19,
              attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
            }).addTo(leafletMap);
            // jscs:enable
          }
          if (tiles === 'white') {
            nightEl.style.display = 'none';
            streetEl.style.display = 'none';
            whiteEl.style.display = 'none';
            satelliteEl.style.display = 'none';
            blackEl.style.display = 'block';
            document.querySelector('.leaflet-container')
              .style.backgroundColor = 'rgb(255,255,255)';
            tileLayer = null
          }
          if (tiles === 'black') {
            nightEl.style.display = 'none';
            streetEl.style.display = 'none';
            whiteEl.style.display = 'none';
            blackEl.style.display = 'none';
            satelliteEl.style.display = 'block';
            document.querySelector('.leaflet-container')
              .style.backgroundColor = 'rgb(0,0,0)';
            tileLayer = null
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
          xmlhttp.open('GET',
            '/upload/' + APP_USER + '-' + APP_REPO + '/world.geo.json/countries/' +
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
    }
    function showCapture() {
      captureCover = true;
      captureCoverEl.style.display = 'block';
      captureEl.style.display = 'block';
      captureSync.update();
      captureSync.idle();
    }
    function messageCallback(data) {
      if (data.message.thr0w && data.message.thr0w.type === 'capture') {
        switch (size) {
          case SIZE_SINGLE:
            captureSingleLeftEl.style.backgroundImage = 'url(' +
              data.message.thr0w.dataUrl + ')';
            showCapture();
            break;
          case SIZE_DOUBLE:
            switch(data.source) {
              case 16:
                captureDoubleLeftEl.style.backgroundImage = 'url(' +
                  data.message.thr0w.dataUrl + ')';
                showCapture();
                break;
              case 17:
                captureDoubleRightEl.style.backgroundImage = 'url(' +
                  data.message.thr0w.dataUrl + ')';
                break;
              case 18:
                captureDoubleLeftEl.style.backgroundImage = 'url(' +
                  data.message.thr0w.dataUrl + ')';
                showCapture();
                break;
              case 19:
                captureDoubleRightEl.style.backgroundImage = 'url(' +
                  data.message.thr0w.dataUrl + ')';
                break;
              default:
            }
            break;
          case SIZE_QUAD:
            switch(data.source) {
              case 16:
                captureQuadLeftEl.style.backgroundImage = 'url(' +
                  data.message.thr0w.dataUrl + ')';
                showCapture();
                break;
              case 17:
                captureQuadMiddleLeftEl.style.backgroundImage = 'url(' +
                  data.message.thr0w.dataUrl + ')';
                break;
              case 18:
                captureQuadMiddleRightEl.style.backgroundImage = 'url(' +
                  data.message.thr0w.dataUrl + ')';
                break;
              case 19:
                captureQuadRightEl.style.backgroundImage = 'url(' +
                  data.message.thr0w.dataUrl + ')';
                break;
            }
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
