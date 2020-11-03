const initialState = {
  ebolaData: null,
};

const Ebola = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_EBOLA_DATA_SUCCESS":
      return {
        ebolaData: payload,
      };
    default:
      return state;
  }
};

export default Ebola;
