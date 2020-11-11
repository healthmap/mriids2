import {
  isDateWithinFiltersDateRange,
  getEbolaCountriesCaseCounts,
  getDiseaseCaseCount,
} from "../ebolaDataHelpers";
import {
  allCountriesEbolaData,
  allCountriesEbolaDataLiberiaOutOfDateRange,
  testAllCountriesFiltersState,
  testGuineaFiltersState,
} from "../testData";

describe("Tests for isDateWithinFiltersDateRange", () => {
  test("should return true because date is within filterDates", () => {
    expect(
      isDateWithinFiltersDateRange(
        "2014-10-13",
        testAllCountriesFiltersState.dateRange
      )
    ).toEqual(true);
  });
  test("should return false because date is outside filterDates", () => {
    expect(
      isDateWithinFiltersDateRange(
        "2013-10-13",
        testAllCountriesFiltersState.dateRange
      )
    ).toEqual(false);
  });
});

describe("Tests for getEbolaCountriesCaseCounts", () => {
  test("should return data in expected format", () => {
    expect(
      getEbolaCountriesCaseCounts(
        allCountriesEbolaData,
        testAllCountriesFiltersState
      )
    ).toEqual({ Guinea: 126, Liberia: 126, "Sierra Leone": 126 });
  });
  test("should only count data within the date range in the filters", () => {
    expect(
      getEbolaCountriesCaseCounts(
        allCountriesEbolaDataLiberiaOutOfDateRange,
        testAllCountriesFiltersState
      )
    ).toEqual({ Guinea: 126, Liberia: 0, "Sierra Leone": 126 });
  });
});

describe("Tests for getDiseaseCaseCount", () => {
  test("should return count of cases in all countries", () => {
    expect(
      getDiseaseCaseCount(allCountriesEbolaData, testAllCountriesFiltersState)
    ).toBe(378);
  });
  test("should only return count of cases in Guinea", () => {
    expect(
      getDiseaseCaseCount(allCountriesEbolaData, testGuineaFiltersState)
    ).toBe(126);
  });
});
