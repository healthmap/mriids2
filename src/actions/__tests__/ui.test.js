import {
  changeDateSliderRange,
  openDateRangePopover,
  closeDateRangePopover,
  setPopoverAnchorElement,
  clearPopoverAnchorElement,
  openProjectionsPopup,
  closeProjectionsPopup,
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
  test("setPopoverAnchorElement should return the expected action", () => {
    const anchorElement = "some element";
    const expectedAction = {
      type: types.SET_POPOVER_ANCHOR_ELEMENT,
      payload: anchorElement,
    };
    expect(setPopoverAnchorElement(anchorElement)).toEqual(expectedAction);
  });
  test("clearPopoverAnchorElement should return the expected action", () => {
    expect(clearPopoverAnchorElement()).toEqual({
      type: types.CLEAR_POPOVER_ANCHOR_ELEMENT,
    });
  });
  test("openProjectionsPopup should return the expected action", () => {
    expect(openProjectionsPopup()).toEqual({
      type: types.OPEN_PROJECTIONS_POPUP,
    });
  });
  test("closeProjectionsPopup should return the expected action", () => {
    expect(closeProjectionsPopup()).toEqual({
      type: types.CLOSE_PROJECTIONS_POPUP,
    });
  });
});
