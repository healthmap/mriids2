import axios from "axios";

export const fetchEbolaData = () => (dispatch) => {
  dispatch({
    type: "FETCH_EBOLA_DATA_REQUEST",
  });
  return axios
    .get("csv/healthmap_projections_2018-08-10.csv")
    .then((response) => {
      dispatch({
        type: "FETCH_EBOLA_DATA_SUCCESS",
        payload: response,
      });
    })
    .catch((error) => {
      dispatch({
        type: "FETCH_EBOLA_DATA_FAILURE",
        error,
      });
    });
};

export const fetchEbolaDataCombined = () => (dispatch) => {
  dispatch({
    type: "FETCH_EBOLA_DATA_COMBINED_REQUEST",
  });
  return axios
    .get("csv/healthmap_projections_2018-08-10.csv")
    .then((response) => {
      dispatch({
        type: "FETCH_EBOLA_DATA_COMBINED_SUCCESS",
        payload: response,
      });
    })
    .catch((error) => {
      dispatch({
        type: "FETCH_EBOLA_DATA_COMBINED_FAILURE",
        error,
      });
    });
};
