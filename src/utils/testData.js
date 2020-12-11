export const testCovidData = [
  {
    country: "Canada",
    province: [
      "alberta",
      "british columbia",
      "diamond princess",
      "grand princess",
      "manitoba",
      "new brunswick",
      "newfoundland and labrador",
      "northwest territories",
      "nova scotia",
      "nunavut",
      "ontario",
      "prince edward island",
      "quebec",
      "repatriated travellers",
      "saskatchewan",
      "yukon",
    ],
    timeline: {
      cases: {
        "11/11/20": 280465,
        "11/12/20": 285939,
      },
      deaths: {
        "11/11/20": 10748,
        "11/12/20": 10828,
      },
      recovered: {
        "11/11/20": 0,
        "11/12/20": 0,
      },
    },
  },
  {
    country: "Honduras",
    province: ["mainland"],
    timeline: {
      cases: {
        "11/11/20": 101169,
        "11/12/20": 101468,
      },
      deaths: {
        "11/11/20": 2797,
        "11/12/20": 2804,
      },
      recovered: {
        "11/11/20": 43857,
        "11/12/20": 44068,
      },
    },
  },
  {
    message: "Country not found or doesn't have any historical data",
  },
];

export const testParsedCovidData = [
  {
    countryName: "Afghanistan",
    cases: { "10/28/20": 30000, "11/28/20": 40000, "11/29/20": 46215 },
    deaths: { "11/29/20": 1763 },
  },
  {
    countryName: "Zimbabwe",
    cases: { "10/28/20": 30000, "11/28/20": 40000, "11/29/20": 46215 },
    deaths: { "11/29/20": 1763 },
  },
];

export const testCovidDataCombined = {
  isFetching: 0,
  data: {
    cases: {
      "1/22/20": 555,
      "1/23/20": 654,
      "1/24/20": 941,
      "1/25/20": 1434,
      "1/26/20": 2118,
      "1/27/20": 2927,
      "1/28/20": 5578,
      "1/29/20": 6167,
    },
    deaths: {
      "1/22/20": 17,
      "1/23/20": 18,
      "1/24/20": 26,
      "1/25/20": 42,
      "1/26/20": 56,
      "1/27/20": 82,
      "1/28/20": 131,
      "1/29/20": 133,
    },
    recovered: {},
  },
  error: {},
};

export const testObjectDateKeys = {
  "1/22/20": 0,
  "1/23/20": 0,
  "1/24/20": 0,
  "1/25/20": 0,
  "1/26/20": 0,
  "1/27/20": 0,
  "1/28/20": 0,
  "1/29/20": 0,
  "1/30/20": 0,
  "1/31/20": 0,
  "2/1/20": 0,
  "2/2/20": 0,
  "2/3/20": 0,
  "2/4/20": 0,
  "2/5/20": 0,
  "2/6/20": 0,
  "2/7/20": 0,
  "2/8/20": 0,
  "2/9/20": 0,
  "2/10/20": 0,
  "2/11/20": 0,
  "2/12/20": 0,
};

export const testCountryCovidData = [
  {
    countryName: "Afghanistan",
    cases: {
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
