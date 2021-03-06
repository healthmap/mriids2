import * as types from "../constants/ActionTypes";

export const changeCountryFilter = (data) => (dispatch) => {
  return dispatch({
    type: types.CHANGE_COUNTRY,
    payload: data,
  });
};

export const changeOutbreakFilter = (data) => (dispatch) => {
  return dispatch({
    type: types.CHANGE_OUTBREAK,
    payload: data,
  });
};

export const changeDateRange = (dateRangeArray) => (dispatch) => {
  return dispatch({
    type: types.CHANGE_DATE_RANGE,
    payload: dateRangeArray,
  });
};

export const changeViewFilter = (newViewValue) => (dispatch) => {
  return dispatch({
    type: types.CHANGE_VIEW,
    payload: newViewValue,
  });
};

export const changeProjectionFilter = () => (dispatch) => {
  return dispatch({
    type: types.CHANGE_PROJECTION,
  });
};
