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
      title: 'Gambia Artisanal Sole and Catfish',
      ecology: 3.5,
      economics: 3.35,
      community: 3.38
    },
    'gambia_try_oysters': {
      title: 'Gambia TRY Oysters',
      ecology: 3,
      economics: 2.17,
      community: 2.4
    },
    'ghana_artisanal': {
      title: 'Ghana Artisanal',
      ecology: 2.38,
      economics: 2.39,
      community: 3.36
    },
    'ghana_axim_artisanal': {
      title: 'Ghana Axim',
      ecology: 2.5,
      economics: 2.79,
      community: 4.19
    },
    'kenya_shimoni_artisanal': {
      title: 'Kenya Shimoni Artisanal',
      ecology: 2.63,
      economics: 2.46,
      community: 3.29
    },
    'kenya_octopus': {
      title: 'Kenya Octopus',
      ecology: 2.38,
      economics: 3.39,
      community: 3.74
    },
    'liberia_westpoint_artisanal': {
      title: 'Liberia Westpoint Artisinal',
      ecology: 2.38,
      economics: 2.4,
      community: 3.12
    },
    'liberia_westpoint_artisanal_2': {
      title: 'Liberia Westpoint Artisinal',
      ecology: 4,
      economics: 3.08,
      community: 3.93
    },
    'liberia_robertsport_artisanal': {
      title: 'Liberia Robertsport Artisinal',
      ecology: 3.5,
      economics: 2.96,
      community: 3.79
    },
    'liberia_semi-industrial': {
      title: 'Liberia Semi-Industrial',
      ecology: 3.5,
      economics: 2.9,
      community: 3.07
    },
    'malawi_lake_chiuta': {
      title: 'Malawi Lake Chiuta',
      ecology: 3,
      economics: 2.75,
      community: 3.33
    },
    'morocco_central_zone': {
      title: 'Morocco Central Zone',
      ecology: 3.06,
      economics: 3.22,
      community: 4.31
    },
    'morocco_southern_zone': {
      title: 'Morocco Southern Zone',
      ecology: 3.69,
      economics: 3.6,
      community: 3.75
    },
    'senegal_artisanal': {
      title: 'Senegal Artisanal',
      ecology: 2.5,
      economics: 3.39,
      community: 3.76
    },
    'senegal_ngaparou_artisanal': {
      title: 'Senegal Ngaparou Artisanal',
      ecology: 2.63,
      economics: 2.64,
      community: 3.52
    },
    'sierra_leone_sherbro': {
      title: 'Sierra Leone Sherbro',
      ecology: 2.63,
      economics: 2.72,
      community: 3.6
    },
    'sierra_leone_tombo': {
      title: 'Sierre Leone Tombo',
      ecology: 2.5,
      economics: 2.5,
      community: 3.88
    },
    'uganda_lake_victoria_dagaa': {
      title: 'Uganda Lake Victoria Dagaa',
      ecology: 4.25,
      economics: 2.93,
      community: 3.33
    },
    'uganda_lake_victoria_tilapia': {
      title: 'Uganda Lake Victoria Tilapia',
      ecology: 4.25,
      economics: 3.06,
      community: 3.29
    },
    'uganda_nile_perch': {
      title: 'Uganda Nile Perch',
      ecology: 2.75,
      economics: 3.39,
      community: 3.6
    },
    'shrimp_artisanal': {
      title: 'Columbia Shrimp Artisanal',
      ecology: 2.25,
      economics: 2.81,
      community: 4.18
    },
    'shrimp_industrial': {
      title: 'Colombia Shrimp Industrial',
      ecology: 2.38,
      economics: 3.25,
      community: 4.29
    },
    'industrial_tuna': {
      title: 'Ecuador Industrial Tuna',
      ecology: 3.88,
      economics: 3.88,
      community: 4.31
    },
    'la_paz_bivalves': {
      title: 'Mexico La Paz Bivalves',
      ecology: 2.38,
      economics: 2.49,
      community: 3.45
    },
    /*
    'la_paz_bivalves': {
      title: 'La Paz Bivalves',
      ecology: 2.88,
      economics: 2.33,
      community: 3.71
    },
    */
    'la_paz_chocolata': {
      title: 'Mexico La Paz Bay Chocolata',
      ecology: 3,
      economics: 2.76,
      community: 3.93
    },
    'purse_seine_tuna': {
      title: 'Mexico Purse Seine Tuna',
      ecology: 3.38,
      economics: 4.26,
      community: 4.67
    },
    'anchovy': {
      title: 'Peru Anchovy',
      ecology: 3,
      economics: 3.68,
      community: 3.98
    },
    'ak_pollock': {
      title: 'Alaska Pollock',
      ecology: 4.88,
      economics: 4.38,
      community: 3.52
    },
    'fl_spiny_lobster': {
      title: 'Florida Spiny Lobster',
      ecology: 3.75,
      economics: 3.53,
      community: 4.12
    },
    'louisiana_shrimp': {
      title: 'Louisiana Shrimp',
      ecology: 3.5,
      economics: 3.35,
      community: 3.9
    },
    'ak_salmon': {
      title: 'Alaska Salmon',
      ecology: 4.88,
      economics: 2.86,
      community: 3.4
    },
    'ne_groundfish': {
      title: 'Northeast Groundfish',
      ecology: 2.5,
      economics: 3.42,
      community: 3.55
    },
    'or_dungeness_crab': {
      title: 'Oregon Dungeness Crab',
      ecology: 4.63,
      economics: 3.33,
      community: 3.48
    },
    'ak_crab': {
      title: 'Alaska Crab',
      ecology: 4.25,
      economics: 4.44,
      community: 3.71
    },
    'ak_halibut': {
      title: 'Alaska Halibut',
      ecology: 4.88,
      economics: 4.01,
      community: 3.6
    },
    'pacific_groundfish': {
      title: 'Pacific Groundfish',
      ecology: 3.75,
      economics: 3.82,
      community: 3.45
    },
    'gom_snapper': {
      title: 'GoM Snapper',
      ecology: 2.88,
      economics: 3.79,
      community: 3.83
    },
    'se_sl_skipjack_tuna': {
      title: 'SE Sulawesi Skipjack Tuna',
      ecology: 4.13,
      economics: 3.15,
      community: 4.05
    },
    'lombok_shark': {
      title: 'Lombok Shark',
      ecology: 3.88,
      economics: 2.78,
      community: 4.1
    },
    's_sb_yellowfin_tuna': {
      title: 'S Sumbawa Yellowfin Tuna',
      ecology: 3.5,
      economics: 3.23,
      community: 4.05
    },
    'n_sb_yellowfin_tuna': {
      title: 'N Sumbawa Yellowfin Tuna',
      ecology: 3.38,
      economics: 3.19,
      community: 3.76
    },
    's_sm_blue_swming_crab': {
      title: 'S Sumatra Blue Swimming Crab',
      ecology: 3.13,
      economics: 3.53,
      community: 3.5
    },
    'n_sb_demersal': {
      title: 'N Sumbawa Demersal',
      ecology: 2.75,
      economics: 2.84,
      community: 3.69
    },
    'se_sl_blue_swming_crab': {
      title: 'SE Sulawesi Blue Swimming Crab',
      ecology: 2.63,
      economics: 3.4,
      community: 3.69
    },
    'central_sl_demersal': {
      title: 'Central Sulawesi Demersal',
      ecology: 2.5,
      economics: 3.75,
      community: 4.1
    },
    's_sl_grouper': {
      title: 'S Sulawesi Grouper',
      ecology: 2.5,
      economics: 3.11,
      community: 3.83
    },
    's_sb_demersal': {
      title: 'S Sumbawa Demersal',
      ecology: 2.38,
      economics: 2.58,
      community: 3.83
    },
    'is_lobster': {
      title: 'Iceland Lobster',
      ecology: 5,
      economics: 4.34,
      community: 4.05
    },
    'mv_skipjack_tuna': {
      title: 'Maldives Skipjack Tuna',
      ecology: 4.75,
      economics: 3.53,
      community: 3.93
    },
    'no_cod': {
      title: 'Norway Cod',
      ecology: 4.75,
      economics: 3.83,
      community: 3.98
    },
    'no_purse_seine': {
      title: 'Norway Purse Seine',
      ecology: 4.75,
      economics: 3.88,
      community: 3.98
    },
    'au_spencer_gulf_prawn': {
      title: 'Australia Spencer Gulf Prawn',
      ecology: 4.38,
      economics: 3.79,
      community: 4.45
    },
    'nz_hoki': {
      title: 'New Zealand Hoki',
      ecology: 4.38,
      economics: 4.25,
      community: 3.9
    },
    'au_w_zn_abalone': {
      title: 'Australia Western Zone Abalone',
      ecology: 4.13,
      economics: 4.1,
      community: 4.67
    },
    'eu_purse_seine_tuna': {
      title: 'EU Purse Seine Tuna',
      ecology: 4,
      economics: 3.85,
      community: 4.17
    },
    'se_baltic_cod': {
      title: 'Sweden Baltic Cod',
      ecology: 4,
      economics: 3.79,
      community: 4.12
    },
    'au_s_zn_rock_lobster': {
      title: 'Australia Southern Zone Rock Lobster',
      ecology: 4,
      economics: 4.01,
      community: 4.69
    },
    'sc_inshore_artisanal': {
      title: 'Seychelles Inshore Artisanal',
      ecology: 3.63,
      economics: 3.51,
      community: 4.1
    },
    'sc_semi-industrial': {
      title: 'Seychelles Semi-Industrial',
      ecology: 3.5,
      economics: 3.97,
      community: 4.05
    },
    'sc_sea_cucumber': {
      title: 'Seychelles Sea Cucumber',
      ecology: 3,
      economics: 3.6,
      community: 4.21
    },
    'pabna_sadullaspracole': {
      title: 'Pabna Sadullaspracole',
      ecology: 3.13,
      economics: 2.75,
      community: 3.33
    },
    'beel_chatra': {
      title: 'Beel Chatra',
      ecology: 3.5,
      economics: 2.97,
      community: 4.05
    },
    'kailin_nadi': {
      title: 'Kailin Nadi',
      ecology: 3.38,
      economics: 2.69,
      community: 3.54
    },
    'suruga_pink_shrimp': {
      title: 'Suruga Pink Shrimp',
      ecology: 4.38,
      economics: 3.61,
      community: 4.31
    },
    'tokyo_bay': {
      title: 'Tokyo Bay',
      ecology: 3.25,
      economics: 3.69,
      community: 4.27
    },
    'philippines_blue_crab': {
      title: 'Philippines Blue Crab',
      ecology: 2.63,
      economics: 3.44,
      community: 3.36
    },
    'longline_tuna_taiwan': {
      title: 'Longline Tuna Taiwan',
      ecology: 3.13,
      economics: 4.17,
      community: 4.31
    },
    'thanh_hoa': {
      title: 'Thanh Hoa',
      ecology: 2.13,
      economics: 3.01,
      community: 3.45
    },
    'fish_trawl_offshore': {
      title: 'Fish Trawl (Offshore)',
      ecology: 2.25,
      economics: 2.88,
      community: 4.1
    },
    'shrimp_trawl_inshore': {
      title: 'Shrimp Trawl (Inshore)',
      ecology: 2,
      economics: 3,
      community: 3.71
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
