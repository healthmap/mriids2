import {
  prepareEbolaDataForCharts,
  prepareCovidDataForCharts,
} from "../chartDataHelpers";

const guineaTestData = {
  Guinea: {
    "2014-10-06": {
      projections: {
        oneWeek: 179,
        originalValue: 126,
        twoWeeks: 210.5,
        threeWeeks: 251,
        fourWeeks: 296,
      },
      value: "126",
    },
    "2014-10-13": {
      projections: {
        oneWeek: 153,
        originalValue: 114,
        twoWeeks: 163,
        threeWeeks: 175,
        fourWeeks: 190,
      },
      value: "114",
    },
  },
};

const guineaFiltersState = {
  country: "Guinea",
  outbreak: "Ebola Outbreak",
  view: "snapshot",
  projection: false,
  dateRange: { from: new Date(2014, 9, 1), to: new Date(2016, 1, 20) },
};

describe("Tests for the chart data helper functions", () => {
  test("prepareEbolaDataForCharts returns Guinea data in expected format", () => {
    expect(
      prepareEbolaDataForCharts(guineaTestData, null, guineaFiltersState)
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
