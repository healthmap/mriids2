import {
  getEbolaCountriesCaseCounts,
  getEbolaCaseCount,
  getAllFutureProjectedCasesCount,
  getCountryFutureProjectedCasesCount,
} from "../ebolaDataHelpers";
import {
  allCountriesEbolaData,
  allCountriesEbolaDataLiberiaOutOfDateRange,
  testEbolaDataCombined,
  testEbolaDataCombinedLastWeekOutOfDateRange,
  testGuineaData,
  testGuineaFiltersState,
} from "../testData";

import { reduxInitialState } from "../../constants/CommonTestData";

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
  test("when projections are enabled, get the case count from projections.fourWeeks", () => {
    const projectionsEnabledState = {
      ...reduxInitialState,
      filters: { ...reduxInitialState.filters, projection: true },
    };
    expect(
      getEbolaCountriesCaseCounts(
        allCountriesEbolaData,
        projectionsEnabledState.filters
      )
    ).toEqual({ Guinea: 296, Liberia: 296, "Sierra Leone": 296 });
  });
});

describe("Tests for getEbolaCaseCount", () => {
  test("should return count of cases in all countries", () => {
    expect(
      getEbolaCaseCount(allCountriesEbolaData, reduxInitialState.filters)
    ).toBe(378);
  });
  test("should only return count of cases in Guinea", () => {
    expect(
      getEbolaCaseCount(allCountriesEbolaData, testGuineaFiltersState)
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

describe("Tests for getCountryFutureProjectedCasesCount", () => {
  test("count should equal 937 (projections data for Guinea)", () => {
    expect(
      getCountryFutureProjectedCasesCount(
        allCountriesEbolaData,
        testGuineaFiltersState
      )
    ).toEqual(937);
  });
  test("count should equal 681 (projections for second data row)", () => {
    expect(
      getCountryFutureProjectedCasesCount(
        testGuineaData,
        testGuineaFiltersState
      )
    ).toEqual(681);
  });
});
