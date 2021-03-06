(function() {
  'use strict';
  var _ = window._;
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
  var COUNTRIES = {
    'CAN':  {name: 'Canada'},
    'CUB':  {name: 'Cuba'},
    'USA':  {name: 'United States'},
    'ATG':  {name: 'Antigua and Barbuda'},
    'ARG':  {name: 'Argentina'},
    'BHS':  {name: 'Bahamas'},
    'BRB':  {name: 'Barbados'},
    'BLZ':  {name: 'Belize'},
    'BRA':  {name: 'Brazil'},
    'CHL':  {name: 'Chile'},
    'COL':  {name: 'Colombia'},
    'CRI':  {name: 'Costa Rica'},
    'DMA':  {name: 'Dominica'},
    'DOM':  {name: 'Dominican Republic'},
    'SLV':  {name: 'El Salvador'},
    'GRD':  {name: 'Grenada'},
    'GUY':  {name: 'Guyana'},
    'HND':  {name: 'Honduras'},
    'JAM':  {name: 'Jamaica'},
    'MEX':  {name: 'Mexico'},
    'PAN':  {name: 'Panama'},
    'PRY':  {name: 'Paraguay'},
    'KNA':  {name: 'Saint Kitts and Nevis'},
    'LCA':  {name: 'Saint Lucia'},
    'VCT':  {name: 'Saint Vincent and the Grenadines'},
    'SUR':  {name: 'Suriname'},
    'TTO':  {name: 'Trinidad and Tobago'},
    'URY':  {name: 'Uruguay'},
    'VEN':  {name: 'Venezuela'},
    'BOL':  {name: 'Bolivia'},
    'ECU':  {name: 'Ecuador'},
    'GTM':  {name: 'Guatemala'},
    'HTI':  {name: 'Haiti'},
    'NIC':  {name: 'Nicaragua'},
    'PER':  {name: 'Peru'},
    'DZA':  {name: 'Algeria'},
    'AGO':  {name: 'Angola'},
    'BEN':  {name: 'Benin'},
    'BFA':  {name: 'Burkina Faso'},
    'CMR':  {name: 'Cameroon'},
    'CPV':  {name: 'Cape Verde'},
    'TCD':  {name: 'Chad'},
    'COM':  {name: 'Comoros'},
    'GNQ':  {name: 'Equatorial Guinea'},
    'GAB':  {name: 'Gabon'},
    'GMB':  {name: 'Gambia'},
    'GHA':  {name: 'Ghana'},
    'GIN':  {name: 'Guinea'},
    'GNB':  {name: 'Guinea-Bissau'},
    'LBR':  {name: 'Liberia'},
    'MDG':  {name: 'Madagascar'},
    'MLI':  {name: 'Mali'},
    'MRT':  {name: 'Mauritania'},
    'MUS':  {name: 'Mauritius'},
    'NER':  {name: 'Niger'},
    'NGA':  {name: 'Nigeria'},
    'STP':  {name: 'Sao Tome and Principe'},
    'SEN':  {name: 'Senegal'},
    'SYC':  {name: 'Seychelles'},
    'SLE':  {name: 'Sierra Leone'},
    'TGO':  {name: 'Togo'},
    'BWA':  {name: 'Botswana'},
    'BDI':  {name: 'Burundi'},
    'CAF':  {name: 'Central African Republic'},
    'COG':  {name: 'Congo'},
    'CIV':  {name: 'CA te dIvoire'},
    'COD':  {name: 'Democratic Republic of the Congo'},
    'ERI':  {name: 'Eritrea'},
    'ETH':  {name: 'Ethiopia'},
    'KEN':  {name: 'Kenya'},
    'LSO':  {name: 'Lesotho'},
    'MWI':  {name: 'Malawi'},
    'MOZ':  {name: 'Mozambique'},
    'NAM':  {name: 'Namibia'},
    'RWA':  {name: 'Rwanda'},
    'ZAF':  {name: 'South Africa'},
    'SWZ':  {name: 'Swaziland'},
    'UGA':  {name: 'Uganda'},
    'TZA':  {name: 'United Republic of Tanzania'},
    'ZMB':  {name: 'Zambia'},
    'ZWE':  {name: 'Zimbabwe'},
    'BHR':  {name: 'Bahrain'},
    'IRN':  {name: 'Iran, Islamic Republic of'},
    'JOR':  {name: 'Jordan'},
    'KWT':  {name: 'Kuwait'},
    'LBN':  {name: 'Lebanon'},
    'LBY':  {name: 'Libya'},
    'OMN':  {name: 'Oman'},
    'QAT':  {name: 'Qatar'},
    'SAU':  {name: 'Saudi Arabia'},
    'SYR':  {name: 'Syrian Arab Republic'},
    'TUN':  {name: 'Tunisia'},
    'ARE':  {name: 'United Arab Emirates'},
    'AFG':  {name: 'Afghanistan'},
    'DJI':  {name: 'Djibouti'},
    'EGY':  {name: 'Egypt'},
    'IRQ':  {name: 'Iraq'},
    'MAR':  {name: 'Morocco'},
    'PAK':  {name: 'Pakistan'},
    'SOM':  {name: 'Somalia'},
    'SSD':  {name: 'South Sudan'},
    'SDN':  {name: 'Sudan'},
    'YEM':  {name: 'Yemen'},
    'AND':  {name: 'Andorra'},
    'AUT':  {name: 'Austria'},
    'BEL':  {name: 'Belgium'},
    'HRV':  {name: 'Croatia'},
    'CYP':  {name: 'Cyprus'},
    'CZE':  {name: 'Czech Republic'},
    'DNK':  {name: 'Denmark'},
    'FIN':  {name: 'Finland'},
    'FRA':  {name: 'France'},
    'DEU':  {name: 'Germany'},
    'GRC':  {name: 'Greece'},
    'ISL':  {name: 'Iceland'},
    'IRL':  {name: 'Ireland'},
    'ISR':  {name: 'Israel'},
    'ITA':  {name: 'Italy'},
    'LUX':  {name: 'Luxembourg'},
    'MLT':  {name: 'Malta'},
    'MCO':  {name: 'Monaco'},
    'NLD':  {name: 'Netherlands'},
    'NOR':  {name: 'Norway'},
    'PRT':  {name: 'Portugal'},
    'SMR':  {name: 'San Marino'},
    'SVN':  {name: 'Slovenia'},
    'ESP':  {name: 'Spain'},
    'SWE':  {name: 'Sweden'},
    'CHE':  {name: 'Switzerland'},
    'GBR':  {name: 'United Kingdom'},
    'ALB':  {name: 'Albania'},
    'ARM':  {name: 'Armenia'},
    'AZE':  {name: 'Azerbaijan'},
    'BIH':  {name: 'Bosnia and Herzegovina'},
    'BGR':  {name: 'Bulgaria'},
    'GEO':  {name: 'Georgia'},
    'KGZ':  {name: 'Kyrgyzstan'},
    'MNE':  {name: 'Montenegro'},
    'POL':  {name: 'Poland'},
    'ROU':  {name: 'Romania'},
    'SRB':  {name: 'Serbia'},
    'SVK':  {name: 'Slovakia'},
    'TJK':  {name: 'Tajikistan'},
    'MKD':  {name: 'Macedonia, the Former Yugoslav Republic of'},
    'TUR':  {name: 'Turkey'},
    'TKM':  {name: 'Turkmenistan'},
    'UZB':  {name: 'Uzbekistan'},
    'BLR':  {name: 'Belarus'},
    'EST':  {name: 'Estonia'},
    'HUN':  {name: 'Hungary'},
    'KAZ':  {name: 'Kazakhstan'},
    'LVA':  {name: 'Latvia'},
    'LTU':  {name: 'Lithuania'},
    'MDA':  {name: 'Moldova, Republic of'},
    'RUS':  {name: 'Russian Federation'},
    'UKR':  {name: 'Ukraine'},
    'IDN':  {name: 'Indonesia'},
    'LKA':  {name: 'Sri Lanka'},
    'THA':  {name: 'Thailand'},
    'BGD':  {name: 'Bangladesh'},
    'BTN':  {name: 'Bhutan'},
    'PRK':  {name: 'Korea, Democratic Peoples Republic of'},
    'IND':  {name: 'India'},
    'MDV':  {name: 'Maldives'},
    'MMR':  {name: 'Myanmar'},
    'NPL':  {name: 'Nepal'},
    'TLS':  {name: 'Timor-Leste'},
    'AUS':  {name: 'Australia'},
    'BRN':  {name: 'Brunei Darussalam'},
    'JPN':  {name: 'Japan'},
    'NZL':  {name: 'New Zealand'},
    'SGP':  {name: 'Singapore'},
    'KHM':  {name: 'Cambodia'},
    'CHN':  {name: 'China'},
    'COK':  {name: 'Cook Islands'},
    'FJI':  {name: 'Fiji'},
    'KIR':  {name: 'Kiribati'},
    'LAO':  {name: 'Lao Peoples Democratic Republic'},
    'MYS':  {name: 'Malaysia'},
    'MHL':  {name: 'Marshall Islands'},
    'FSM':  {name: 'Micronesia, Federated States of'},
    'MNG':  {name: 'Mongolia'},
    'NRU':  {name: 'Nauru'},
    'NIU':  {name: 'Niue'},
    'PLW':  {name: 'Palau'},
    'PNG':  {name: 'Papua New Guinea'},
    'PHL':  {name: 'Philippines'},
    'KOR':  {name: 'Korea, Republic of'},
    'WSM':  {name: 'Samoa'},
    'SLB':  {name: 'Solomon Islands'},
    'TON':  {name: 'Tonga'},
    'TUV':  {name: 'Tuvalu'},
    'VUT':  {name: 'Vanuatu'},
    'VNM':  {name: 'Viet Nam'},
  };
  var COUNTRY_IN_REGION = [
    {country: 'CAN', region: 'AMR A'},
    {country: 'CUB', region: 'AMR A'},
    {country: 'USA', region: 'AMR A'},
    {country: 'ATG', region: 'AMR B'},
    {country: 'ARG', region: 'AMR B'},
    {country: 'BHS', region: 'AMR B'},
    {country: 'BRB', region: 'AMR B'},
    {country: 'BLZ', region: 'AMR B'},
    {country: 'BRA', region: 'AMR B'},
    {country: 'CHL', region: 'AMR B'},
    {country: 'COL', region: 'AMR B'},
    {country: 'CRI', region: 'AMR B'},
    {country: 'DMA', region: 'AMR B'},
    {country: 'DOM', region: 'AMR B'},
    {country: 'SLV', region: 'AMR B'},
    {country: 'GRD', region: 'AMR B'},
    {country: 'GUY', region: 'AMR B'},
    {country: 'HND', region: 'AMR B'},
    {country: 'JAM', region: 'AMR B'},
    {country: 'MEX', region: 'AMR B'},
    {country: 'PAN', region: 'AMR B'},
    {country: 'PRY', region: 'AMR B'},
    {country: 'KNA', region: 'AMR B'},
    {country: 'LCA', region: 'AMR B'},
    {country: 'VCT', region: 'AMR B'},
    {country: 'SUR', region: 'AMR B'},
    {country: 'TTO', region: 'AMR B'},
    {country: 'URY', region: 'AMR B'},
    {country: 'VEN', region: 'AMR B'},
    {country: 'BOL', region: 'AMR D'},
    {country: 'ECU', region: 'AMR D'},
    {country: 'GTM', region: 'AMR D'},
    {country: 'HTI', region: 'AMR D'},
    {country: 'NIC', region: 'AMR D'},
    {country: 'PER', region: 'AMR D'},
    {country: 'DZA', region: 'AFR D'},
    {country: 'AGO', region: 'AFR D'},
    {country: 'BEN', region: 'AFR D'},
    {country: 'BFA', region: 'AFR D'},
    {country: 'CMR', region: 'AFR D'},
    {country: 'CPV', region: 'AFR D'},
    {country: 'TCD', region: 'AFR D'},
    {country: 'COM', region: 'AFR D'},
    {country: 'GNQ', region: 'AFR D'},
    {country: 'GAB', region: 'AFR D'},
    {country: 'GMB', region: 'AFR D'},
    {country: 'GHA', region: 'AFR D'},
    {country: 'GIN', region: 'AFR D'},
    {country: 'GNB', region: 'AFR D'},
    {country: 'LBR', region: 'AFR D'},
    {country: 'MDG', region: 'AFR D'},
    {country: 'MLI', region: 'AFR D'},
    {country: 'MRT', region: 'AFR D'},
    {country: 'MUS', region: 'AFR D'},
    {country: 'NER', region: 'AFR D'},
    {country: 'NGA', region: 'AFR D'},
    {country: 'STP', region: 'AFR D'},
    {country: 'SEN', region: 'AFR D'},
    {country: 'SYC', region: 'AFR D'},
    {country: 'SLE', region: 'AFR D'},
    {country: 'TGO', region: 'AFR D'},
    {country: 'BWA', region: 'AFR E'},
    {country: 'BDI', region: 'AFR E'},
    {country: 'CAF', region: 'AFR E'},
    {country: 'COG', region: 'AFR E'},
    {country: 'CIV', region: 'AFR E'},
    {country: 'COD', region: 'AFR E'},
    {country: 'ERI', region: 'AFR E'},
    {country: 'ETH', region: 'AFR E'},
    {country: 'KEN', region: 'AFR E'},
    {country: 'LSO', region: 'AFR E'},
    {country: 'MWI', region: 'AFR E'},
    {country: 'MOZ', region: 'AFR E'},
    {country: 'NAM', region: 'AFR E'},
    {country: 'RWA', region: 'AFR E'},
    {country: 'ZAF', region: 'AFR E'},
    {country: 'SWZ', region: 'AFR E'},
    {country: 'UGA', region: 'AFR E'},
    {country: 'TZA', region: 'AFR E'},
    {country: 'ZMB', region: 'AFR E'},
    {country: 'ZWE', region: 'AFR E'},
    {country: 'BHR', region: 'EMR B'},
    {country: 'IRN', region: 'EMR B'},
    {country: 'JOR', region: 'EMR B'},
    {country: 'KWT', region: 'EMR B'},
    {country: 'LBN', region: 'EMR B'},
    {country: 'LBY', region: 'EMR B'},
    {country: 'OMN', region: 'EMR B'},
    {country: 'QAT', region: 'EMR B'},
    {country: 'SAU', region: 'EMR B'},
    {country: 'SYR', region: 'EMR B'},
    {country: 'TUN', region: 'EMR B'},
    {country: 'ARE', region: 'EMR B'},
    {country: 'AFG', region: 'EMR D'},
    {country: 'DJI', region: 'EMR D'},
    {country: 'EGY', region: 'EMR D'},
    {country: 'IRQ', region: 'EMR D'},
    {country: 'MAR', region: 'EMR D'},
    {country: 'PAK', region: 'EMR D'},
    {country: 'SOM', region: 'EMR D'},
    {country: 'SSD', region: 'EMR D'},
    {country: 'SDN', region: 'EMR D'},
    {country: 'YEM', region: 'EMR D'},
    {country: 'AND', region: 'EUR A'},
    {country: 'AUT', region: 'EUR A'},
    {country: 'BEL', region: 'EUR A'},
    {country: 'HRV', region: 'EUR A'},
    {country: 'CYP', region: 'EUR A'},
    {country: 'CZE', region: 'EUR A'},
    {country: 'DNK', region: 'EUR A'},
    {country: 'FIN', region: 'EUR A'},
    {country: 'FRA', region: 'EUR A'},
    {country: 'DEU', region: 'EUR A'},
    {country: 'GRC', region: 'EUR A'},
    {country: 'ISL', region: 'EUR A'},
    {country: 'IRL', region: 'EUR A'},
    {country: 'ISR', region: 'EUR A'},
    {country: 'ITA', region: 'EUR A'},
    {country: 'LUX', region: 'EUR A'},
    {country: 'MLT', region: 'EUR A'},
    {country: 'MCO', region: 'EUR A'},
    {country: 'NLD', region: 'EUR A'},
    {country: 'NOR', region: 'EUR A'},
    {country: 'PRT', region: 'EUR A'},
    {country: 'SMR', region: 'EUR A'},
    {country: 'SVN', region: 'EUR A'},
    {country: 'ESP', region: 'EUR A'},
    {country: 'SWE', region: 'EUR A'},
    {country: 'CHE', region: 'EUR A'},
    {country: 'GBR', region: 'EUR A'},
    {country: 'ALB', region: 'EUR B'},
    {country: 'ARM', region: 'EUR B'},
    {country: 'AZE', region: 'EUR B'},
    {country: 'BIH', region: 'EUR B'},
    {country: 'BGR', region: 'EUR B'},
    {country: 'GEO', region: 'EUR B'},
    {country: 'KGZ', region: 'EUR B'},
    {country: 'MNE', region: 'EUR B'},
    {country: 'POL', region: 'EUR B'},
    {country: 'ROU', region: 'EUR B'},
    {country: 'SRB', region: 'EUR B'},
    {country: 'SVK', region: 'EUR B'},
    {country: 'TJK', region: 'EUR B'},
    {country: 'MKD', region: 'EUR B'},
    {country: 'TUR', region: 'EUR B'},
    {country: 'TKM', region: 'EUR B'},
    {country: 'UZB', region: 'EUR B'},
    {country: 'BLR', region: 'EUR C'},
    {country: 'EST', region: 'EUR C'},
    {country: 'HUN', region: 'EUR C'},
    {country: 'KAZ', region: 'EUR C'},
    {country: 'LVA', region: 'EUR C'},
    {country: 'LTU', region: 'EUR C'},
    {country: 'MDA', region: 'EUR C'},
    {country: 'RUS', region: 'EUR C'},
    {country: 'UKR', region: 'EUR C'},
    {country: 'IDN', region: 'SEAR B'},
    {country: 'LKA', region: 'SEAR B'},
    {country: 'THA', region: 'SEAR B'},
    {country: 'BGD', region: 'SEAR D'},
    {country: 'BTN', region: 'SEAR D'},
    {country: 'PRK', region: 'SEAR D'},
    {country: 'IND', region: 'SEAR D'},
    {country: 'MDV', region: 'SEAR D'},
    {country: 'MMR', region: 'SEAR D'},
    {country: 'NPL', region: 'SEAR D'},
    {country: 'TLS', region: 'SEAR D'},
    {country: 'AUS', region: 'WPR A'},
    {country: 'BRN', region: 'WPR A'},
    {country: 'JPN', region: 'WPR A'},
    {country: 'NZL', region: 'WPR A'},
    {country: 'SGP', region: 'WPR A'},
    {country: 'KHM', region: 'WPR B'},
    {country: 'CHN', region: 'WPR B'},
    {country: 'COK', region: 'WPR B'},
    {country: 'FJI', region: 'WPR B'},
    {country: 'KIR', region: 'WPR B'},
    {country: 'LAO', region: 'WPR B'},
    {country: 'MYS', region: 'WPR B'},
    {country: 'MHL', region: 'WPR B'},
    {country: 'FSM', region: 'WPR B'},
    {country: 'MNG', region: 'WPR B'},
    {country: 'NRU', region: 'WPR B'},
    {country: 'NIU', region: 'WPR B'},
    {country: 'PLW', region: 'WPR B'},
    {country: 'PNG', region: 'WPR B'},
    {country: 'PHL', region: 'WPR B'},
    {country: 'KOR', region: 'WPR B'},
    {country: 'WSM', region: 'WPR B'},
    {country: 'SLB', region: 'WPR B'},
    {country: 'TON', region: 'WPR B'},
    {country: 'TUV', region: 'WPR B'},
    {country: 'VUT', region: 'WPR B'},
    {country: 'VNM', region: 'WPR B'},
  ];
  var parameters = parseQueryString();
  document.addEventListener('DOMContentLoaded', ready);
  function ready() {
    var titleRegionEl = document.getElementById('title__region');
    var titleAllEl = document.getElementById('title__all');
    var scaleValueAllEl = document.getElementById('data__scale__value--all');
    var countriesEl = document.getElementById('countries');
    var countryEl;
    var i;
    var code = parameters.code;
    var region = _.find(COUNTRY_IN_REGION, matchesCountry).region;
    var countries = _.filter(COUNTRY_IN_REGION, matchesRegion)
      .map(pluckCountry).sort();
    var allHazards = REGIONS[region]['All Hazards'];
    var detail;
    titleRegionEl.innerHTML = region;
    titleAllEl.innerHTML = allHazards;
    scaleValueAllEl.innerHTML = allHazards;
    for (i = 0; i < countries.length; i++) {
      countryEl = document.createElement('div');
      countryEl.classList.add('countries__country');
      countryEl.innerHTML = COUNTRIES[countries[i]].name;
      if (countries[i] === code) {
        countryEl.style.fontWeight = 'bold';
      }
      countriesEl.appendChild(countryEl);
    }
    window.setTimeout(animateBars, 500);
    function matchesCountry(o) {
      return o.country === code;
    }
    function matchesRegion(o) {
      return o.region === region;
    }
    function pluckCountry(o) {
      return o.country;
    }
    function animateBars() {
      var barChemicalsEl = document
        .getElementById('data__metric__value__bar--chemicals');
      var barDiarrhealEl = document
        .getElementById('data__metric__value__bar--diarrheal');
      var barHelminthsEl = document
        .getElementById('data__metric__value__bar--helminths');
      var barInvasiveEl = document
        .getElementById('data__metric__value__bar--invasive');
      barChemicalsEl.style.width =
        (100 * REGIONS[region]['Chemicals and Toxins'] / allHazards) + '%';
      barDiarrhealEl.style.width =
        (100 * REGIONS[region]['Diarrheal Disease Agents'] / allHazards) + '%';
      barHelminthsEl.style.width =
        (100 * REGIONS[region].Helminths / allHazards) + '%';
      barInvasiveEl.style.width =
        (100 * REGIONS[region]['Invasive Infectious Disease Agents'] /
        allHazards) + '%';
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
