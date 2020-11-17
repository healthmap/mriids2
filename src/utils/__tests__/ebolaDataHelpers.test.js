import {
  isDateWithinFiltersDateRange,
  getEbolaCountriesCaseCounts,
  getDiseaseCaseCount,
  getAllFutureProjectedCasesCount,
} from "../ebolaDataHelpers";
import {
  allCountriesEbolaData,
  allCountriesEbolaDataLiberiaOutOfDateRange,
  testEbolaDataCombined,
  testEbolaDataCombinedLastWeekOutOfDateRange,
  testGuineaFiltersState,
} from "../testData";

import { reduxInitialState } from "../../constants/CommonTestData";

describe("Tests for isDateWithinFiltersDateRange", () => {
  test("should return true because date is within filterDates", () => {
    expect(
      isDateWithinFiltersDateRange(
        "2014-10-13",
        reduxInitialState.filters.dateRange
      )
    ).toEqual(true);
  });
  test("should return false because date is outside filterDates", () => {
    expect(
      isDateWithinFiltersDateRange(
        "2013-10-13",
        reduxInitialState.filters.dateRange
      )
    ).toEqual(false);
  });
});

describe("Tests for getEbolaCountriesCaseCounts", () => {
  test("should return data in expected format", () => {
    expect(
      getEbolaCountriesCaseCounts(
        allCountriesEbolaData,
        reduxInitialState.filters
      )
    ).toEqual({ Guinea: 126, Liberia: 126, "Sierra Leone": 126 });
  });
  test("should only count data within the date range in the filters", () => {
    expect(
      getEbolaCountriesCaseCounts(
        allCountriesEbolaDataLiberiaOutOfDateRange,
        reduxInitialState.filters
      )
    ).toEqual({ Guinea: 126, Liberia: 0, "Sierra Leone": 126 });
  });
});

describe("Tests for getDiseaseCaseCount", () => {
  test("should return count of cases in all countries", () => {
    expect(
      getDiseaseCaseCount(allCountriesEbolaData, reduxInitialState.filters)
    ).toBe(378);
  });
  test("should only return count of cases in Guinea", () => {
    expect(
      getDiseaseCaseCount(allCountriesEbolaData, testGuineaFiltersState)
    ).toBe(126);
  });
});

describe("Tests for getAllFutureProjectedCases", () => {
  test("count should equal 4112 (projections for second data row)", () => {
    expect(
      getAllFutureProjectedCasesCount(
        testEbolaDataCombined,
        reduxInitialState.filters.dateRange
      )
    ).toEqual(4112);
  });
  test("count should equal 7272 (projections for first data row)", () => {
    expect(
      getAllFutureProjectedCasesCount(
        testEbolaDataCombinedLastWeekOutOfDateRange,
        reduxInitialState.filters.dateRange
      )
    ).toEqual(7272);
  });
});
