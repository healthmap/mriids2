import {
  prepareEbolaDataForCharts,
  getAllCountriesChartData,
  getSelectedCountryChartData,
} from "../chartDataHelpers";

import {
  testGuineaData,
  testGuineaFiltersState,
  testGuineaDataOutOfDateRange,
  testEbolaDataCombined,
  testEbolaDataCombinedOutOfDateRange,
  testCovidDataCombined,
  testCountryCovidData,
} from "../testData";
import { covidInitialDateRange } from "../../constants/DateRanges";

import { reduxInitialState } from "../../constants/CommonTestData";

describe("Tests for prepareEbolaDataForCharts helper function", () => {
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
        reduxInitialState.filters
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
        reduxInitialState.filters
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
});

test("getAllCountriesChartData returns all country data in expected format", () => {
  const covidAllCountriesFilters = {
    ...reduxInitialState.filters,
    outbreak: "COVID 19",
    dateRange: covidInitialDateRange,
  };
  expect(
    getAllCountriesChartData(
      testCovidDataCombined.data,
      covidAllCountriesFilters
    )
  ).toEqual([
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
    [new Date("1/22/20"), 555],
    [new Date("1/29/20"), 6167],
  ]);
});
test("getSelectedCountryChartData returns specific country data in expected format", () => {
  const covidAfghanistanFilters = {
    ...reduxInitialState.filters,
    country: "Afghanistan",
    outbreak: "COVID 19",
    dateRange: covidInitialDateRange,
  };
  expect(
    getSelectedCountryChartData(testCountryCovidData, covidAfghanistanFilters)
  ).toEqual([
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
    [new Date("2/24/20"), 1],
    [new Date("3/2/20"), 1],
    [new Date("3/9/20"), 7],
  ]);
});
