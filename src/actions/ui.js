import * as types from "../constants/ActionTypes";

export const changeDateSliderRange = (data) => ({
  type: types.CHANGE_DATE_SLIDER_RANGE,
  payload: data,
});

export const openDateRangeModal = () => ({
  type: types.OPEN_DATE_RANGE_MODAL,
});

export const closeDateRangeModal = () => ({
  type: types.CLOSE_DATE_RANGE_MODAL,
});
