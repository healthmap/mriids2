import * as types from "../constants/ActionTypes";

export const changeDateSliderRange = (data) => {
  return {
    type: types.CHANGE_DATE_SLIDER_RANGE,
    payload: data,
  };
};
