(function() {
  'use strict';
  var FISHERIES = {
    'spiny_lobster': {
      title: 'Spiny Lobster',
      ecology: 3.25,
      economics: 3.56,
      community: 4.02
    },
    'spot_prawn': {
      title: 'Spot Prawn',
      ecology: 4.38,
      economics: 4.04,
      community: 4.07
    },
    'dungeness_crab': {
      title: 'Dungeness Crab',
      ecology: 4.13,
      economics: 3.49,
      community: 3.98
    },
    'market_squid': {
      title: 'Market Squid',
      ecology: 4.13,
      economics: 3.76,
      community: 4.07
    },
    'sablefish': {
      title: 'Sablefish',
      ecology: 4.00,
      economics: 3.90,
      community: 3.60
    },
    'sea_urchin': {
      title: 'Sea Urchin',
      ecology: 3.75,
      economics: 3.96,
      community: 3.88
    },
    'rock_crab': {
      title: 'Rock Crab',
      ecology: 3.75,
      economics: 3.69,
      community: 4.00
    },
    'sea_cucumber': {
      title: 'Sea Cucumber',
      ecology: 3.50,
      economics: 3.57,
      community: 3.93
    },
    'nearshore_finfish': {
      title: 'Nearshore Finfish',
      ecology: 2.88,
      economics: 3.92,
      community: 3.88
    },
    'chinook_salmon': {
      title: 'Chinook Salmon',
      ecology: 2.88,
      economics: 3.33,
      community: 3.88
    },
    'gambia_artisanal_sole_and_catfish': {
      title: 'GM Sole and Catfish',
      ecology: 3.5,
      economics: 3.35,
      community: 3.38
    },
    'gambia_try_oysters': {
      title: 'GM TRY Oysters',
      ecology: 3,
      economics: 2.17,
      community: 2.4
    },
    'ghana_artisanal': {
      title: 'GH Artisanal',
      ecology: 2.38,
      economics: 2.39,
      community: 3.36
    },
    'ghana_axim_artisanal': {
      title: 'GH Axim',
      ecology: 2.5,
      economics: 2.79,
      community: 4.19
    },
    'kenya_shimoni_artisanal': {
      title: 'KE Shimoni',
      ecology: 2.63,
      economics: 2.46,
      community: 3.29
    },
    'kenya_octopus': {
      title: 'KE Octopus',
      ecology: 2.38,
      economics: 3.39,
      community: 3.74
    },
    'liberia_westpoint_artisanal': {
      title: 'LR Westpoint',
      ecology: 2.38,
      economics: 2.4,
      community: 3.12
    },
    'liberia_westpoint_artisanal_2': {
      title: 'LR Westpoint',
      ecology: 4,
      economics: 3.08,
      community: 3.93
    },
    'liberia_robertsport_artisanal': {
      title: 'LR Robertsport',
      ecology: 3.5,
      economics: 2.96,
      community: 3.79
    },
    'liberia_semi-industrial': {
      title: 'LR Semi-Industrial',
      ecology: 3.5,
      economics: 2.9,
      community: 3.07
    },
    'malawi_lake_chiuta': {
      title: 'MW Lake Chiuta',
      ecology: 3,
      economics: 2.75,
      community: 3.33
    },
    'morocco_central_zone': {
      title: 'MA Central Zone',
      ecology: 3.06,
      economics: 3.22,
      community: 4.31
    },
    'morocco_southern_zone': {
      title: 'MA Southern Zone',
      ecology: 3.69,
      economics: 3.6,
      community: 3.75
    },
    'senegal_artisanal': {
      title: 'SN Artisanal',
      ecology: 2.5,
      economics: 3.39,
      community: 3.76
    },
    'senegal_ngaparou_artisanal': {
      title: 'SN Ngaparou',
      ecology: 2.63,
      economics: 2.64,
      community: 3.52
    },
    'sierra_leone_sherbro': {
      title: 'SL Sherbro',
      ecology: 2.63,
      economics: 2.72,
      community: 3.6
    },
    'sierra_leone_tombo': {
      title: 'SL Tombo',
      ecology: 2.5,
      economics: 2.5,
      community: 3.88
    },
    'uganda_lake_victoria_dagaa': {
      title: 'UG Dagaa',
      ecology: 4.25,
      economics: 2.93,
      community: 3.33
    },
    'uganda_lake_victoria_tilapia': {
      title: 'UG Tilapia',
      ecology: 4.25,
      economics: 3.06,
      community: 3.29
    },
    'uganda_nile_perch': {
      title: 'UG Nile Perch',
      ecology: 2.75,
      economics: 3.39,
      community: 3.6
    }
  };
  var parameters = parseQueryString();
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    var code = parameters.code;
    var imageEl = document.getElementById('highlight__image');
    var titleEl = document.getElementById('highlight__title');
    var barEcologyEl = document
      .getElementById('data__metric__value__bar--ecology');
    var barEconomicsEl = document
      .getElementById('data__metric__value__bar--economics');
    var barCommunityEl = document
      .getElementById('data__metric__value__bar--community');
    imageEl.src = 'img/' + code + '.jpg';
    imageEl.style.visibility = 'visible';
    titleEl.innerHTML = FISHERIES[code].title;
    barEcologyEl.style.backgroundColor =
      colorOfValue(FISHERIES[code].ecology);
    barEconomicsEl.style.backgroundColor =
      colorOfValue(FISHERIES[code].economics);
    barCommunityEl.style.backgroundColor =
      colorOfValue(FISHERIES[code].community);
    window.setTimeout(animateBars, 500);
    function colorOfValue(value) {
      if (value >= 4) {
        return 'rgb(90,200,90)';
      }
      if (value >= 3) {
        return 'rgb(200,200,90)';
      }
      return ('rgb(200,90,90)');
    }
    function animateBars() {
      barEcologyEl.style.width =
        (100 * (FISHERIES[code].ecology - 1) / 5) + '%';
      barEconomicsEl.style.width =
        (100 * (FISHERIES[code].economics - 1) / 5) + '%';
      barCommunityEl.style.width =
        (100 * (FISHERIES[code].community - 1) / 5) + '%';
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
        parsed[parameterArray[0]] = decodeURIComponent(parameterArray[1].replace(/\+/g, ' '));
      }
    }
    return parsed;
  }

})();
