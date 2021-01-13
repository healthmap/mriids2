import * as types from "../constants/ActionTypes";

export const changeDateSliderRange = (data) => ({
  type: types.CHANGE_DATE_SLIDER_RANGE,
  payload: data,
});

export const openCloseDateRangeModal = (payload) => ({
  type: types.OPEN_CLOSE_DATE_RANGE_MODAL,
  payload,
});
