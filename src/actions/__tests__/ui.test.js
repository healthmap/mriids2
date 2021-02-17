import {
  changeDateSliderRange,
  openDateRangePopover,
  closeDateRangePopover,
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
  test("openDateRangePopover should return the expected action", () => {
    expect(openDateRangePopover()).toEqual({
      type: types.OPEN_DATE_RANGE_POPOVER,
    });
  });
  test("closeDateRangePopover should return the expected action", () => {
    expect(closeDateRangePopover()).toEqual({
      type: types.CLOSE_DATE_RANGE_POPOVER,
    });
  });
});
