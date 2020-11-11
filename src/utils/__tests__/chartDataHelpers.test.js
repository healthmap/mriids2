import {
  prepareEbolaDataForCharts,
  prepareCovidDataForCharts,
} from "../chartDataHelpers";

import {
  testGuineaData,
  testGuineaFiltersState,
  testGuineaDataOutOfDateRange,
  testEbolaDataCombined,
  testAllCountriesFiltersState,
  testEbolaDataCombinedOutOfDateRange,
} from "../testData";

describe("Tests for the chart data helper functions", () => {
  test("prepareEbolaDataForCharts returns Guinea data in expected format", () => {
    expect(
      prepareEbolaDataForCharts(testGuineaData, null, testGuineaFiltersState)
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

  test("prepareEbolaDataForCharts returns only Guinea data in date range", () => {
    expect(
      prepareEbolaDataForCharts(
        testGuineaDataOutOfDateRange,
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
      [new Date("2014-10-13"), "114"],
    ]);
  });

  test("prepareEbolaDataForCharts returns the combinedEbolaData in the expected format", () => {
    expect(
      prepareEbolaDataForCharts(
        testGuineaData,
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

  test("prepareEbolaDataForCharts returns only combinedEbolaData in date range", () => {
    expect(
      prepareEbolaDataForCharts(
        testGuineaData,
        testEbolaDataCombinedOutOfDateRange,
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
