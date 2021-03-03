import {
  getCovidCount,
  getCountInDateRange,
  getAllCountriesCount,
  findCountryDataObject,
  getCountriesCovidCounts,
} from "../covidDataHelpers";
import {
  testCountryCovidCaseCounts,
  testTwoCountryCovidCaseCounts,
  covidAllCountriesFilters,
  covidAfghanistanFilters,
} from "../testData/covidTestData";

describe("Tests for getCountInDateRange", () => {
  test("should return 4449", () => {
    expect(
      getCountInDateRange(
        testCountryCovidCaseCounts.countryData,
        covidAfghanistanFilters.dateRange,
        "totalCount"
      )
    ).toBe(4449);
  });
});

describe("Tests for getAllCountriesCount", () => {
  test("should return 76", () => {
    expect(
      getAllCountriesCount(
        testTwoCountryCovidCaseCounts,
        covidAllCountriesFilters.dateRange
      )
    ).toBe(76);
  });
});

describe("Tests for getCovidCount helper function", () => {
  test("should return 76", () => {
    expect(
      getCovidCount(testTwoCountryCovidCaseCounts, covidAllCountriesFilters)
    ).toBe(76);
  });
  test("should return 38 which is the case count for Afghanistan", () => {
    expect(
      getCovidCount(testTwoCountryCovidCaseCounts, covidAfghanistanFilters)
    ).toBe(38);
  });
});

describe("Tests for findCountryDataObject", () => {
  test("should return Albania data object (second object in testTwoCountryCovidCaseCounts array)", () => {
    expect(
      findCountryDataObject(testTwoCountryCovidCaseCounts, "Albania")
    ).toEqual(testTwoCountryCovidCaseCounts[1]);
  });
});

describe("Tests for getCountriesCovidCounts", () => {
  test("returned object should have a 'United States of America' key", () => {
    // 1. Get countryCountObject.
    const countryCountObject = getCountriesCovidCounts(
      testTwoCountryCovidCaseCounts,
      covidAllCountriesFilters
    );
    // 2. Get an array of the keys in the countryCountObject.
    const objectKeysArray = Object.keys(countryCountObject);
    // 3. hasCountryKey will return true if the 'United States of America' key is in the countryCountObject.
    const hasCountryKey = objectKeysArray.includes("United States of America");
    expect(hasCountryKey).toBe(true);
  });
});
