import * as types from "../constants/ActionTypes";

export const changeDateSliderRange = (data) => ({
  type: types.CHANGE_DATE_SLIDER_RANGE,
  payload: data,
});

export const openDateRangePopover = () => ({
  type: types.OPEN_DATE_RANGE_POPOVER,
});

export const closeDateRangePopover = () => ({
  type: types.CLOSE_DATE_RANGE_POPOVER,
});

export const setPopoverAnchorElement = (anchorElement) => ({
  type: types.SET_POPOVER_ANCHOR_ELEMENT,
  payload: anchorElement,
});

export const clearPopoverAnchorElement = () => ({
  type: types.CLEAR_POPOVER_ANCHOR_ELEMENT,
});