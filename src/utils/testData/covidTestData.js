import { reduxInitialState } from "../../constants/CommonTestData";
import { covidInitialDateRange } from "../../constants/DateRanges";

export const covidAllCountriesFilters = {
  ...reduxInitialState.filters,
  outbreak: "COVID 19",
  dateRange: covidInitialDateRange,
};

export const covidAfghanistanFilters = {
  ...reduxInitialState.filters,
  country: "Afghanistan",
  outbreak: "COVID 19",
  dateRange: covidInitialDateRange,
};

export const testCountryCovidCaseCounts = {
  countryName: "Afghanistan",
  countryData: {
    "11/23/20": 203,
    "11/24/20": 282,
    "11/25/20": 290,
    "11/26/20": 212,
    "11/27/20": 226,
    "11/28/20": 123,
    "11/29/20": 127,
    "11/30/20": 249,
    "12/1/20": 283,
    "12/2/20": 219,
    "12/3/20": 263,
    "12/4/20": 278,
    "12/5/20": 130,
    "12/6/20": 253,
    "12/7/20": 260,
    "12/8/20": 235,
    "12/9/20": 230,
    "12/10/20": 174,
    "12/11/20": 213,
    "12/12/20": 73,
    "12/13/20": 126,
  },
};

export const testTwoCountryCovidCaseCounts = [
  {
    countryName: "Afghanistan",
    countryData: {
      "2/24/20": 1,
      "2/25/20": 1,
      "2/26/20": 1,
      "2/27/20": 1,
      "2/28/20": 1,
      "2/29/20": 1,
      "3/1/20": 1,
      "3/2/20": 1,
      "3/3/20": 2,
      "3/4/20": 4,
      "3/5/20": 4,
      "3/6/20": 4,
      "3/7/20": 4,
      "3/8/20": 5,
      "3/9/20": 7,
    },
  },
  {
    countryName: "Albania",
    countryData: {
      "2/24/20": 1,
      "2/25/20": 1,
      "2/26/20": 1,
      "2/27/20": 1,
      "2/28/20": 1,
      "2/29/20": 1,
      "3/1/20": 1,
      "3/2/20": 1,
      "3/3/20": 2,
      "3/4/20": 4,
      "3/5/20": 4,
      "3/6/20": 4,
      "3/7/20": 4,
      "3/8/20": 5,
      "3/9/20": 7,
    },
  },
];

export const testTwoCountryCovidDeathCounts = [
  {
    countryName: "Afghanistan",
    countryData: {
      "2/24/20": 0,
      "2/25/20": 0,
      "2/26/20": 0,
      "2/27/20": 0,
      "2/28/20": 0,
      "2/29/20": 0,
      "3/1/20": 0,
      "3/2/20": 0,
      "3/3/20": 0,
      "3/4/20": 0,
      "3/5/20": 0,
      "3/6/20": 0,
      "3/7/20": 4,
      "3/8/20": 5,
      "3/9/20": 7,
    },
  },
  {
    countryName: "Albania",
    countryData: {
      "2/24/20": 0,
      "2/25/20": 0,
      "2/26/20": 0,
      "2/27/20": 0,
      "2/28/20": 0,
      "2/29/20": 0,
      "3/1/20": 0,
      "3/2/20": 0,
      "3/3/20": 0,
      "3/4/20": 0,
      "3/5/20": 0,
      "3/6/20": 0,
      "3/7/20": 4,
      "3/8/20": 5,
      "3/9/20": 7,
    },
  },
];

export const expectedAllCountriesChartData = [
  [
    {
      type: "date",
      label: "Date",
    },
    {
      type: "number",
      label: "COVID-19 Cases",
    },
  ],
  [new Date("2/24/20"), 2],
  [new Date("2/25/20"), 2],
  [new Date("2/26/20"), 2],
  [new Date("2/27/20"), 2],
  [new Date("2/28/20"), 2],
  [new Date("2/29/20"), 2],
  [new Date("3/01/20"), 2],
  [new Date("3/02/20"), 2],
  [new Date("3/03/20"), 4],
  [new Date("3/04/20"), 8],
  [new Date("3/05/20"), 8],
  [new Date("3/06/20"), 8],
  [new Date("3/07/20"), 8],
  [new Date("3/08/20"), 10],
  [new Date("3/09/20"), 14],
];

export const expectedOneCountryChartData = [
  [
    {
      type: "date",
      label: "Date",
    },
    {
      type: "number",
      label: "COVID-19 Cases",
    },
  ],
  [new Date("2/24/20"), 1],
  [new Date("2/25/20"), 1],
  [new Date("2/26/20"), 1],
  [new Date("2/27/20"), 1],
  [new Date("2/28/20"), 1],
  [new Date("2/29/20"), 1],
  [new Date("3/01/20"), 1],
  [new Date("3/02/20"), 1],
  [new Date("3/03/20"), 2],
  [new Date("3/04/20"), 4],
  [new Date("3/05/20"), 4],
  [new Date("3/06/20"), 4],
  [new Date("3/07/20"), 4],
  [new Date("3/08/20"), 5],
  [new Date("3/09/20"), 7],
];

export const covidCaseCountsDictionary = {
  Afghanistan: 38,
  Albania: 38,
  Algeria: 38,
  Andorra: 38,
  Angola: 38,
  "Antigua and Barbuda": 38,
  Argentina: 38,
  Armenia: 38,
  Australia: 38,
  Austria: 38,
  Azerbaijan: 38,
  Bahamas: 38,
  Bahrain: 38,
  Bangladesh: 38,
  Barbados: 38,
  Belarus: 38,
  Belgium: 38,
  Belize: 38,
  Benin: 38,
  Bhutan: 38,
  Bolivia: 38,
  "Bosnia and Herzegovina": 38,
  Botswana: 38,
  Brazil: 38,
  Brunei: 38,
  Bulgaria: 38,
  "Burkina Faso": 38,
  Burundi: 38,
  "Cabo Verde": 38,
  Cambodia: 38,
  Cameroon: 38,
  Canada: 38,
  "Central African Republic": 38,
  Chad: 38,
  Chile: 38,
  China: 38,
  Colombia: 38,
  Comoros: 38,
  Congo: 38,
  "Costa Rica": 38,
  Croatia: 38,
  Cuba: 38,
  Cyprus: 38,
  Czechia: 38,
  "Cote dIvoire": 38,
  Denmark: 38,
  Djibouti: 38,
  Dominica: 38,
  "Dominican Republic": 38,
  "Democratic Republic of the Congo": 38,
  Ecuador: 38,
  Egypt: 38,
  "El Salvador": 38,
  "Equatorial Guinea": 38,
  Eritrea: 38,
  Estonia: 38,
  Eswatini: 38,
  Ethiopia: 38,
  Fiji: 38,
  Finland: 38,
  France: 38,
  Gabon: 38,
  Gambia: 38,
  Georgia: 38,
  Germany: 38,
  Ghana: 38,
  Greece: 38,
  Greenland: 38,
  Grenada: 38,
  Guatemala: 38,
  Guinea: 38,
  "Guinea-Bissau": 38,
  Guyana: 38,
  Haiti: 38,
  "Holy See": 38,
  Honduras: 38,
  Hungary: 38,
  Iceland: 38,
  India: 38,
  Indonesia: 38,
  Iran: 38,
  Iraq: 38,
  Ireland: 38,
  Israel: 38,
  Italy: 38,
  Jamaica: 38,
  Japan: 38,
  Jordan: 38,
  Kazakhstan: 38,
  Kenya: 38,
  Kosovo: 38,
  "South Korea": 38,
  Kuwait: 38,
  Kyrgyzstan: 38,
  Laos: 38,
  Latvia: 38,
  Lebanon: 38,
  Lesotho: 38,
  Liberia: 38,
  Libya: 38,
  Liechtenstein: 38,
  Lithuania: 38,
  Luxembourg: 38,
  Macedonia: 38,
  Madagascar: 38,
  Malawi: 38,
  Malaysia: 38,
  Maldives: 38,
  Mali: 38,
  Malta: 38,
  "Marshall Islands": 38,
  Mauritania: 38,
  Mauritius: 38,
  Mexico: 38,
  Moldova: 38,
  Monaco: 38,
  Mongolia: 38,
  Montenegro: 38,
  Morocco: 38,
  Mozambique: 38,
  Myanmar: 38,
  Namibia: 38,
  Nepal: 38,
  Netherlands: 38,
  "New Zealand": 38,
  Nicaragua: 38,
  Niger: 38,
  Nigeria: 38,
  Norway: 38,
  Oman: 38,
  Pakistan: 38,
  Panama: 38,
  "Papua New Guinea": 38,
  Paraguay: 38,
  Peru: 38,
  Philippines: 38,
  Poland: 38,
  Portugal: 38,
  Qatar: 38,
  Romania: 38,
  Russia: 38,
  Rwanda: 38,
  "Saint Kitts and Nevis": 38,
  "Saint Lucia": 38,
  "Saint Vincent and the Grenadines": 38,
  Samoa: 38,
  "San Marino": 38,
  "Sao Tome and Principe": 38,
  "Saudi Arabia": 38,
  Senegal: 38,
  Serbia: 38,
  Seychelles: 38,
  "Sierra Leone": 38,
  Singapore: 38,
  Slovakia: 38,
  Slovenia: 38,
  "Solomon Islands": 38,
  Somalia: 38,
  "South Africa": 38,
  "South Sudan": 38,
  Spain: 38,
  "Sri Lanka": 38,
  Sudan: 38,
  Suriname: 38,
  Sweden: 38,
  Switzerland: 38,
  Syria: 38,
  Taiwan: 38,
  Tajikistan: 38,
  Tanzania: 38,
  Thailand: 38,
  "Timor-Leste": 38,
  Togo: 38,
  "Trinidad and Tobago": 38,
  Tunisia: 38,
  Turkey: 38,
  Uganda: 38,
  Ukraine: 38,
  "United Arab Emirates": 38,
  "United Kingdom": 38,
  "United States of America": 0,
  Uruguay: 38,
  Uzbekistan: 38,
  Vanuatu: 38,
  Venezuela: 38,
  Vietnam: 38,
  Yemen: 38,
  Zambia: 38,
  Zimbabwe: 38,
};
