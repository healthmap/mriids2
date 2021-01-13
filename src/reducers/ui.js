import * as types from "../constants/ActionTypes";

const initialState = {
  dateSliderRange: [0, 72],
  isDateRangeModalOpen: false,
};

const UiState = function (state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_DATE_SLIDER_RANGE:
      return {
        ...state,
        dateSliderRange: action.payload,
      };
    case types.OPEN_CLOSE_DATE_RANGE_MODAL:
      return {
        ...state,
        isDateRangeModalOpen: !state.isDateRangeModalOpen,
      };
    default:
      return initialState;
  }
};

export default UiState;
