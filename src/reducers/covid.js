import * as types from "../constants/ActionTypes";

const initialState = {
  caseCounts: {
    isFetching: 0,
    data: [],
    error: {},
  },
  deathCounts: {
    isFetching: 0,
    data: [],
    error: {},
  },
  projections: {
    isFetching: 0,
    data: [],
    error: {},
  },
};

const Covid = function (state = initialState, action) {
  switch (action.type) {
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
    case types.FETCH_COVID_DEATH_COUNT_DATA_REQUEST:
      return {
        ...state,
        deathCounts: {
          ...state.deathCounts,
          isFetching: state.deathCounts.isFetching + 1,
        },
      };
    case types.FETCH_COVID_DEATH_COUNT_DATA_SUCCESS:
      return {
        ...state,
        deathCounts: {
          ...state.deathCounts,
          isFetching: state.deathCounts.isFetching - 1,
          data: action.payload,
        },
      };
    case types.FETCH_COVID_DEATH_COUNT_DATA_FAILURE:
      return {
        ...state,
        deathCounts: {
          ...state.deathCounts,
          isFetching: state.deathCounts.isFetching - 1,
          error: action.error,
        },
      };
    case types.FETCH_COVID_PROJECTIONS_DATA_REQUEST:
      return {
        ...state,
        projections: {
          ...state.projections,
          isFetching: state.projections.isFetching + 1,
        },
      };
    case types.FETCH_COVID_PROJECTIONS_DATA_SUCCESS:
      return {
        ...state,
        projections: {
          ...state.projections,
          isFetching: state.projections.isFetching - 1,
          data: action.payload,
        },
      };
    case types.FETCH_COVID_PROJECTIONS_DATA_FAILURE:
      return {
        ...state,
        projections: {
          ...state.projections,
          isFetching: state.projections.isFetching - 1,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default Covid;
