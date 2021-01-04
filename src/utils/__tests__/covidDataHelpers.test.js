import {
  getLastObjectKey,
  getCovidCaseCount,
  getLatestCountInDateRange,
  getCountInDateRange,
  getAllCountriesCaseCounts,
  findCountryDataObject,
  getCountriesCovidCaseCounts,
} from "../covidDataHelpers";
import {
  testParsedCovidData,
  testCountryCovidCaseCounts,
  testTwoCountryCovidCaseCounts,
  covidAllCountriesFilters,
  covidAfghanistanFilters,
} from "../testData/covidTestData";

describe("Tests for the getLastObjectKey helper function", () => {
  test("should return key of 11/29/20", () => {
    const countryCaseCount = testParsedCovidData[0].cases;
    expect(getLastObjectKey(countryCaseCount)).toEqual("11/29/20");
  });
});

describe("Tests for getLatestCountInDateRange helper function", () => {
  const testDateRange = {
    from: new Date(2020, 10, 27),
    to: new Date(2020, 10, 30),
  };
  test("should return 46215 which is the latest case count for Afghanistan", () => {
    const countryCaseCount = testParsedCovidData[0].cases;
    expect(getLatestCountInDateRange(countryCaseCount, testDateRange)).toBe(
      46215
    );
  });
  test("should return 1763 which is the latest death count for Afghanistan", () => {
    const countryDeathCount = testParsedCovidData[0].deaths;
    expect(getLatestCountInDateRange(countryDeathCount, testDateRange)).toBe(
      1763
    );
  });
});

describe("Tests for getCountInDateRange", () => {
  test("should return 4449", () => {
    expect(
      getCountInDateRange(
        testCountryCovidCaseCounts.countryData,
        covidAfghanistanFilters.dateRange
      )
    ).toBe(4449);
  });
});

describe("Tests for getAllCountriesCaseCounts", () => {
  test("should return 76", () => {
    expect(
      getAllCountriesCaseCounts(
        testTwoCountryCovidCaseCounts,
        covidAllCountriesFilters.dateRange
      )
    ).toBe(76);
  });
});

describe("Tests for getCovidCaseCount helper function", () => {
  test("should return 76", () => {
    expect(
      getCovidCaseCount(testTwoCountryCovidCaseCounts, covidAllCountriesFilters)
    ).toBe(76);
  });
  test("should return 38 which is the case count for Afghanistan", () => {
    expect(
      getCovidCaseCount(testTwoCountryCovidCaseCounts, covidAfghanistanFilters)
    ).toBe(38);
  });
});

describe("Tests for findCountryDataObject", () => {
  test("should return Zimbabwe data object", () => {
    expect(findCountryDataObject(testParsedCovidData, "Zimbabwe")).toEqual({
      countryName: "Zimbabwe",
      cases: { "10/28/20": 30000, "11/28/20": 40000, "11/29/20": 46215 },
      deaths: { "11/29/20": 1763 },
    });
  });
});

describe("Tests for getCountriesCovidCaseCounts", () => {
  test("returned object should have a 'United States of America' key", () => {
    // 1. Get countryCountObject.
    const countryCountObject = getCountriesCovidCaseCounts(
      testParsedCovidData,
      covidAllCountriesFilters
    );
    // 2. Get an array of the keys in the countryCountObject.
    const objectKeysArray = Object.keys(countryCountObject);
    // 3. hasCountryKey will return true if the 'United States of America' key is in the countryCountObject.
    const hasCountryKey = objectKeysArray.includes("United States of America");
    expect(hasCountryKey).toBe(true);
  });
});
