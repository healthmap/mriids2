import {
  getChartColumns,
  prepareEbolaDataForCharts,
  getAllCountriesChartData,
  getSelectedCountryChartData,
  getWeekProjectionData,
  getCovidDataForCharts,
} from "../chartDataHelpers";
import {
  testGuineaData,
  testGuineaFiltersState,
  testGuineaDataOutOfDateRange,
  testEbolaDataCombined,
  testEbolaDataCombinedOutOfDateRange,
} from "../testData/ebolaTestData";
import {
  covidAllCountriesFilters,
  covidAfghanistanFilters,
  testTwoCountryCovidCaseCounts,
  expectedAllCountriesChartData,
  expectedOneCountryChartData,
} from "../testData/covidTestData";
import { reduxInitialState } from "../../constants/CommonTestData";
import dayjs from "dayjs";

describe("Tests for getChartColumns", () => {
  test("should just return 'Date' and 'Ebola Cases' column headers", () => {
    expect(getChartColumns("Ebola", false, "cases")).toEqual([
      {
        type: "date",
        label: "Date",
      },
      {
        type: "number",
        label: "Ebola Cases",
      },
    ]);
  });
  test("should return projections column header", () => {
    expect(getChartColumns("Ebola", true, "cases")).toEqual([
      {
        type: "date",
        label: "Date",
      },
      {
        type: "number",
        label: "Ebola Cases",
      },
      {
        type: "number",
        label: "Projected future cases",
      },
    ]);
  });
});

describe("Tests for getWeekProjectionData", () => {
  test("should return the week projection data in the expected format", () => {
    const expectedProjectionsDataRow = [
      new Date(dayjs("2014-10-13").format()),
      null,
      50,
    ];
    expect(getWeekProjectionData("2014-10-06", 1, 50)).toEqual(
      expectedProjectionsDataRow
    );
  });
});

describe("Tests for prepareEbolaDataForCharts helper function", () => {
  test("returns Guinea data in expected format", () => {
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

  test("returns only Guinea data in date range", () => {
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

  test("returns the combinedEbolaData in the expected format", () => {
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

  test("returns only combinedEbolaData in date range", () => {
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

test("returns all country data in expected format", () => {
  expect(
    getAllCountriesChartData(
      testTwoCountryCovidCaseCounts,
      covidAllCountriesFilters
    )
  ).toEqual(expectedAllCountriesChartData);
});

test("returns specific country data in expected format", () => {
  expect(
    getSelectedCountryChartData(
      testTwoCountryCovidCaseCounts,
      covidAfghanistanFilters
    )
  ).toEqual(expectedOneCountryChartData);
});

describe("Tests for getCovidDataForCharts", () => {
  test("returns all country data in expected format", () => {
    expect(
      getCovidDataForCharts(
        testTwoCountryCovidCaseCounts,
        covidAllCountriesFilters
      )
    ).toEqual(expectedAllCountriesChartData);
  });
  test("returns specific country data in expected format", () => {
    expect(
      getCovidDataForCharts(
        testTwoCountryCovidCaseCounts,
        covidAfghanistanFilters
      )
    ).toEqual(expectedOneCountryChartData);
  });
});
