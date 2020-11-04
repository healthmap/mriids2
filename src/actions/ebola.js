import * as d3 from "d3-fetch";

export const fetchEbolaData = () => (dispatch) => {
  dispatch({
    type: "FETCH_EBOLA_DATA_REQUEST",
  });
  return d3
    .csv("csv/healthmap_projections_2018-08-10.csv")
    .then((data) => {
      dispatch({
        type: "FETCH_EBOLA_DATA_SUCCESS",
        payload: data,
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
  return d3
    .csv("csv/healthmap_projections_2018-08-10.csv")
    .then((data) => {
      dispatch({
        type: "FETCH_EBOLA_DATA_COMBINED_SUCCESS",
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "FETCH_EBOLA_DATA_COMBINED_FAILURE",
        error,
      });
    });
};

export const fetchRiskData = () => (dispatch) => {
  dispatch({
    type: "FETCH_RISK_DATA_REQUEST",
  });
  return d3
    .csv("csv/weighted_flow.csv")
    .then((data) => {
      dispatch({
        type: "FETCH_RISK_DATA_SUCCESS",
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: "FETCH_RISK_DATA_FAILURE",
        error,
      });
    });
};
