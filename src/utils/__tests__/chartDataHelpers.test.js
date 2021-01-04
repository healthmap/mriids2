import {
  getChartColumns,
  prepareEbolaDataForCharts,
  getAllCountriesChartData,
  getSelectedCountryChartData,
  getWeekProjectionData,
  getCovidDataForCharts,
  returnLastSevenDaysDataCount,
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
  testCovidDataCombined,
  testCountryCovidCaseCounts,
  testTwoCountryCovidCaseCounts,
} from "../testData/covidTestData";
import { reduxInitialState } from "../../constants/CommonTestData";
import dayjs from "dayjs";

describe("Tests for getChartColumns", () => {
  test("should just return 'Date' and 'Ebola Cases' column headers", () => {
    expect(getChartColumns("Ebola", false)).toEqual([
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
    expect(getChartColumns("Ebola", true)).toEqual([
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
test("returns specific country data in expected format", () => {
  expect(
    getSelectedCountryChartData(
      testTwoCountryCovidCaseCounts,
      covidAfghanistanFilters
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
    [new Date("2/24/20"), 1],
    [new Date("3/2/20"), 7],
    [new Date("3/9/20"), 30],
  ]);
});

describe("Tests for getCovidDataForCharts", () => {
  test("returns all country data in expected format", () => {
    expect(
      getCovidDataForCharts(
        testCountryCovidCaseCounts,
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
  test("returns specific country data in expected format", () => {
    expect(
      getCovidDataForCharts(
        testTwoCountryCovidCaseCounts,
        testCovidDataCombined.data,
        covidAfghanistanFilters
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
      [new Date("2/24/20"), 1],
      [new Date("3/2/20"), 7],
      [new Date("3/9/20"), 30],
    ]);
  });
});

describe("Tests for returnLastSevenDaysDataCount", () => {
  const covidDataDateKeys = Object.keys(testCountryCovidCaseCounts.countryData);
  test("should return 203", () => {
    expect(
      returnLastSevenDaysDataCount(
        testCountryCovidCaseCounts.countryData,
        covidDataDateKeys,
        "11/23/20"
      )
    ).toBe(203);
  });
  test("should return 1509", () => {
    expect(
      returnLastSevenDaysDataCount(
        testCountryCovidCaseCounts.countryData,
        covidDataDateKeys,
        "11/30/20"
      )
    ).toBe(1509);
  });
});
