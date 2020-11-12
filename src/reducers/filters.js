import * as types from "../constants/ActionTypes";

const initialState = {
  country: "All",
  outbreak: "Ebola Outbreak",
  view: "snapshot",
  projection: false,
  dateRange: { from: new Date(2014, 9, 1), to: new Date(2016, 1, 20) },
};

const Filters = function (state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case types.CHANGE_OUTBREAK:
      return {
        ...state,
        outbreak: action.payload,
      };
    case types.CHANGE_DATE_RANGE:
      return {
        ...state,
        dateRange: {
          from: action.payload[0],
          to: action.payload[1],
        },
      };
    case types.CHANGE_VIEW:
      return {
        ...state,
        view: action.payload,
      };
    default:
      return state;
  }
};

export default Filters;
