import {
  changeDateSliderRange,
  openDateRangeModal,
  closeDateRangeModal,
} from "../ui";
import * as types from "../../constants/ActionTypes";

describe("Tests for ui actions", () => {
  test("changeDateSliderRange should return expected action", () => {
    const expectedAction = {
      type: types.CHANGE_DATE_SLIDER_RANGE,
      payload: [0, 20],
    };
    expect(changeDateSliderRange([0, 20])).toEqual(expectedAction);
  });
  test("openDateRangeModal should return the expected action", () => {
    expect(openDateRangeModal()).toEqual({
      type: types.OPEN_DATE_RANGE_MODAL,
    });
  });
  test("closeDateRangeModal should return the expected action", () => {
    expect(closeDateRangeModal()).toEqual({
      type: types.CLOSE_DATE_RANGE_MODAL,
    });
  });
});
