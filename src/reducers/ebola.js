const initialState = {
  ebolaData: {
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
        ebolaData: {
          isFetching: state.ebolaData.isFetching + 1,
        },
      };
    case "FETCH_EBOLA_DATA_SUCCESS":
      return {
        ebolaData: {
          isFetching: state.ebolaData.isFetching - 1,
          data: payload,
        },
      };
    case "FETCH_EBOLA_DATA_ERROR":
      return {
        ebolaData: {
          isFetching: state.ebolaData.isFetching - 1,
          error,
        },
      };
    default:
      return state;
  }
};

export default Ebola;
