import * as types from "../constants/ActionTypes";

export const changeCountryFilter = (data) => {
  return {
    type: types.CHANGE_COUNTRY,
    payload: data,
  };
};

export const changeOutbreakFilter = (data) => {
  return {
    type: types.CHANGE_OUTBREAK,
    payload: data,
  };
};

export const changeDateRange = (dateRangeArray) => {
  return {
    type: types.CHANGE_DATE_RANGE,
    payload: dateRangeArray,
  };
};

export const changeDataType = (dataType) => {
  return {
    type: types.CHANGE_DATA_TYPE,
    payload: dataType,
  };
};
