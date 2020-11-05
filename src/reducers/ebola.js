import * as types from "../constants/ActionTypes";

const initialState = {
  ebolaData: {
    isFetching: 0,
    data: {},
    error: {},
  },
  ebolaDataCombined: {
    isFetching: 0,
    data: {},
    error: {},
  },
  riskData: {
    isFetching: 0,
    data: {},
    error: {},
  },
};

const Ebola = function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_EBOLA_DATA_REQUEST:
      return {
        ...state,
        ebolaData: {
          ...state.ebolaData,
          isFetching: state.ebolaData.isFetching + 1,
        },
      };
    case types.FETCH_EBOLA_DATA_SUCCESS:
      return {
        ...state,
        ebolaData: {
          ...state.ebolaData,
          isFetching: state.ebolaData.isFetching - 1,
          data: action.payload,
        },
      };
    case types.FETCH_EBOLA_DATA_FAILURE:
      return {
        ...state,
        ebolaData: {
          ...state.ebolaData,
          isFetching: state.ebolaData.isFetching - 1,
          error: action.error,
        },
      };
    case types.FETCH_EBOLA_DATA_COMBINED_REQUEST:
      return {
        ...state,
        ebolaDataCombined: {
          ...state.ebolaDataCombined,
          isFetching: state.ebolaDataCombined.isFetching + 1,
        },
      };
    case types.FETCH_EBOLA_DATA_COMBINED_SUCCESS:
      return {
        ...state,
        ebolaDataCombined: {
          ...state.ebolaDataCombined,
          isFetching: state.ebolaDataCombined.isFetching - 1,
          data: action.payload,
        },
      };
    case types.FETCH_EBOLA_DATA_COMBINED_FAILURE:
      return {
        ...state,
        ebolaDataCombined: {
          ...state.ebolaDataCombined,
          isFetching: state.ebolaDataCombined.isFetching - 1,
          error: action.error,
        },
      };
    case types.FETCH_RISK_DATA_REQUEST:
      return {
        ...state,
        riskData: {
          ...state.riskData,
          isFetching: state.riskData.isFetching + 1,
        },
      };
    case types.FETCH_RISK_DATA_SUCCESS:
      return {
        ...state,
        riskData: {
          ...state.riskData,
          isFetching: state.riskData.isFetching - 1,
          data: action.payload,
        },
      };
    case types.FETCH_RISK_DATA_FAILURE:
      return {
        ...state,
        riskData: {
          ...state.riskData,
          isFetching: state.riskData.isFetching - 1,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default Ebola;
