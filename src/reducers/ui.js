import * as types from "../constants/ActionTypes";

const initialState = {
  dateSliderRange: [0, 72],
  isDateRangePopoverOpen: false,
};

const UiState = function (state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_DATE_SLIDER_RANGE:
      return {
        ...state,
        dateSliderRange: action.payload,
      };
    case types.OPEN_DATE_RANGE_POPOVER:
      return {
        ...state,
        isDateRangePopoverOpen: true,
      };
    case types.CLOSE_DATE_RANGE_POPOVER:
      return {
        ...state,
        isDateRangePopoverOpen: false,
      };
    default:
      return state;
  }
};

export default UiState;
