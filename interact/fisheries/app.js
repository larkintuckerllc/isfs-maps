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