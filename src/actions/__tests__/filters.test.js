import {
  changeCountryFilter,
  changeOutbreakFilter,
  changeProjectionFilter,
  changeDataType,
  changeViewFilter,
  changeDateRange,
} from "../filters";
import * as types from "../../constants/ActionTypes";
import { covidInitialDateRange } from "../../constants/DateRanges";

describe("Tests for the filter actions", () => {
  test("changeCountryFilter should return the expected action", () => {
    const country = "Spain";
    const expectedAction = {
      type: types.CHANGE_COUNTRY,
      payload: country,
    };
    expect(changeCountryFilter(country)).toEqual(expectedAction);
  });
  test("changeOutbreakFilter should return the expected action", () => {
    const outbreak = "COVID 19";
    const expectedAction = {
      type: types.CHANGE_OUTBREAK,
      payload: outbreak,
    };
    expect(changeOutbreakFilter(outbreak)).toEqual(expectedAction);
  });
  test("changeProjectionFilter should return the expected action", () => {
    const expectedAction = {
      type: types.CHANGE_PROJECTION,
    };
    expect(changeProjectionFilter()).toEqual(expectedAction);
  });
  test("changeDataType should return the expected action", () => {
    const dataType = "deaths";
    const expectedAction = {
      type: types.CHANGE_DATA_TYPE,
      payload: dataType,
    };
    expect(changeDataType(dataType)).toEqual(expectedAction);
  });
  test("changeViewFilter should return the expected action", () => {
    const view = "Risk";
    const expectedAction = {
      type: types.CHANGE_VIEW,
      payload: view,
    };
    expect(changeViewFilter(view)).toEqual(expectedAction);
  });
  test("changeDateRange should return the expected action", () => {
    const dateRange = [covidInitialDateRange.from, covidInitialDateRange.to];
    const expectedAction = {
      type: types.CHANGE_DATE_RANGE,
      payload: dateRange,
    };
    expect(changeDateRange(dateRange)).toEqual(expectedAction);
  });
});
