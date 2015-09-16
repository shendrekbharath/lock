import Immutable from 'immutable';

export function country(countryCode) {
  return countryCode.get(0);
}

export function isoCode(countryCode) {
  return countryCode.get(1);
}

// TODO: fix misspelling, it's dialling
export function dialingCode(countryCode) {
  return countryCode.get(2);
}

export function locationString(m) {
  return `${country(m)} ${dialingCode(m)}`;
}

export const defaultLocation = Immutable.fromJS(["United States", "US", "+1"]);

export function find(dialingCode, country) {
  return countryCodes.filter(x => {
    return x.get(1) === dialingCode && (!country || x.get(0) === country);
  });
}

// TODO: rename this, and the file, to "locations"
export const countryCodes = Immutable.fromJS([
  [
    "Afghanistan",
    "AF",
    "+93"
  ],
  [
    "Albania",
    "AL",
    "+355"
  ],
  [
    "Algeria",
    "DZ",
    "+213"
  ],
  [
    "American Samoa",
    "AS",
    "+1684"
  ],
  [
    "Andorra",
    "AD",
    "+376"
  ],
  [
    "Angola",
    "AO",
    "+244"
  ],
  [
    "Anguilla",
    "AI",
    "+1264"
  ],
  [
    "Antarctica",
    "AQ",
    "+672"
  ],
  [
    "Antigua and Barbuda",
    "AG",
    "+1268"
  ],
  [
    "Argentina",
    "AR",
    "+54"
  ],
  [
    "Armenia",
    "AM",
    "+374"
  ],
  [
    "Aruba",
    "AW",
    "+297"
  ],
  [
    "Australia",
    "AU",
    "+61"
  ],
  [
    "Austria",
    "AT",
    "+43"
  ],
  [
    "Azerbaijan",
    "AZ",
    "+994"
  ],
  [
    "Bahamas",
    "BS",
    "+1242"
  ],
  [
    "Bahrain",
    "BH",
    "+973"
  ],
  [
    "Bangladesh",
    "BD",
    "+880"
  ],
  [
    "Barbados",
    "BB",
    "+1246"
  ],
  [
    "Belarus",
    "BY",
    "+375"
  ],
  [
    "Belgium",
    "BE",
    "+32"
  ],
  [
    "Belize",
    "BZ",
    "+501"
  ],
  [
    "Benin",
    "BJ",
    "+229"
  ],
  [
    "Bermuda",
    "BM",
    "+1441"
  ],
  [
    "Bhutan",
    "BT",
    "+975"
  ],
  [
    "Bolivia, Plurinational State of",
    "BO",
    "+591"
  ],
  [
    "Bonaire, Sint Eustatius and Saba",
    "BQ",
    "+599"
  ],
  [
    "Bosnia and Herzegovina",
    "BA",
    "+387"
  ],
  [
    "Botswana",
    "BW",
    "+267"
  ],
  [
    "Bouvet Island",
    "BV",
    "+47"
  ],
  [
    "Brazil",
    "BR",
    "+55"
  ],
  [
    "British Indian Ocean Territory",
    "IO",
    "+246"
  ],
  [
    "Brunei Darussalam",
    "BN",
    "+673"
  ],
  [
    "Bulgaria",
    "BG",
    "+359"
  ],
  [
    "Burkina Faso",
    "BF",
    "+226"
  ],
  [
    "Burundi",
    "BI",
    "+257"
  ],
  [
    "Cambodia",
    "KH",
    "+855"
  ],
  [
    "Cameroon",
    "CM",
    "+237"
  ],
  [
    "Canada",
    "CA",
    "+1"
  ],
  [
    "Cape Verde",
    "CV",
    "+238"
  ],
  [
    "Cayman Islands",
    "KY",
    "+1345"
  ],
  [
    "Central African Republic",
    "CF",
    "+236"
  ],
  [
    "Chad",
    "TD",
    "+235"
  ],
  [
    "Chile",
    "CL",
    "+56"
  ],
  [
    "China",
    "CN",
    "+86"
  ],
  [
    "Christmas Island",
    "CX",
    "+61"
  ],
  [
    "Cocos (Keeling) Islands",
    "CC",
    "+61"
  ],
  [
    "Colombia",
    "CO",
    "+57"
  ],
  [
    "Comoros",
    "KM",
    "+269"
  ],
  [
    "Congo",
    "CG",
    "+242"
  ],
  [
    "Congo, the Democratic Republic of the",
    "CD",
    "+243"
  ],
  [
    "Cook Islands",
    "CK",
    "+682"
  ],
  [
    "Costa Rica",
    "CR",
    "+506"
  ],
  [
    "Croatia",
    "HR",
    "+385"
  ],
  [
    "Cuba",
    "CU",
    "+53"
  ],
  [
    "Curaçao",
    "CW",
    "+599"
  ],
  [
    "Cyprus",
    "CY",
    "+357"
  ],
  [
    "Czech Republic",
    "CZ",
    "+420"
  ],
  [
    "Côte d'Ivoire",
    "CI",
    "+225"
  ],
  [
    "Denmark",
    "DK",
    "+45"
  ],
  [
    "Djibouti",
    "DJ",
    "+253"
  ],
  [
    "Dominica",
    "DM",
    "+1767"
  ],
  [
    "Dominican Republic",
    "DO",
    "+1809"
  ],
  [
    "Dominican Republic",
    "DO",
    "+1829"
  ],
  [
    "Dominican Republic",
    "DO",
    "+1849"
  ],
  [
    "Ecuador",
    "EC",
    "+593"
  ],
  [
    "Egypt",
    "EG",
    "+20"
  ],
  [
    "El Salvador",
    "SV",
    "+503"
  ],
  [
    "Equatorial Guinea",
    "GQ",
    "+240"
  ],
  [
    "Eritrea",
    "ER",
    "+291"
  ],
  [
    "Estonia",
    "EE",
    "+372"
  ],
  [
    "Ethiopia",
    "ET",
    "+251"
  ],
  [
    "Falkland Islands (Malvinas)",
    "FK",
    "+500"
  ],
  [
    "Faroe Islands",
    "FO",
    "+298"
  ],
  [
    "Fiji",
    "FJ",
    "+679"
  ],
  [
    "Finland",
    "FI",
    "+358"
  ],
  [
    "France",
    "FR",
    "+33"
  ],
  [
    "French Guiana",
    "GF",
    "+594"
  ],
  [
    "French Polynesia",
    "PF",
    "+689"
  ],
  [
    "French Southern Territories",
    "TF",
    "+262"
  ],
  [
    "Gabon",
    "GA",
    "+241"
  ],
  [
    "Gambia",
    "GM",
    "+220"
  ],
  [
    "Georgia",
    "GE",
    "+995"
  ],
  [
    "Germany",
    "DE",
    "+49"
  ],
  [
    "Ghana",
    "GH",
    "+233"
  ],
  [
    "Gibraltar",
    "GI",
    "+350"
  ],
  [
    "Greece",
    "GR",
    "+30"
  ],
  [
    "Greenland",
    "GL",
    "+299"
  ],
  [
    "Grenada",
    "GD",
    "+1473"
  ],
  [
    "Guadeloupe",
    "GP",
    "+590"
  ],
  [
    "Guam",
    "GU",
    "+1671"
  ],
  [
    "Guatemala",
    "GT",
    "+502"
  ],
  [
    "Guernsey",
    "GG",
    "+44"
  ],
  [
    "Guinea",
    "GN",
    "+224"
  ],
  [
    "Guinea-Bissau",
    "GW",
    "+245"
  ],
  [
    "Guyana",
    "GY",
    "+592"
  ],
  [
    "Haiti",
    "HT",
    "+509"
  ],
  [
    "Heard Island and McDonald Mcdonald Islands",
    "HM",
    "+672"
  ],
  [
    "Holy See (Vatican City State)",
    "VA",
    "+3906"
  ],
  [
    "Honduras",
    "HN",
    "+504"
  ],
  [
    "Hong Kong",
    "HK",
    "+852"
  ],
  [
    "Hungary",
    "HU",
    "+36"
  ],
  [
    "Iceland",
    "IS",
    "+354"
  ],
  [
    "India",
    "IN",
    "+91"
  ],
  [
    "Indonesia",
    "ID",
    "+62"
  ],
  [
    "Iran, Islamic Republic of",
    "IR",
    "+98"
  ],
  [
    "Iraq",
    "IQ",
    "+964"
  ],
  [
    "Ireland",
    "IE",
    "+353"
  ],
  [
    "Isle of Man",
    "IM",
    "+44"
  ],
  [
    "Israel",
    "IL",
    "+972"
  ],
  [
    "Italy",
    "IT",
    "+39"
  ],
  [
    "Jamaica",
    "JM",
    "+1876"
  ],
  [
    "Japan",
    "JP",
    "+81"
  ],
  [
    "Jersey",
    "JE",
    "+44"
  ],
  [
    "Jordan",
    "JO",
    "+962"
  ],
  [
    "Kazakhstan",
    "KZ",
    "+7"
  ],
  [
    "Kenya",
    "KE",
    "+254"
  ],
  [
    "Kiribati",
    "KI",
    "+686"
  ],
  [
    "Korea, Democratic People's Republic of",
    "KP",
    "+850"
  ],
  [
    "Korea, Republic of",
    "KR",
    "+82"
  ],
  [
    "Kuwait",
    "KW",
    "+965"
  ],
  [
    "Kyrgyzstan",
    "KG",
    "+996"
  ],
  [
    "Lao People's Democratic Republic",
    "LA",
    "+856"
  ],
  [
    "Latvia",
    "LV",
    "+371"
  ],
  [
    "Lebanon",
    "LB",
    "+961"
  ],
  [
    "Lesotho",
    "LS",
    "+266"
  ],
  [
    "Liberia",
    "LR",
    "+231"
  ],
  [
    "Libya",
    "LY",
    "+218"
  ],
  [
    "Liechtenstein",
    "LI",
    "+423"
  ],
  [
    "Lithuania",
    "LT",
    "+370"
  ],
  [
    "Luxembourg",
    "LU",
    "+352"
  ],
  [
    "Macao",
    "MO",
    "+853"
  ],
  [
    "Macedonia, the Former Yugoslav Republic of",
    "MK",
    "+389"
  ],
  [
    "Madagascar",
    "MG",
    "+261"
  ],
  [
    "Malawi",
    "MW",
    "+265"
  ],
  [
    "Malaysia",
    "MY",
    "+60"
  ],
  [
    "Maldives",
    "MV",
    "+960"
  ],
  [
    "Mali",
    "ML",
    "+223"
  ],
  [
    "Malta",
    "MT",
    "+356"
  ],
  [
    "Marshall Islands",
    "MH",
    "+692"
  ],
  [
    "Martinique",
    "MQ",
    "+596"
  ],
  [
    "Mauritania",
    "MR",
    "+222"
  ],
  [
    "Mauritius",
    "MU",
    "+230"
  ],
  [
    "Mayotte",
    "YT",
    "+262"
  ],
  [
    "Mexico",
    "MX",
    "+52"
  ],
  [
    "Micronesia, Federated States of",
    "FM",
    "+691"
  ],
  [
    "Moldova, Republic of",
    "MD",
    "+373"
  ],
  [
    "Monaco",
    "MC",
    "+377"
  ],
  [
    "Mongolia",
    "MN",
    "+976"
  ],
  [
    "Montenegro",
    "ME",
    "+382"
  ],
  [
    "Montserrat",
    "MS",
    "+1664"
  ],
  [
    "Morocco",
    "MA",
    "+212"
  ],
  [
    "Mozambique",
    "MZ",
    "+258"
  ],
  [
    "Myanmar",
    "MM",
    "+95"
  ],
  [
    "Namibia",
    "NA",
    "+264"
  ],
  [
    "Nauru",
    "NR",
    "+674"
  ],
  [
    "Nepal",
    "NP",
    "+977"
  ],
  [
    "Netherlands",
    "NL",
    "+31"
  ],
  [
    "New Caledonia",
    "NC",
    "+687"
  ],
  [
    "New Zealand",
    "NZ",
    "+64"
  ],
  [
    "Nicaragua",
    "NI",
    "+505"
  ],
  [
    "Niger",
    "NE",
    "+227"
  ],
  [
    "Nigeria",
    "NG",
    "+234"
  ],
  [
    "Niue",
    "NU",
    "+683"
  ],
  [
    "Norfolk Island",
    "NF",
    "+672"
  ],
  [
    "Northern Mariana Islands",
    "MP",
    "+1670"
  ],
  [
    "Norway",
    "NO",
    "+47"
  ],
  [
    "Oman",
    "OM",
    "+968"
  ],
  [
    "Pakistan",
    "PK",
    "+92"
  ],
  [
    "Palau",
    "PW",
    "+680"
  ],
  [
    "Palestine, State of",
    "PS",
    "+970"
  ],
  [
    "Panama",
    "PA",
    "+507"
  ],
  [
    "Papua New Guinea",
    "PG",
    "+675"
  ],
  [
    "Paraguay",
    "PY",
    "+595"
  ],
  [
    "Peru",
    "PE",
    "+51"
  ],
  [
    "Philippines",
    "PH",
    "+63"
  ],
  [
    "Pitcairn",
    "PN",
    "+870"
  ],
  [
    "Poland",
    "PL",
    "+48"
  ],
  [
    "Portugal",
    "PT",
    "+351"
  ],
  [
    "Puerto Rico",
    "PR",
    "+1"
  ],
  [
    "Qatar",
    "QA",
    "+974"
  ],
  [
    "Romania",
    "RO",
    "+40"
  ],
  [
    "Russian Federation",
    "RU",
    "+7"
  ],
  [
    "Rwanda",
    "RW",
    "+250"
  ],
  [
    "Réunion",
    "RE",
    "+262"
  ],
  [
    "Saint Barthélemy",
    "BL",
    "+590"
  ],
  [
    "Saint Helena, Ascension and Tristan da Cunha",
    "SH",
    "+290"
  ],
  [
    "Saint Kitts and Nevis",
    "KN",
    "+1869"
  ],
  [
    "Saint Lucia",
    "LC",
    "+1758"
  ],
  [
    "Saint Martin (French part)",
    "MF",
    "+590"
  ],
  [
    "Saint Pierre and Miquelon",
    "PM",
    "+508"
  ],
  [
    "Saint Vincent and the Grenadines",
    "VC",
    "+1784"
  ],
  [
    "Samoa",
    "WS",
    "+685"
  ],
  [
    "San Marino",
    "SM",
    "+378"
  ],
  [
    "Sao Tome and Principe",
    "ST",
    "+239"
  ],
  [
    "Saudi Arabia",
    "SA",
    "+966"
  ],
  [
    "Senegal",
    "SN",
    "+221"
  ],
  [
    "Serbia",
    "RS",
    "+381"
  ],
  [
    "Seychelles",
    "SC",
    "+248"
  ],
  [
    "Sierra Leone",
    "SL",
    "+232"
  ],
  [
    "Singapore",
    "SG",
    "+65"
  ],
  [
    "Sint Maarten (Dutch part)",
    "SX",
    "+1721"
  ],
  [
    "Slovakia",
    "SK",
    "+421"
  ],
  [
    "Slovenia",
    "SI",
    "+386"
  ],
  [
    "Solomon Islands",
    "SB",
    "+677"
  ],
  [
    "Somalia",
    "SO",
    "+252"
  ],
  [
    "South Africa",
    "ZA",
    "+27"
  ],
  [
    "South Georgia and the South Sandwich Islands",
    "GS",
    "+500"
  ],
  [
    "South Sudan",
    "SS",
    "+211"
  ],
  [
    "Spain",
    "ES",
    "+34"
  ],
  [
    "Sri Lanka",
    "LK",
    "+94"
  ],
  [
    "Sudan",
    "SD",
    "+249"
  ],
  [
    "Suriname",
    "SR",
    "+597"
  ],
  [
    "Svalbard and Jan Mayen",
    "SJ",
    "+47"
  ],
  [
    "Swaziland",
    "SZ",
    "+268"
  ],
  [
    "Sweden",
    "SE",
    "+46"
  ],
  [
    "Switzerland",
    "CH",
    "+41"
  ],
  [
    "Syrian Arab Republic",
    "SY",
    "+963"
  ],
  [
    "Taiwan, Province of China",
    "TW",
    "+886"
  ],
  [
    "Tajikistan",
    "TJ",
    "+992"
  ],
  [
    "Tanzania, United Republic of",
    "TZ",
    "+255"
  ],
  [
    "Thailand",
    "TH",
    "+66"
  ],
  [
    "Timor-Leste",
    "TL",
    "+670"
  ],
  [
    "Togo",
    "TG",
    "+228"
  ],
  [
    "Tokelau",
    "TK",
    "+690"
  ],
  [
    "Tonga",
    "TO",
    "+676"
  ],
  [
    "Trinidad and Tobago",
    "TT",
    "+1868"
  ],
  [
    "Tunisia",
    "TN",
    "+216"
  ],
  [
    "Turkey",
    "TR",
    "+90"
  ],
  [
    "Turkmenistan",
    "TM",
    "+993"
  ],
  [
    "Turks and Caicos Islands",
    "TC",
    "+1649"
  ],
  [
    "Tuvalu",
    "TV",
    "+688"
  ],
  [
    "Uganda",
    "UG",
    "+256"
  ],
  [
    "Ukraine",
    "UA",
    "+380"
  ],
  [
    "United Arab Emirates",
    "AE",
    "+971"
  ],
  [
    "United Kingdom",
    "GB",
    "+44"
  ],
  [
    "United States",
    "US",
    "+1"
  ],
  [
    "Uruguay",
    "UY",
    "+598"
  ],
  [
    "Uzbekistan",
    "UZ",
    "+998"
  ],
  [
    "Vanuatu",
    "VU",
    "+678"
  ],
  [
    "Venezuela, Bolivarian Republic of",
    "VE",
    "+58"
  ],
  [
    "Viet Nam",
    "VN",
    "+84"
  ],
  [
    "Virgin Islands, British",
    "VG",
    "+1284"
  ],
  [
    "Virgin Islands, U.S.",
    "VI",
    "+1340"
  ],
  [
    "Wallis and Futuna",
    "WF",
    "+681"
  ],
  [
    "Western Sahara",
    "EH",
    "+212"
  ],
  [
    "Yemen",
    "YE",
    "+967"
  ],
  [
    "Zambia",
    "ZM",
    "+260"
  ],
  [
    "Zimbabwe",
    "ZW",
    "+263"
  ],
  [
    "Åland Islands",
    "AX",
    "+358"
  ]
]);
