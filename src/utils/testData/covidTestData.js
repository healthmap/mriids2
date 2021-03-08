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
    "11/23/20": { totalCount: 203, per100kCount: 20 },
    "11/24/20": { totalCount: 282, per100kCount: 28 },
    "11/25/20": { totalCount: 290, per100kCount: 29 },
    "11/26/20": { totalCount: 212, per100kCount: 22 },
    "11/27/20": { totalCount: 226, per100kCount: 23 },
    "11/28/20": { totalCount: 123, per100kCount: 12 },
    "11/29/20": { totalCount: 127, per100kCount: 13 },
    "11/30/20": { totalCount: 249, per100kCount: 25 },
    "12/1/20": { totalCount: 283, per100kCount: 28 },
    "12/2/20": { totalCount: 219, per100kCount: 22 },
    "12/3/20": { totalCount: 263, per100kCount: 26 },
    "12/4/20": { totalCount: 278, per100kCount: 28 },
    "12/5/20": { totalCount: 130, per100kCount: 13 },
    "12/6/20": { totalCount: 253, per100kCount: 25 },
    "12/7/20": { totalCount: 260, per100kCount: 26 },
    "12/8/20": { totalCount: 235, per100kCount: 24 },
    "12/9/20": { totalCount: 230, per100kCount: 23 },
    "12/10/20": { totalCount: 174, per100kCount: 17 },
    "12/11/20": { totalCount: 213, per100kCount: 21 },
    "12/12/20": { totalCount: 73, per100kCount: 7 },
    "12/13/20": { totalCount: 126, per100kCount: 13 },
  },
};

export const testTwoCountryCovidCaseCounts = [
  {
    countryName: "Afghanistan",
    countryData: {
      "2/24/20": { totalCount: 1, per100kCount: 1 },
      "2/25/20": { totalCount: 1, per100kCount: 1 },
      "2/26/20": { totalCount: 1, per100kCount: 1 },
      "2/27/20": { totalCount: 1, per100kCount: 1 },
      "2/28/20": { totalCount: 1, per100kCount: 1 },
      "2/29/20": { totalCount: 1, per100kCount: 1 },
      "3/1/20": { totalCount: 1, per100kCount: 1 },
      "3/2/20": { totalCount: 1, per100kCount: 1 },
      "3/3/20": { totalCount: 2, per100kCount: 2 },
      "3/4/20": { totalCount: 4, per100kCount: 4 },
      "3/5/20": { totalCount: 4, per100kCount: 4 },
      "3/6/20": { totalCount: 4, per100kCount: 4 },
      "3/7/20": { totalCount: 4, per100kCount: 4 },
      "3/8/20": { totalCount: 5, per100kCount: 5 },
      "3/9/20": { totalCount: 7, per100kCount: 7 },
    },
  },
  {
    countryName: "Albania",
    countryData: {
      "2/24/20": { totalCount: 1, per100kCount: 1 },
      "2/25/20": { totalCount: 1, per100kCount: 1 },
      "2/26/20": { totalCount: 1, per100kCount: 1 },
      "2/27/20": { totalCount: 1, per100kCount: 1 },
      "2/28/20": { totalCount: 1, per100kCount: 1 },
      "2/29/20": { totalCount: 1, per100kCount: 1 },
      "3/1/20": { totalCount: 1, per100kCount: 1 },
      "3/2/20": { totalCount: 1, per100kCount: 1 },
      "3/3/20": { totalCount: 2, per100kCount: 2 },
      "3/4/20": { totalCount: 4, per100kCount: 4 },
      "3/5/20": { totalCount: 4, per100kCount: 4 },
      "3/6/20": { totalCount: 4, per100kCount: 4 },
      "3/7/20": { totalCount: 4, per100kCount: 4 },
      "3/8/20": { totalCount: 5, per100kCount: 5 },
      "3/9/20": { totalCount: 7, per100kCount: 7 },
    },
  },
];

export const testTwoCountryCovidDeathCounts = [
  {
    countryName: "Afghanistan",
    countryData: {
      "2/24/20": { totalCount: 0, per100kCount: 0 },
      "2/25/20": { totalCount: 0, per100kCount: 0 },
      "2/26/20": { totalCount: 0, per100kCount: 0 },
      "2/27/20": { totalCount: 0, per100kCount: 0 },
      "2/28/20": { totalCount: 0, per100kCount: 0 },
      "2/29/20": { totalCount: 0, per100kCount: 0 },
      "3/1/20": { totalCount: 0, per100kCount: 0 },
      "3/2/20": { totalCount: 0, per100kCount: 0 },
      "3/3/20": { totalCount: 0, per100kCount: 0 },
      "3/4/20": { totalCount: 0, per100kCount: 0 },
      "3/5/20": { totalCount: 0, per100kCount: 0 },
      "3/6/20": { totalCount: 0, per100kCount: 0 },
      "3/7/20": { totalCount: 4, per100kCount: 4 },
      "3/8/20": { totalCount: 5, per100kCount: 5 },
      "3/9/20": { totalCount: 7, per100kCount: 7 },
    },
  },
  {
    countryName: "Albania",
    countryData: {
      "2/24/20": { totalCount: 0, per100kCount: 0 },
      "2/25/20": { totalCount: 0, per100kCount: 0 },
      "2/26/20": { totalCount: 0, per100kCount: 0 },
      "2/27/20": { totalCount: 0, per100kCount: 0 },
      "2/28/20": { totalCount: 0, per100kCount: 0 },
      "2/29/20": { totalCount: 0, per100kCount: 0 },
      "3/1/20": { totalCount: 0, per100kCount: 0 },
      "3/2/20": { totalCount: 0, per100kCount: 0 },
      "3/3/20": { totalCount: 0, per100kCount: 0 },
      "3/4/20": { totalCount: 0, per100kCount: 0 },
      "3/5/20": { totalCount: 0, per100kCount: 0 },
      "3/6/20": { totalCount: 0, per100kCount: 0 },
      "3/7/20": { totalCount: 4, per100kCount: 4 },
      "3/8/20": { totalCount: 5, per100kCount: 5 },
      "3/9/20": { totalCount: 7, per100kCount: 7 },
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
  Afghanistan: {
    per100kCount: 38,
    totalCount: 0,
  },
  Albania: {
    per100kCount: 38,
    totalCount: 0,
  },
  Algeria: {
    per100kCount: 38,
    totalCount: 0,
  },
  Andorra: {
    per100kCount: 38,
    totalCount: 0,
  },
  Angola: {
    per100kCount: 38,
    totalCount: 0,
  },
  "Antigua and Barbuda": {
    per100kCount: 38,
    totalCount: 0,
  },
  Argentina: {
    per100kCount: 38,
    totalCount: 0,
  },
  Armenia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Australia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Austria: {
    per100kCount: 38,
    totalCount: 0,
  },
  Azerbaijan: {
    per100kCount: 38,
    totalCount: 0,
  },
  Bahamas: {
    per100kCount: 38,
    totalCount: 0,
  },
  Bahrain: {
    per100kCount: 38,
    totalCount: 0,
  },
  Bangladesh: {
    per100kCount: 38,
    totalCount: 0,
  },
  Barbados: {
    per100kCount: 38,
    totalCount: 0,
  },
  Belarus: {
    per100kCount: 38,
    totalCount: 0,
  },
  Belgium: {
    per100kCount: 38,
    totalCount: 0,
  },
  Belize: {
    per100kCount: 38,
    totalCount: 0,
  },
  Benin: {
    per100kCount: 38,
    totalCount: 0,
  },
  Bhutan: {
    per100kCount: 38,
    totalCount: 0,
  },
  Bolivia: {
    per100kCount: 38,
    totalCount: 0,
  },
  "Bosnia and Herzegovina": {
    per100kCount: 38,
    totalCount: 0,
  },
  Botswana: {
    per100kCount: 38,
    totalCount: 0,
  },
  Brazil: {
    per100kCount: 38,
    totalCount: 0,
  },
  Brunei: {
    per100kCount: 38,
    totalCount: 0,
  },
  Bulgaria: {
    per100kCount: 38,
    totalCount: 0,
  },
  "Burkina Faso": {
    per100kCount: 38,
    totalCount: 0,
  },
  Burundi: {
    per100kCount: 38,
    totalCount: 0,
  },
  "Cabo Verde": {
    per100kCount: 38,
    totalCount: 0,
  },
  Cambodia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Cameroon: {
    per100kCount: 38,
    totalCount: 0,
  },
  Canada: {
    per100kCount: 38,
    totalCount: 0,
  },
  "Central African Republic": {
    per100kCount: 38,
    totalCount: 0,
  },
  Chad: {
    per100kCount: 38,
    totalCount: 0,
  },
  Chile: {
    per100kCount: 38,
    totalCount: 0,
  },
  China: {
    per100kCount: 38,
    totalCount: 0,
  },
  Colombia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Comoros: {
    per100kCount: 38,
    totalCount: 0,
  },
  Congo: {
    per100kCount: 38,
    totalCount: 0,
  },
  "Costa Rica": {
    per100kCount: 38,
    totalCount: 0,
  },
  Croatia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Cuba: {
    per100kCount: 38,
    totalCount: 0,
  },
  Cyprus: {
    per100kCount: 38,
    totalCount: 0,
  },
  Czechia: {
    per100kCount: 38,
    totalCount: 0,
  },
  "Cote dIvoire": {
    per100kCount: 38,
    totalCount: 0,
  },
  Denmark: {
    per100kCount: 38,
    totalCount: 0,
  },
  Djibouti: {
    per100kCount: 38,
    totalCount: 0,
  },
  Dominica: {
    per100kCount: 38,
    totalCount: 0,
  },
  "Dominican Republic": {
    per100kCount: 38,
    totalCount: 0,
  },
  "Democratic Republic of the Congo": {
    per100kCount: 38,
    totalCount: 0,
  },
  Ecuador: {
    per100kCount: 38,
    totalCount: 0,
  },
  Egypt: {
    per100kCount: 38,
    totalCount: 0,
  },
  "El Salvador": {
    per100kCount: 38,
    totalCount: 0,
  },
  "Equatorial Guinea": {
    per100kCount: 38,
    totalCount: 0,
  },
  Eritrea: {
    per100kCount: 38,
    totalCount: 0,
  },
  Estonia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Eswatini: {
    per100kCount: 38,
    totalCount: 0,
  },
  Ethiopia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Fiji: {
    per100kCount: 38,
    totalCount: 0,
  },
  Finland: {
    per100kCount: 38,
    totalCount: 0,
  },
  France: {
    per100kCount: 38,
    totalCount: 0,
  },
  Gabon: {
    per100kCount: 38,
    totalCount: 0,
  },
  Gambia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Georgia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Germany: {
    per100kCount: 38,
    totalCount: 0,
  },
  Ghana: {
    per100kCount: 38,
    totalCount: 0,
  },
  Greece: {
    per100kCount: 38,
    totalCount: 0,
  },
  Greenland: {
    per100kCount: 38,
    totalCount: 0,
  },
  Grenada: {
    per100kCount: 38,
    totalCount: 0,
  },
  Guatemala: {
    per100kCount: 38,
    totalCount: 0,
  },
  Guinea: {
    per100kCount: 38,
    totalCount: 0,
  },
  "Guinea-Bissau": {
    per100kCount: 38,
    totalCount: 0,
  },
  Guyana: {
    per100kCount: 38,
    totalCount: 0,
  },
  Haiti: {
    per100kCount: 38,
    totalCount: 0,
  },
  "Holy See": {
    per100kCount: 38,
    totalCount: 0,
  },
  Honduras: {
    per100kCount: 38,
    totalCount: 100,
  },
  Hungary: {
    per100kCount: 38,
    totalCount: 0,
  },
  Iceland: {
    per100kCount: 38,
    totalCount: 0,
  },
  India: {
    per100kCount: 38,
    totalCount: 0,
  },
  Indonesia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Iran: {
    per100kCount: 38,
    totalCount: 0,
  },
  Iraq: {
    per100kCount: 38,
    totalCount: 0,
  },
  Ireland: {
    per100kCount: 38,
    totalCount: 0,
  },
  Israel: {
    per100kCount: 38,
    totalCount: 0,
  },
  Italy: {
    per100kCount: 38,
    totalCount: 0,
  },
  Jamaica: {
    per100kCount: 38,
    totalCount: 0,
  },
  Japan: {
    per100kCount: 38,
    totalCount: 0,
  },
  Jordan: {
    per100kCount: 38,
    totalCount: 0,
  },
  Kazakhstan: {
    per100kCount: 38,
    totalCount: 0,
  },
  Kenya: {
    per100kCount: 38,
    totalCount: 0,
  },
  Kosovo: {
    per100kCount: 38,
    totalCount: 0,
  },
  "South Korea": {
    per100kCount: 38,
    totalCount: 0,
  },
  Kuwait: {
    per100kCount: 38,
    totalCount: 0,
  },
  Kyrgyzstan: {
    per100kCount: 38,
    totalCount: 0,
  },
  Laos: {
    per100kCount: 38,
    totalCount: 0,
  },
  Latvia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Lebanon: {
    per100kCount: 38,
    totalCount: 0,
  },
  Lesotho: {
    per100kCount: 38,
    totalCount: 0,
  },
  Liberia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Libya: {
    per100kCount: 38,
    totalCount: 0,
  },
  Liechtenstein: {
    per100kCount: 38,
    totalCount: 0,
  },
  Lithuania: {
    per100kCount: 38,
    totalCount: 0,
  },
  Luxembourg: {
    per100kCount: 38,
    totalCount: 0,
  },
  Macedonia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Madagascar: {
    per100kCount: 38,
    totalCount: 0,
  },
  Malawi: {
    per100kCount: 38,
    totalCount: 0,
  },
  Malaysia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Maldives: {
    per100kCount: 38,
    totalCount: 0,
  },
  Mali: {
    per100kCount: 38,
    totalCount: 0,
  },
  Malta: {
    per100kCount: 38,
    totalCount: 0,
  },
  "Marshall Islands": {
    per100kCount: 38,
    totalCount: 0,
  },
  Mauritania: {
    per100kCount: 38,
    totalCount: 0,
  },
  Mauritius: {
    per100kCount: 38,
    totalCount: 0,
  },
  Mexico: {
    per100kCount: 38,
    totalCount: 0,
  },
  Moldova: {
    per100kCount: 38,
    totalCount: 0,
  },
  Monaco: {
    per100kCount: 38,
    totalCount: 0,
  },
  Mongolia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Montenegro: {
    per100kCount: 38,
    totalCount: 0,
  },
  Morocco: {
    per100kCount: 38,
    totalCount: 0,
  },
  Mozambique: {
    per100kCount: 38,
    totalCount: 0,
  },
  Myanmar: {
    per100kCount: 38,
    totalCount: 0,
  },
  Namibia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Nepal: {
    per100kCount: 38,
    totalCount: 0,
  },
  Netherlands: {
    per100kCount: 38,
    totalCount: 0,
  },
  "New Zealand": {
    per100kCount: 38,
    totalCount: 0,
  },
  Nicaragua: {
    per100kCount: 38,
    totalCount: 0,
  },
  Niger: {
    per100kCount: 38,
    totalCount: 0,
  },
  Nigeria: {
    per100kCount: 38,
    totalCount: 0,
  },
  Norway: {
    per100kCount: 38,
    totalCount: 0,
  },
  Oman: {
    per100kCount: 38,
    totalCount: 0,
  },
  Pakistan: {
    per100kCount: 38,
    totalCount: 0,
  },
  Panama: {
    per100kCount: 38,
    totalCount: 0,
  },
  "Papua New Guinea": {
    per100kCount: 38,
    totalCount: 0,
  },
  Paraguay: {
    per100kCount: 38,
    totalCount: 0,
  },
  Peru: {
    per100kCount: 38,
    totalCount: 0,
  },
  Philippines: {
    per100kCount: 38,
    totalCount: 0,
  },
  Poland: {
    per100kCount: 38,
    totalCount: 0,
  },
  Portugal: {
    per100kCount: 38,
    totalCount: 0,
  },
  Qatar: {
    per100kCount: 38,
    totalCount: 0,
  },
  Romania: {
    per100kCount: 38,
    totalCount: 0,
  },
  Russia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Rwanda: {
    per100kCount: 38,
    totalCount: 0,
  },
  "Saint Kitts and Nevis": {
    per100kCount: 38,
    totalCount: 0,
  },
  "Saint Lucia": {
    per100kCount: 38,
    totalCount: 0,
  },
  "Saint Vincent and the Grenadines": {
    per100kCount: 38,
    totalCount: 0,
  },
  Samoa: {
    per100kCount: 38,
    totalCount: 0,
  },
  "San Marino": {
    per100kCount: 38,
    totalCount: 0,
  },
  "Sao Tome and Principe": {
    per100kCount: 38,
    totalCount: 0,
  },
  "Saudi Arabia": {
    per100kCount: 38,
    totalCount: 0,
  },
  Senegal: {
    per100kCount: 38,
    totalCount: 0,
  },
  Serbia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Seychelles: {
    per100kCount: 38,
    totalCount: 0,
  },
  "Sierra Leone": {
    per100kCount: 38,
    totalCount: 0,
  },
  Singapore: {
    per100kCount: 38,
    totalCount: 0,
  },
  Slovakia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Slovenia: {
    per100kCount: 38,
    totalCount: 0,
  },
  "Solomon Islands": {
    per100kCount: 38,
    totalCount: 0,
  },
  Somalia: {
    per100kCount: 38,
    totalCount: 0,
  },
  "South Africa": {
    per100kCount: 38,
    totalCount: 0,
  },
  "South Sudan": {
    per100kCount: 38,
    totalCount: 0,
  },
  Spain: {
    per100kCount: 38,
    totalCount: 0,
  },
  "Sri Lanka": {
    per100kCount: 38,
    totalCount: 0,
  },
  Sudan: {
    per100kCount: 38,
    totalCount: 0,
  },
  Suriname: {
    per100kCount: 38,
    totalCount: 0,
  },
  Sweden: {
    per100kCount: 38,
    totalCount: 0,
  },
  Switzerland: {
    per100kCount: 38,
    totalCount: 0,
  },
  Syria: {
    per100kCount: 38,
    totalCount: 0,
  },
  Taiwan: {
    per100kCount: 38,
    totalCount: 0,
  },
  Tajikistan: {
    per100kCount: 38,
    totalCount: 0,
  },
  Tanzania: {
    per100kCount: 38,
    totalCount: 0,
  },
  Thailand: {
    per100kCount: 38,
    totalCount: 0,
  },
  "Timor-Leste": {
    per100kCount: 38,
    totalCount: 0,
  },
  Togo: {
    per100kCount: 38,
    totalCount: 0,
  },
  "Trinidad and Tobago": {
    per100kCount: 38,
    totalCount: 0,
  },
  Tunisia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Turkey: {
    per100kCount: 38,
    totalCount: 0,
  },
  Uganda: {
    per100kCount: 38,
    totalCount: 0,
  },
  Ukraine: {
    per100kCount: 38,
    totalCount: 0,
  },
  "United Arab Emirates": {
    per100kCount: 38,
    totalCount: 0,
  },
  "United Kingdom": {
    per100kCount: 38,
    totalCount: 0,
  },
  "United States of America": {
    per100kCount: 0,
    totalCount: 0,
  },
  Uruguay: {
    per100kCount: 38,
    totalCount: 0,
  },
  Uzbekistan: {
    per100kCount: 38,
    totalCount: 0,
  },
  Vanuatu: {
    per100kCount: 38,
    totalCount: 0,
  },
  Venezuela: {
    per100kCount: 38,
    totalCount: 0,
  },
  Vietnam: {
    per100kCount: 38,
    totalCount: 0,
  },
  Yemen: {
    per100kCount: 38,
    totalCount: 0,
  },
  Zambia: {
    per100kCount: 38,
    totalCount: 0,
  },
  Zimbabwe: {
    per100kCount: 38,
    totalCount: 0,
  },
};
