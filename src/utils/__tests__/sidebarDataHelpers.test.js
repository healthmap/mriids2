import { getDiseaseCount } from "../sidebarDataHelpers";
import { reduxInitialState } from "../../constants/CommonTestData";
import { allCountriesEbolaData } from "../testData/ebolaTestData";
import {
  testTwoCountryCovidCaseCounts,
  testTwoCountryCovidDeathCounts,
  covidAllCountriesFilters,
} from "../testData/covidTestData";

describe("Tests for the getDiseaseCount helper function", () => {
  test("should return the ebola case count of 378", () => {
    expect(
      getDiseaseCount(
        allCountriesEbolaData,
        testTwoCountryCovidCaseCounts,
        testTwoCountryCovidDeathCounts,
        reduxInitialState.filters
      )
    ).toEqual(378);
  });
  test("should return covid case count of 76", () => {
    expect(
      getDiseaseCount(
        allCountriesEbolaData,
        testTwoCountryCovidCaseCounts,
        testTwoCountryCovidDeathCounts,
        covidAllCountriesFilters
      )
    ).toEqual(76);
  });
  test("should return covid death count of 32", () => {
    const covidDeathCountFilters = {
      ...covidAllCountriesFilters,
      chartType: "deaths",
    };
    expect(
      getDiseaseCount(
        allCountriesEbolaData,
        testTwoCountryCovidCaseCounts,
        testTwoCountryCovidDeathCounts,
        covidDeathCountFilters
      )
    ).toEqual(32);
  });
  test("should return 0", () => {
    const covidCasesAndDeathCountFilters = {
      ...covidAllCountriesFilters,
      chartType: "cases and deaths",
    };
    expect(
      getDiseaseCount(
        allCountriesEbolaData,
        testTwoCountryCovidCaseCounts,
        testTwoCountryCovidDeathCounts,
        covidCasesAndDeathCountFilters
      )
    ).toEqual(0);
  });
});
