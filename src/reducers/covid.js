import * as types from "../constants/ActionTypes";

const initialState = {
  covidData: {
    isFetching: 0,
    data: [],
    error: {},
  },
  covidDataCombined: {
    isFetching: 0,
    data: {},
    error: {},
  },
  caseCounts: {
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
    case types.FETCH_COVID_DATA_COMBINED_REQUEST:
      return {
        ...state,
        covidDataCombined: {
          ...state.covidDataCombined,
          isFetching: state.covidDataCombined.isFetching + 1,
        },
      };
    case types.FETCH_COVID_DATA_COMBINED_SUCCESS:
      return {
        ...state,
        covidDataCombined: {
          ...state.covidDataCombined,
          isFetching: state.covidDataCombined.isFetching - 1,
          data: action.payload,
        },
      };
    case types.FETCH_COVID_DATA_COMBINED_FAILURE:
      return {
        ...state,
        covidDataCombined: {
          ...state.covidDataCombined,
          isFetching: state.covidDataCombined.isFetching - 1,
          error: action.error,
        },
      };
    case types.FETCH_COVID_CASE_COUNT_DATA_REQUEST:
      return {
        ...state,
        caseCounts: {
          ...state.caseCounts,
          isFetching: state.caseCounts.isFetching + 1,
        },
      };
    case types.FETCH_COVID_CASE_COUNT_DATA_SUCCESS:
      return {
        ...state,
        caseCounts: {
          ...state.caseCounts,
          isFetching: state.caseCounts.isFetching - 1,
          data: action.payload,
        },
      };
    case types.FETCH_COVID_CASE_COUNT_DATA_FAILURE:
      return {
        ...state,
        caseCounts: {
          ...state.caseCounts,
          isFetching: state.caseCounts.isFetching - 1,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default Covid;
