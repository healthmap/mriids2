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

const Ebola = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case "FETCH_EBOLA_DATA_REQUEST":
      return {
        ...state,
        ebolaData: {
          isFetching: state.ebolaData.isFetching + 1,
        },
      };
    case "FETCH_EBOLA_DATA_SUCCESS":
      return {
        ...state,
        ebolaData: {
          isFetching: state.ebolaData.isFetching - 1,
          data: payload,
        },
      };
    case "FETCH_EBOLA_DATA_ERROR":
      return {
        ...state,
        ebolaData: {
          isFetching: state.ebolaData.isFetching - 1,
          error,
        },
      };
    case "FETCH_EBOLA_DATA_COMBINED_REQUEST":
      return {
        ...state,
        ebolaDataCombined: {
          isFetching: state.ebolaDataCombined.isFetching + 1,
        },
      };
    case "FETCH_EBOLA_DATA_COMBINED_SUCCESS":
      return {
        ...state,
        ebolaDataCombined: {
          isFetching: state.ebolaDataCombined.isFetching - 1,
          data: payload,
        },
      };
    case "FETCH_EBOLA_DATA_COMBINED_ERROR":
      return {
        ...state,
        ebolaDataCombined: {
          isFetching: state.ebolaDataCombined.isFetching - 1,
          error,
        },
      };
    default:
      return state;
  }
};

export default Ebola;
