import {
  getCovidCaseCount,
  getCountInDateRange,
  getAllCountriesCaseCounts,
  findCountryDataObject,
  getCountriesCovidCaseCounts,
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
  test("should return Albania data object (second object in testTwoCountryCovidCaseCounts array)", () => {
    expect(
      findCountryDataObject(testTwoCountryCovidCaseCounts, "Albania")
    ).toEqual(testTwoCountryCovidCaseCounts[1]);
  });
});

describe("Tests for getCountriesCovidCaseCounts", () => {
  test("returned object should have a 'United States of America' key", () => {
    // 1. Get countryCountObject.
    const countryCountObject = getCountriesCovidCaseCounts(
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
