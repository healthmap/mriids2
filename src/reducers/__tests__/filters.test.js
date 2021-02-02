import filters from "../filters";
import * as types from "../../constants/ActionTypes";
import { reduxInitialState } from "../../constants/CommonTestData";
import { covidInitialDateRange } from "../../constants/DateRanges";

const initialFiltersState = reduxInitialState.filters;

describe("Tests for the filters reducer", () => {
  test("should return the initial state", () => {
    expect(filters(initialFiltersState, {})).toEqual(initialFiltersState);
  });
  test("should handle country change", () => {
    const newCountry = "Spain";
    const changedCountryState = {
      ...initialFiltersState,
      country: newCountry,
    };
    expect(
      filters(initialFiltersState, {
        type: types.CHANGE_COUNTRY,
        payload: newCountry,
      })
    ).toEqual(changedCountryState);
  });
  test("should handle outbreak change", () => {
    const newOutbreak = "COVID 19";
    const changedOutbreakState = {
      ...initialFiltersState,
      outbreak: newOutbreak,
    };
    expect(
      filters(initialFiltersState, {
        type: types.CHANGE_OUTBREAK,
        payload: newOutbreak,
      })
    ).toEqual(changedOutbreakState);
  });
  test("should handle view change", () => {
    const newView = "Risk";
    const changedViewState = {
      ...initialFiltersState,
      view: newView,
    };
    expect(
      filters(initialFiltersState, {
        type: types.CHANGE_VIEW,
        payload: newView,
      })
    ).toEqual(changedViewState);
  });
  test("should handle projection change", () => {
    const changedProjectionState = {
      ...initialFiltersState,
      projection: true,
    };
    expect(
      filters(initialFiltersState, {
        type: types.CHANGE_PROJECTION,
      })
    ).toEqual(changedProjectionState);
  });
  test("should date range change", () => {
    const newDateRange = [covidInitialDateRange.from, covidInitialDateRange.to];
    const changedDateRangeState = {
      ...initialFiltersState,
      dateRange: {
        from: newDateRange[0],
        to: newDateRange[1],
      },
    };
    expect(
      filters(initialFiltersState, {
        type: types.CHANGE_DATE_RANGE,
        payload: newDateRange,
      })
    ).toEqual(changedDateRangeState);
  });
  test("should handle chart type change", () => {
    const newChartType = "cases and deaths";
    const changedChartTypeState = {
      ...initialFiltersState,
      chartType: newChartType,
    };
    expect(
      filters(initialFiltersState, {
        type: types.CHANGE_CHART_TYPE,
        payload: newChartType,
      })
    ).toEqual(changedChartTypeState);
  });
});
