import * as types from "../constants/ActionTypes";

const initialState = {
  dateSliderRange: [0, 72],
};

const UiState = function (state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_DATE_SLIDER_RANGE:
      return {
        ...state,
        dateSliderRange: action.payload,
      };
    default:
      return initialState;
  }
};

export default UiState;
