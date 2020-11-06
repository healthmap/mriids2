import {
  prepareEbolaDataForCharts,
  prepareCovidDataForCharts,
} from "../chartDataHelpers";

import {
  testGuineaTestData,
  testGuineaFiltersState,
  testEbolaDataCombined,
  testAllCountriesFiltersState,
} from "../testData";

describe("Tests for the chart data helper functions", () => {
  test("prepareEbolaDataForCharts returns Guinea data in expected format", () => {
    expect(
      prepareEbolaDataForCharts(
        testGuineaTestData,
        null,
        testGuineaFiltersState
      )
    ).toEqual([
      [
        {
          type: "date",
          label: "Date",
        },
        {
          type: "number",
          label: "Ebola Cases",
        },
      ],
      [new Date("2014-10-06"), "126"],
      [new Date("2014-10-13"), "114"],
    ]);
  });

  test("prepareEbolaDataForCharts returns the combinedEbolaData in the expected format", () => {
    expect(
      prepareEbolaDataForCharts(
        testGuineaTestData,
        testEbolaDataCombined,
        testAllCountriesFiltersState
      )
    ).toEqual([
      [
        {
          type: "date",
          label: "Date",
        },
        {
          type: "number",
          label: "Ebola Cases",
        },
      ],
      [new Date("2014-10-06"), "896"],
      [new Date("2014-10-13"), "859"],
    ]);
  });

  test("prepareCovidDataForCharts returns data in expected format", () => {
    expect(prepareCovidDataForCharts()).toEqual([
      [
        {
          type: "date",
          label: "Date",
        },
        {
          type: "number",
          label: "COVID-19 Cases",
        },
      ],
    ]);
  });
});
