import {
  parseCovidData,
  getLastObjectKey,
  getCovidCaseCount,
  getLatestCountryCountInDateRange,
} from "../covidDataHelpers";
import { testCovidData, testParsedCovidData } from "../testData";
import { reduxInitialState } from "../../constants/CommonTestData";

// Filters for the covid outbreak in all countries.
const allCountriesCovidOutbreakFilters = {
  ...reduxInitialState.filters,
  outbreak: "COVID 19",
  dateRange: { from: new Date(2020, 1, 20), to: new Date(2020, 12, 20) },
};

// Filters for the covid outbreak in a specific country.
const specificCountryCovidOutbreakFilters = {
  ...reduxInitialState.filters,
  country: "Afghanistan",
  outbreak: "COVID 19",
  dateRange: { from: new Date(2020, 1, 20), to: new Date(2020, 12, 20) },
};

describe("Tests for the parseCovidData helper function", () => {
  test("should return data in the expected format", () => {
    expect(parseCovidData(testCovidData)).toEqual([
      {
        countryName: "Canada",
        cases: {
          "11/11/20": 280465,
          "11/12/20": 285939,
        },
        deaths: {
          "11/11/20": 10748,
          "11/12/20": 10828,
        },
      },
      {
        countryName: "Honduras",
        cases: {
          "11/11/20": 101169,
          "11/12/20": 101468,
        },
        deaths: {
          "11/11/20": 2797,
          "11/12/20": 2804,
        },
      },
    ]);
  });
});

describe("Tests for the getLastObjectKey helper function", () => {
  test("should return key of 11/29/20", () => {
    const countryCaseCount = testParsedCovidData[0].cases;
    expect(getLastObjectKey(countryCaseCount)).toEqual("11/29/20");
  });
});

describe("Tests for getLatestCountryCountInDateRange helper function", () => {
  const testDateRange = {
    from: new Date(2020, 10, 27),
    to: new Date(2020, 10, 30),
  };
  test("should return 46215 which is the latest case count for Afghanistan", () => {
    const countryCaseCount = testParsedCovidData[0].cases;
    expect(
      getLatestCountryCountInDateRange(countryCaseCount, testDateRange)
    ).toBe(46215);
  });
  test("should return 1763 which is the latest death count for Afghanistan", () => {
    const countryDeathCount = testParsedCovidData[0].deaths;
    expect(
      getLatestCountryCountInDateRange(countryDeathCount, testDateRange)
    ).toBe(1763);
  });
});

describe("Tests for getCovidCaseCount helper function", () => {
  test("should return 92430 which is the case count for both countries", () => {
    expect(
      getCovidCaseCount(testParsedCovidData, allCountriesCovidOutbreakFilters)
    ).toBe(92430);
  });
  test("should return 46215 which is the case count for Afghanistan", () => {
    expect(
      getCovidCaseCount(
        testParsedCovidData,
        specificCountryCovidOutbreakFilters
      )
    ).toBe(46215);
  });
});
