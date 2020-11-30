import * as types from "../constants/ActionTypes";

const initialState = {
  covidData: {
    isFetching: 0,
    data: [],
    error: {},
  },
};

const Covid = function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_COVID_DATA_REQUEST:
      return {
        ...state,
        covidData: {
          ...state.covidData,
          isFetching: state.covidData.isFetching + 1,
        },
      };
    case types.FETCH_COVID_DATA_SUCCESS:
      return {
        ...state,
        covidData: {
          ...state.covidData,
          isFetching: state.covidData.isFetching - 1,
          data: action.payload,
        },
      };
    case types.FETCH_COVID_DATA_FAILURE:
      return {
        ...state,
        covidData: {
          ...state.covidData,
          isFetching: state.covidData.isFetching - 1,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default Covid;
