export const fetchEbolaData = () => (dispatch) => {
  dispatch({
    type: "FETCH_EBOLA_DATA_SUCCESS",
    payload: "result_of_simple_action",
  });
};
