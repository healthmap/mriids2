// This file has test data for the unit tests.

export const testGuineaData = {
  Guinea: {
    "2014-10-06": {
      projections: {
        oneWeek: 179,
        twoWeeks: 210.5,
        threeWeeks: 251,
        fourWeeks: 296,
      },
      value: "126",
    },
    "2014-10-13": {
      projections: {
        oneWeek: 153,
        twoWeeks: 163,
        threeWeeks: 175,
        fourWeeks: 190,
      },
      value: "114",
    },
  },
};

export const testGuineaDataOutOfDateRange = {
  Guinea: {
    "2013-10-06": {
      projections: {
        oneWeek: 179,
        twoWeeks: 210.5,
        threeWeeks: 251,
        fourWeeks: 296,
      },
      value: "126",
    },
    "2014-10-13": {
      projections: {
        oneWeek: 153,
        twoWeeks: 163,
        threeWeeks: 175,
        fourWeeks: 190,
      },
      value: "114",
    },
  },
};

export const allCountriesEbolaData = {
  Guinea: {
    "2014-10-06": {
      projections: {
        oneWeek: 179,
        twoWeeks: 210.5,
        threeWeeks: 251,
        fourWeeks: 296,
      },
      value: "126",
    },
  },
  Liberia: {
    "2014-10-06": {
      projections: {
        oneWeek: 179,
        twoWeeks: 210.5,
        threeWeeks: 251,
        fourWeeks: 296,
      },
      value: "126",
    },
  },
  "Sierra Leone": {
    "2014-10-06": {
      projections: {
        oneWeek: 179,
        twoWeeks: 210.5,
        threeWeeks: 251,
        fourWeeks: 296,
      },
      value: "126",
    },
  },
};

export const allCountriesEbolaDataLiberiaOutOfDateRange = {
  Guinea: {
    "2014-10-06": {
      projections: {
        oneWeek: 179,
        twoWeeks: 210.5,
        threeWeeks: 251,
        fourWeeks: 296,
      },
      value: "126",
    },
  },
  Liberia: {
    "2013-10-06": {
      projections: {
        oneWeek: 179,
        twoWeeks: 210.5,
        threeWeeks: 251,
        fourWeeks: 296,
      },
      value: "126",
    },
  },
  "Sierra Leone": {
    "2014-10-06": {
      projections: {
        oneWeek: 179,
        twoWeeks: 210.5,
        threeWeeks: 251,
        fourWeeks: 296,
      },
      value: "126",
    },
  },
};

export const testGuineaFiltersState = {
  country: "Guinea",
  outbreak: "Ebola Outbreak",
  view: "snapshot",
  projection: false,
  dateRange: { from: new Date(2014, 9, 1), to: new Date(2016, 1, 20) },
};

export const testEbolaDataCombined = [
  {
    week_starting: "2014-10-05",
    projection_from: "2014-10-06",
    Liberia: "290",
    "Sierra Leone": "480",
    Guinea: "126",
    aggregated: "896",
    "y1.aggregated": "1336",
    "y1.Guinea": "179",
    "y1.Liberia": "560",
    "y1.Sierra Leone": "592",
    "y2.aggregated": "1598",
    "y2.Guinea": "210.5",
    "y2.Liberia": "582",
    "y2.Sierra Leone": "745",
    "y3.aggregated": "1946",
    "y3.Guinea": "251",
    "y3.Liberia": "639",
    "y3.Sierra Leone": "920.5",
    "y4.aggregated": "2392",
    "y4.Guinea": "296",
    "y4.Liberia": "727",
    "y4.Sierra Leone": "1141.5",
    "ymin1.aggregated": "1203",
    "ymin1.Guinea": "144",
    "ymin1.Liberia": "281",
    "ymin1.Sierra Leone": "526.975",
    "ymin2.aggregated": "1457.975",
    "ymin2.Guinea": "171",
    "ymin2.Liberia": "383",
    "ymin2.Sierra Leone": "648.975",
    "ymin3.aggregated": "1740.9",
    "ymin3.Guinea": "204",
    "ymin3.Liberia": "516.975",
    "ymin3.Sierra Leone": "780",
    "ymin4.aggregated": "2090.875",
    "ymin4.Guinea": "240",
    "ymin4.Liberia": "631.95",
    "ymin4.Sierra Leone": "943.975",
    "ymax1.aggregated": "1475.05",
    "ymax1.Guinea": "247",
    "ymax1.Liberia": "626",
    "ymax1.Sierra Leone": "887.025",
    "ymax2.aggregated": "1773.175",
    "ymax2.Guinea": "340.025",
    "ymax2.Liberia": "655.025",
    "ymax2.Sierra Leone": "1230.025",
    "ymax3.aggregated": "2199.025",
    "ymax3.Guinea": "481",
    "ymax3.Liberia": "732.025",
    "ymax3.Sierra Leone": "1732",
    "ymax4.aggregated": "2798.15",
    "ymax4.Guinea": "682.025",
    "ymax4.Liberia": "891.125",
    "ymax4.Sierra Leone": "2452.075",
  },
  {
    week_starting: "2014-10-12",
    projection_from: "2014-10-13",
    Liberia: "320",
    "Sierra Leone": "425",
    Guinea: "114",
    aggregated: "859",
    "y1.aggregated": "950",
    "y1.Guinea": "153",
    "y1.Liberia": "229",
    "y1.Sierra Leone": "566",
    "y2.aggregated": "987.5",
    "y2.Guinea": "163",
    "y2.Liberia": "192",
    "y2.Sierra Leone": "630",
    "y3.aggregated": "1047.5",
    "y3.Guinea": "175",
    "y3.Liberia": "161",
    "y3.Sierra Leone": "709",
    "y4.aggregated": "1127",
    "y4.Guinea": "190",
    "y4.Liberia": "138",
    "y4.Sierra Leone": "791",
    "ymin1.aggregated": "882",
    "ymin1.Guinea": "118",
    "ymin1.Liberia": "189",
    "ymin1.Sierra Leone": "493",
    "ymin2.aggregated": "914.95",
    "ymin2.Guinea": "126",
    "ymin2.Liberia": "153.975",
    "ymin2.Sierra Leone": "527.975",
    "ymin3.aggregated": "966",
    "ymin3.Guinea": "131",
    "ymin3.Liberia": "123.975",
    "ymin3.Sierra Leone": "568",
    "ymin4.aggregated": "1026.925",
    "ymin4.Guinea": "134.975",
    "ymin4.Liberia": "101.975",
    "ymin4.Sierra Leone": "607.975",
    "ymax1.aggregated": "1017.025",
    "ymax1.Guinea": "191",
    "ymax1.Liberia": "270",
    "ymax1.Sierra Leone": "644.05",
    "ymax2.aggregated": "1061.025",
    "ymax2.Guinea": "206",
    "ymax2.Liberia": "235",
    "ymax2.Sierra Leone": "747",
    "ymax3.aggregated": "1137.025",
    "ymax3.Guinea": "232",
    "ymax3.Liberia": "205",
    "ymax3.Sierra Leone": "869",
    "ymax4.aggregated": "1238",
    "ymax4.Guinea": "261",
    "ymax4.Liberia": "181.025",
    "ymax4.Sierra Leone": "1024",
  },
];

export const testEbolaDataCombinedOutOfDateRange = [
  {
    week_starting: "2014-10-05",
    projection_from: "2013-10-06",
    Liberia: "290",
    "Sierra Leone": "480",
    Guinea: "126",
    aggregated: "896",
    "y1.aggregated": "1336",
    "y1.Guinea": "179",
    "y1.Liberia": "560",
    "y1.Sierra Leone": "592",
    "y2.aggregated": "1598",
    "y2.Guinea": "210.5",
    "y2.Liberia": "582",
    "y2.Sierra Leone": "745",
    "y3.aggregated": "1946",
    "y3.Guinea": "251",
    "y3.Liberia": "639",
    "y3.Sierra Leone": "920.5",
    "y4.aggregated": "2392",
    "y4.Guinea": "296",
    "y4.Liberia": "727",
    "y4.Sierra Leone": "1141.5",
    "ymin1.aggregated": "1203",
    "ymin1.Guinea": "144",
    "ymin1.Liberia": "281",
    "ymin1.Sierra Leone": "526.975",
    "ymin2.aggregated": "1457.975",
    "ymin2.Guinea": "171",
    "ymin2.Liberia": "383",
    "ymin2.Sierra Leone": "648.975",
    "ymin3.aggregated": "1740.9",
    "ymin3.Guinea": "204",
    "ymin3.Liberia": "516.975",
    "ymin3.Sierra Leone": "780",
    "ymin4.aggregated": "2090.875",
    "ymin4.Guinea": "240",
    "ymin4.Liberia": "631.95",
    "ymin4.Sierra Leone": "943.975",
    "ymax1.aggregated": "1475.05",
    "ymax1.Guinea": "247",
    "ymax1.Liberia": "626",
    "ymax1.Sierra Leone": "887.025",
    "ymax2.aggregated": "1773.175",
    "ymax2.Guinea": "340.025",
    "ymax2.Liberia": "655.025",
    "ymax2.Sierra Leone": "1230.025",
    "ymax3.aggregated": "2199.025",
    "ymax3.Guinea": "481",
    "ymax3.Liberia": "732.025",
    "ymax3.Sierra Leone": "1732",
    "ymax4.aggregated": "2798.15",
    "ymax4.Guinea": "682.025",
    "ymax4.Liberia": "891.125",
    "ymax4.Sierra Leone": "2452.075",
  },
  {
    week_starting: "2014-10-12",
    projection_from: "2014-10-13",
    Liberia: "320",
    "Sierra Leone": "425",
    Guinea: "114",
    aggregated: "859",
    "y1.aggregated": "950",
    "y1.Guinea": "153",
    "y1.Liberia": "229",
    "y1.Sierra Leone": "566",
    "y2.aggregated": "987.5",
    "y2.Guinea": "163",
    "y2.Liberia": "192",
    "y2.Sierra Leone": "630",
    "y3.aggregated": "1047.5",
    "y3.Guinea": "175",
    "y3.Liberia": "161",
    "y3.Sierra Leone": "709",
    "y4.aggregated": "1127",
    "y4.Guinea": "190",
    "y4.Liberia": "138",
    "y4.Sierra Leone": "791",
    "ymin1.aggregated": "882",
    "ymin1.Guinea": "118",
    "ymin1.Liberia": "189",
    "ymin1.Sierra Leone": "493",
    "ymin2.aggregated": "914.95",
    "ymin2.Guinea": "126",
    "ymin2.Liberia": "153.975",
    "ymin2.Sierra Leone": "527.975",
    "ymin3.aggregated": "966",
    "ymin3.Guinea": "131",
    "ymin3.Liberia": "123.975",
    "ymin3.Sierra Leone": "568",
    "ymin4.aggregated": "1026.925",
    "ymin4.Guinea": "134.975",
    "ymin4.Liberia": "101.975",
    "ymin4.Sierra Leone": "607.975",
    "ymax1.aggregated": "1017.025",
    "ymax1.Guinea": "191",
    "ymax1.Liberia": "270",
    "ymax1.Sierra Leone": "644.05",
    "ymax2.aggregated": "1061.025",
    "ymax2.Guinea": "206",
    "ymax2.Liberia": "235",
    "ymax2.Sierra Leone": "747",
    "ymax3.aggregated": "1137.025",
    "ymax3.Guinea": "232",
    "ymax3.Liberia": "205",
    "ymax3.Sierra Leone": "869",
    "ymax4.aggregated": "1238",
    "ymax4.Guinea": "261",
    "ymax4.Liberia": "181.025",
    "ymax4.Sierra Leone": "1024",
  },
];

export const testEbolaDataCombinedLastWeekOutOfDateRange = [
  {
    week_starting: "2014-10-05",
    projection_from: "2014-10-06",
    Liberia: "290",
    "Sierra Leone": "480",
    Guinea: "126",
    aggregated: "896",
    "y1.aggregated": "1336",
    "y1.Guinea": "179",
    "y1.Liberia": "560",
    "y1.Sierra Leone": "592",
    "y2.aggregated": "1598",
    "y2.Guinea": "210.5",
    "y2.Liberia": "582",
    "y2.Sierra Leone": "745",
    "y3.aggregated": "1946",
    "y3.Guinea": "251",
    "y3.Liberia": "639",
    "y3.Sierra Leone": "920.5",
    "y4.aggregated": "2392",
    "y4.Guinea": "296",
    "y4.Liberia": "727",
    "y4.Sierra Leone": "1141.5",
    "ymin1.aggregated": "1203",
    "ymin1.Guinea": "144",
    "ymin1.Liberia": "281",
    "ymin1.Sierra Leone": "526.975",
    "ymin2.aggregated": "1457.975",
    "ymin2.Guinea": "171",
    "ymin2.Liberia": "383",
    "ymin2.Sierra Leone": "648.975",
    "ymin3.aggregated": "1740.9",
    "ymin3.Guinea": "204",
    "ymin3.Liberia": "516.975",
    "ymin3.Sierra Leone": "780",
    "ymin4.aggregated": "2090.875",
    "ymin4.Guinea": "240",
    "ymin4.Liberia": "631.95",
    "ymin4.Sierra Leone": "943.975",
    "ymax1.aggregated": "1475.05",
    "ymax1.Guinea": "247",
    "ymax1.Liberia": "626",
    "ymax1.Sierra Leone": "887.025",
    "ymax2.aggregated": "1773.175",
    "ymax2.Guinea": "340.025",
    "ymax2.Liberia": "655.025",
    "ymax2.Sierra Leone": "1230.025",
    "ymax3.aggregated": "2199.025",
    "ymax3.Guinea": "481",
    "ymax3.Liberia": "732.025",
    "ymax3.Sierra Leone": "1732",
    "ymax4.aggregated": "2798.15",
    "ymax4.Guinea": "682.025",
    "ymax4.Liberia": "891.125",
    "ymax4.Sierra Leone": "2452.075",
  },
  {
    week_starting: "2014-10-12",
    projection_from: "2020-10-13",
    Liberia: "320",
    "Sierra Leone": "425",
    Guinea: "114",
    aggregated: "859",
    "y1.aggregated": "950",
    "y1.Guinea": "153",
    "y1.Liberia": "229",
    "y1.Sierra Leone": "566",
    "y2.aggregated": "987.5",
    "y2.Guinea": "163",
    "y2.Liberia": "192",
    "y2.Sierra Leone": "630",
    "y3.aggregated": "1047.5",
    "y3.Guinea": "175",
    "y3.Liberia": "161",
    "y3.Sierra Leone": "709",
    "y4.aggregated": "1127",
    "y4.Guinea": "190",
    "y4.Liberia": "138",
    "y4.Sierra Leone": "791",
    "ymin1.aggregated": "882",
    "ymin1.Guinea": "118",
    "ymin1.Liberia": "189",
    "ymin1.Sierra Leone": "493",
    "ymin2.aggregated": "914.95",
    "ymin2.Guinea": "126",
    "ymin2.Liberia": "153.975",
    "ymin2.Sierra Leone": "527.975",
    "ymin3.aggregated": "966",
    "ymin3.Guinea": "131",
    "ymin3.Liberia": "123.975",
    "ymin3.Sierra Leone": "568",
    "ymin4.aggregated": "1026.925",
    "ymin4.Guinea": "134.975",
    "ymin4.Liberia": "101.975",
    "ymin4.Sierra Leone": "607.975",
    "ymax1.aggregated": "1017.025",
    "ymax1.Guinea": "191",
    "ymax1.Liberia": "270",
    "ymax1.Sierra Leone": "644.05",
    "ymax2.aggregated": "1061.025",
    "ymax2.Guinea": "206",
    "ymax2.Liberia": "235",
    "ymax2.Sierra Leone": "747",
    "ymax3.aggregated": "1137.025",
    "ymax3.Guinea": "232",
    "ymax3.Liberia": "205",
    "ymax3.Sierra Leone": "869",
    "ymax4.aggregated": "1238",
    "ymax4.Guinea": "261",
    "ymax4.Liberia": "181.025",
    "ymax4.Sierra Leone": "1024",
  },
];

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
