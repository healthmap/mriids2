import {
  getChartTitle,
  getDataColumnLabel,
  getProjectionsColumnLabel,
  getChartColumns,
  getWeekProjectionData,
  addProjectionsData,
  getSelectedCountryEbolaChartData,
  getAllCountriesEbolaChartData,
  getEbolaDataForCharts,
  getAllCountriesCovidChartData,
  getSelectedCountryCovidChartData,
  getCovidDataForCharts,
  getDayKeysForProjectionsChartData,
  getCovidDeathProjectionsDataForChart,
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
  twoCountryCovidProjectedDeathCounts,
  testTwoCountryCovidDeathCounts,
  expectedProjectionsDataDayKeys,
  expectedProjectionsChartData,
} from "../testData/covidTestData";
import { reduxInitialState } from "../../constants/CommonTestData";
import dayjs from "dayjs";

describe("Tests for getChartTitle", () => {
  test("should return 'Daily Cases in all Locations'", () => {
    expect(getChartTitle("COVID 19", "cases", "All")).toEqual(
      "Daily Cases in all Locations"
    );
  });
  test("should return 'Daily Deaths in all Locations'", () => {
    expect(getChartTitle("COVID 19", "deaths", "All")).toEqual(
      "Daily Deaths in all Locations"
    );
  });
  test("should return 'Daily Cases in Afghanistan'", () => {
    expect(getChartTitle("COVID 19", "cases", "Afghanistan")).toEqual(
      "Daily Cases in Afghanistan"
    );
  });
  test("should return 'Weekly Cases in all Locations'", () => {
    expect(getChartTitle("Ebola Outbreak", "cases", "All")).toEqual(
      "Weekly Cases in all Locations"
    );
  });
  test("should return 'Weekly Cases in Guinea'", () => {
    expect(getChartTitle("Ebola Outbreak", "cases", "Guinea")).toEqual(
      "Weekly Cases in Guinea"
    );
  });
  test("should return 'Weekly Projected Cases in all Locations'", () => {
    expect(getChartTitle("Ebola Outbreak", "projected cases", "All")).toEqual(
      "Weekly Projected Cases in all Locations"
    );
  });
});

describe("Tests for getDataColumnLabel", () => {
  test("should return 'Ebola Cases'", () => {
    expect(getDataColumnLabel("Ebola", "cases")).toEqual("Ebola Cases");
  });
  test("should return 'Covid Deaths'", () => {
    expect(getDataColumnLabel("Covid", "deaths")).toEqual("Covid Deaths");
  });
  test("should return 'Covid Cases'", () => {
    expect(getDataColumnLabel("Covid", "projected cases")).toEqual(
      "Covid Cases"
    );
  });
  test("should also return 'Covid Deaths'", () => {
    expect(getDataColumnLabel("Covid", "projected deaths")).toEqual(
      "Covid Deaths"
    );
  });
});

describe("Tests for getProjectionsColumnLabel", () => {
  test("should return 'Projected Cases'", () => {
    expect(getProjectionsColumnLabel("projected cases")).toEqual(
      "Projected Cases"
    );
  });
  test("should return 'Projected Deaths'", () => {
    expect(getProjectionsColumnLabel("projected deaths")).toEqual(
      "Projected Deaths"
    );
  });
});

describe("Tests for getChartColumns", () => {
  test("should just return 'Date' and 'Ebola Cases' column headers", () => {
    expect(getChartColumns("Ebola", "cases")).toEqual([
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
    expect(getChartColumns("Ebola", "projected cases")).toEqual([
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
        label: "Projected Cases",
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

describe("Tests for addProjectionsData", () => {
  test("should add 4 rows with projections data to chartData array", () => {
    const chartData = [["2016-01-18", 1, null]];
    const projectionsData = {
      oneWeek: 2,
      twoWeeks: 4,
      threeWeeks: 6,
      fourWeeks: 8,
    };
    addProjectionsData(projectionsData, chartData);
    expect(chartData).toHaveLength(5);
  });
});

describe("Tests for getEbolaDataForCharts helper function", () => {
  test("returns Guinea chart data in expected format", () => {
    expect(
      getEbolaDataForCharts(
        testGuineaData,
        testEbolaDataCombined,
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

  test("returns only Guinea chart data in date range", () => {
    expect(
      getEbolaDataForCharts(
        testGuineaDataOutOfDateRange,
        testEbolaDataCombined,
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

  test("returns the chart data for all countries in the expected format", () => {
    expect(
      getEbolaDataForCharts(
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

  test("returns only the all-countries chart data that is in date range", () => {
    expect(
      getEbolaDataForCharts(
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

describe("Tests for getSelectedCountryEbolaChartData", () => {
  test("returns Guinea chart data in expected format", () => {
    expect(
      getSelectedCountryEbolaChartData(testGuineaData, testGuineaFiltersState)
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
});

describe("Tests for getAllCountriesEbolaChartData", () => {
  test("returns the chart data for all countries in the expected format", () => {
    expect(
      getAllCountriesEbolaChartData(
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
});

test("returns all country data in expected format", () => {
  expect(
    getAllCountriesCovidChartData(
      testTwoCountryCovidCaseCounts,
      covidAllCountriesFilters
    )
  ).toEqual(expectedAllCountriesChartData);
});

test("returns specific country data in expected format", () => {
  expect(
    getSelectedCountryCovidChartData(
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

describe("Tests for getDayKeysForProjectionsChartData helper function", () => {
  test("should return the day keys in the expected format", () => {
    expect(
      getDayKeysForProjectionsChartData(
        twoCountryCovidProjectedDeathCounts[0].countryData
      )
    ).toEqual(expectedProjectionsDataDayKeys);
  });
});

describe("Tests for getCovidDeathProjectionsDataForChart helper function", () => {
  test("should return Afghanistan data in the correct format", () => {
    expect(
      getCovidDeathProjectionsDataForChart(
        twoCountryCovidProjectedDeathCounts,
        testTwoCountryCovidDeathCounts,
        "Afghanistan"
      )
    ).toEqual(expectedProjectionsChartData);
  });
});
