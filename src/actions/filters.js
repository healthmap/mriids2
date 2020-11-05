import * as types from "../constants/ActionTypes";

export const changeCountryFilter = (data) => (dispatch) => {
  dispatch({
    type: types.CHANGE_COUNTRY,
    payload: data,
  });
};
