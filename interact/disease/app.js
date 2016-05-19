(function() {
  'use strict';
  var REGIONS = {
    'AFR D': {
      'All Hazards': 1276,
      'Chemicals and Toxins': 30,
      'Diarrheal Disease Agents': 889,
      'Helminths': 186,
      'Invasive Infectious Disease Agents': 146
    },
    'AFR E': {
      'All Hazards': 1179,
      'Chemicals and Toxins': 7,
      'Diarrheal Disease Agents': 824,
      'Helminths': 184,
      'Invasive Infectious Disease Agents': 147
    },
    'AMR A': {
      'All Hazards': 35,
      'Chemicals and Toxins': 0.4,
      'Diarrheal Disease Agents': 23,
      'Helminths': 1,
      'Invasive Infectious Disease Agents': 10
    },
    'AMR B': {
      'All Hazards': 140,
      'Chemicals and Toxins': 3,
      'Diarrheal Disease Agents': 60,
      'Helminths': 36,
      'Invasive Infectious Disease Agents': 38
    },
    'AMR D': {
      'All Hazards': 315,
      'Chemicals and Toxins': 2,
      'Diarrheal Disease Agents': 72,
      'Helminths': 185,
      'Invasive Infectious Disease Agents': 49
    },
    'EMR B': {
      'All Hazards': 362,
      'Chemicals and Toxins': 0.8,
      'Diarrheal Disease Agents': 277,
      'Helminths': 5,
      'Invasive Infectious Disease Agents': 73
    },
    'EMR D': {
      'All Hazards': 571,
      'Chemicals and Toxins': 9,
      'Diarrheal Disease Agents': 393,
      'Helminths': 21,
      'Invasive Infectious Disease Agents': 137
    },
    'EUR A': {
      'All Hazards': 41,
      'Chemicals and Toxins': 2,
      'Diarrheal Disease Agents': 28,
      'Helminths': 0.4,
      'Invasive Infectious Disease Agents': 10
    },
    'EUR B': {
      'All Hazards': 52,
      'Chemicals and Toxins': 0.9,
      'Diarrheal Disease Agents': 25,
      'Helminths': 6,
      'Invasive Infectious Disease Agents': 19
    },
    'EUR C': {
      'All Hazards': 49,
      'Chemicals and Toxins': 2,
      'Diarrheal Disease Agents': 24,
      'Helminths': 6,
      'Invasive Infectious Disease Agents': 16
    },
    'SEAR B': {
      'All Hazards': 685,
      'Chemicals and Toxins': 20,
      'Diarrheal Disease Agents': 330,
      'Helminths': 52,
      'Invasive Infectious Disease Agents': 272
    },
    'SEAR D': {
      'All Hazards': 711,
      'Chemicals and Toxins': 18,
      'Diarrheal Disease Agents': 380,
      'Helminths': 60,
      'Invasive Infectious Disease Agents': 244
    },
    'WPR A': {
      'All Hazards': 36,
      'Chemicals and Toxins': 0.3,
      'Diarrheal Disease Agents': 23,
      'Helminths': 2,
      'Invasive Infectious Disease Agents': 10
    },
    'WPR B': {
      'All Hazards': 293,
      'Chemicals and Toxins': 18,
      'Diarrheal Disease Agents': 41,
      'Helminths': 162,
      'Invasive Infectious Disease Agents': 65
    }
  };
  var REGION_LOOKUP = {
    'CAN': 'AMR A',
    'CUB': 'AMR A',
    'USA': 'AMR A',
    'ATG': 'AMR B',
    'ARG': 'AMR B',
    'BHS': 'AMR B',
    'BRB': 'AMR B',
    'BLZ': 'AMR B',
    'BRA': 'AMR B',
    'CHL': 'AMR B',
    'COL': 'AMR B',
    'CRI': 'AMR B',
    'DMA': 'AMR B',
    'DOM': 'AMR B',
    'SLV': 'AMR B',
    'GRD': 'AMR B',
    'GUY': 'AMR B',
    'HND': 'AMR B',
    'JAM': 'AMR B',
    'MEX': 'AMR B',
    'PAN': 'AMR B',
    'PRY': 'AMR B',
    'KNA': 'AMR B',
    'LCA': 'AMR B',
    'VCT': 'AMR B',
    'SUR': 'AMR B',
    'TTO': 'AMR B',
    'URY': 'AMR B',
    'VEN': 'AMR B',
    'BOL': 'AMR D',
    'ECU': 'AMR D',
    'GTM': 'AMR D',
    'HTI': 'AMR D',
    'NIC': 'AMR D',
    'PER': 'AMR D',
    'DZA': 'AFR D',
    'AGO': 'AFR D',
    'BEN': 'AFR D',
    'BFA': 'AFR D',
    'CMR': 'AFR D',
    'CPV': 'AFR D',
    'TCD': 'AFR D',
    'COM': 'AFR D',
    'GNQ': 'AFR D',
    'GAB': 'AFR D',
    'GMB': 'AFR D',
    'GHA': 'AFR D',
    'GIN': 'AFR D',
    'GNB': 'AFR D',
    'LBR': 'AFR D',
    'MDG': 'AFR D',
    'MLI': 'AFR D',
    'MRT': 'AFR D',
    'MUS': 'AFR D',
    'NER': 'AFR D',
    'NGA': 'AFR D',
    'STP': 'AFR D',
    'SEN': 'AFR D',
    'SYC': 'AFR D',
    'SLE': 'AFR D',
    'TGO': 'AFR D',
    'BWA': 'AFR E',
    'BDI': 'AFR E',
    'CAF': 'AFR E',
    'COG': 'AFR E',
    'CIV': 'AFR E',
    'COD': 'AFR E',
    'ERI': 'AFR E',
    'ETH': 'AFR E',
    'KEN': 'AFR E',
    'LSO': 'AFR E',
    'MWI': 'AFR E',
    'MOZ': 'AFR E',
    'NAM': 'AFR E',
    'RWA': 'AFR E',
    'ZAF': 'AFR E',
    'SWZ': 'AFR E',
    'UGA': 'AFR E',
    'TZA': 'AFR E',
    'ZMB': 'AFR E',
    'ZWE': 'AFR E',
    'BHR': 'EMR B',
    'IRN': 'EMR B',
    'JOR': 'EMR B',
    'KWT': 'EMR B',
    'LBN': 'EMR B',
    'LBY': 'EMR B',
    'OMN': 'EMR B',
    'QAT': 'EMR B',
    'SAU': 'EMR B',
    'SYR': 'EMR B',
    'TUN': 'EMR B',
    'ARE': 'EMR B',
    'AFG': 'EMR D',
    'DJI': 'EMR D',
    'EGY': 'EMR D',
    'IRQ': 'EMR D',
    'MAR': 'EMR D',
    'PAK': 'EMR D',
    'SOM': 'EMR D',
    'SSD': 'EMR D',
    'SDN': 'EMR D',
    'YEM': 'EMR D',
    'AND': 'EUR A',
    'AUT': 'EUR A',
    'BEL': 'EUR A',
    'HRV': 'EUR A',
    'CYP': 'EUR A',
    'CZE': 'EUR A',
    'DNK': 'EUR A',
    'FIN': 'EUR A',
    'FRA': 'EUR A',
    'DEU': 'EUR A',
    'GRC': 'EUR A',
    'ISL': 'EUR A',
    'IRL': 'EUR A',
    'ISR': 'EUR A',
    'ITA': 'EUR A',
    'LUX': 'EUR A',
    'MLT': 'EUR A',
    'MCO': 'EUR A',
    'NLD': 'EUR A',
    'NOR': 'EUR A',
    'PRT': 'EUR A',
    'SMR': 'EUR A',
    'SVN': 'EUR A',
    'ESP': 'EUR A',
    'SWE': 'EUR A',
    'CHE': 'EUR A',
    'GBR': 'EUR A',
    'ALB': 'EUR B',
    'ARM': 'EUR B',
    'AZE': 'EUR B',
    'BIH': 'EUR B',
    'BGR': 'EUR B',
    'GEO': 'EUR B',
    'KGZ': 'EUR B',
    'MNE': 'EUR B',
    'POL': 'EUR B',
    'ROU': 'EUR B',
    'SRB': 'EUR B',
    'SVK': 'EUR B',
    'TJK': 'EUR B',
    'MKD': 'EUR B',
    'TUR': 'EUR B',
    'TKM': 'EUR B',
    'UZB': 'EUR B',
    'BLR': 'EUR C',
    'EST': 'EUR C',
    'HUN': 'EUR C',
    'KAZ': 'EUR C',
    'LVA': 'EUR C',
    'LTU': 'EUR C',
    'MDA': 'EUR C',
    'RUS': 'EUR C',
    'UKR': 'EUR C',
    'IDN': 'SEAR B',
    'LKA': 'SEAR B',
    'THA': 'SEAR B',
    'BGD': 'SEAR D',
    'BTN': 'SEAR D',
    'PRK': 'SEAR D',
    'IND': 'SEAR D',
    'MDV': 'SEAR D',
    'MMR': 'SEAR D',
    'NPL': 'SEAR D',
    'TLS': 'SEAR D',
    'AUS': 'WPR A',
    'BRN': 'WPR A',
    'JPN': 'WPR A',
    'NZL': 'WPR A',
    'SGP': 'WPR A',
    'KHM': 'WPR B',
    'CHN': 'WPR B',
    'COK': 'WPR B',
    'FJI': 'WPR B',
    'KIR': 'WPR B',
    'LAO': 'WPR B',
    'MYS': 'WPR B',
    'MHL': 'WPR B',
    'FSM': 'WPR B',
    'MNG': 'WPR B',
    'NRU': 'WPR B',
    'NIU': 'WPR B',
    'PLW': 'WPR B',
    'PNG': 'WPR B',
    'PHL': 'WPR B',
    'KOR': 'WPR B',
    'WSM': 'WPR B',
    'SLB': 'WPR B',
    'TON': 'WPR B',
    'TUV': 'WPR B',
    'VUT': 'WPR B',
    'VNM': 'WPR B'
  };
  var parameters = parseQueryString();
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    var code = parameters.code;
    var region = REGION_LOOKUP[code];
    window.console.log(region);
    window.console.log(REGIONS[region]['All Hazards']);
    window.console.log(REGIONS[region]['Chemicals and Toxins']);
    window.console.log(REGIONS[region]['Diarrheal Disease Agents']);
    window.console.log(REGIONS[region].Helminths);
    window.console.log(REGIONS[region]['Invasive Infectious Disease Agents']);
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
