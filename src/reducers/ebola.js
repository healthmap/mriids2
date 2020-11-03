const Ebola = (
  state = {
    ebolaData: null,
  },
  action
) => {
  switch (action.type) {
    case "FETCH_EBOLA_DATA_SUCCESS":
      return {
        ebolaData: action.payload,
      };
    default:
      return state;
  }
};

export default Ebola;
