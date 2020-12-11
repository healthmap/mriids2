import * as d3 from "d3-fetch";
import * as types from "../constants/ActionTypes";
import { prepareEbolaData } from "../utils/ebolaDataHelpers";

export const fetchEbolaData = () => (dispatch) => {
  dispatch({
    type: types.FETCH_EBOLA_DATA_REQUEST,
  });
  return d3
    .csv("csv/healthmap_projections_2018-08-10.csv")
    .then((data) => {
      const preparedData = prepareEbolaData(data);
      dispatch({
        type: types.FETCH_EBOLA_DATA_SUCCESS,
        payload: preparedData,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_EBOLA_DATA_FAILURE,
        error,
      });
    });
};

export const fetchEbolaDataCombined = () => (dispatch) => {
  dispatch({
    type: types.FETCH_EBOLA_DATA_COMBINED_REQUEST,
  });
  return d3
    .csv("csv/healthmap_projections_2018-08-10.csv")
    .then((data) => {
      dispatch({
        type: types.FETCH_EBOLA_DATA_COMBINED_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_EBOLA_DATA_COMBINED_FAILURE,
        error,
      });
    });
};

// Since this data is currently hardcoded in Mapbox style for the Risk map, this is currently not being used.
// Keeping here in case we decide to use a different map/style for the Risk map.
export const fetchRiskData = () => (dispatch) => {
  dispatch({
    type: types.FETCH_RISK_DATA_REQUEST,
  });
  return d3
    .csv("csv/weighted_flow.csv")
    .then((data) => {
      dispatch({
        type: types.FETCH_RISK_DATA_SUCCESS,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_RISK_DATA_FAILURE,
        error,
      });
    });
};
