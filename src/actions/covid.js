import * as d3 from "d3-fetch";
import * as types from "../constants/ActionTypes";
import {
  parseCovidCSVData,
  parseCovidProjectionsData,
} from "../utils/covidDataHelpers";

export const fetchCovidCaseCounts = () => (dispatch) => {
  dispatch({ type: types.FETCH_COVID_CASE_COUNT_DATA_REQUEST });
  return d3
    .csv("csv/covidData/cases_all.csv")
    .then((data) =>
      dispatch({
        type: types.FETCH_COVID_CASE_COUNT_DATA_SUCCESS,
        payload: parseCovidCSVData(data),
      })
    )
    .catch((error) => {
      dispatch({
        type: types.FETCH_COVID_CASE_COUNT_DATA_FAILURE,
        error,
      });
    });
};

export const fetchCovidDeathCounts = () => (dispatch) => {
  dispatch({ type: types.FETCH_COVID_DEATH_COUNT_DATA_REQUEST });
  return d3
    .csv("csv/covidData/deaths_all.csv")
    .then((data) =>
      dispatch({
        type: types.FETCH_COVID_DEATH_COUNT_DATA_SUCCESS,
        payload: parseCovidCSVData(data),
      })
    )
    .catch((error) => {
      dispatch({
        type: types.FETCH_COVID_DEATH_COUNT_DATA_FAILURE,
        error,
      });
    });
};

export const fetchCovidProjectionsData = () => (dispatch) => {
  dispatch({ type: types.FETCH_COVID_PROJECTIONS_DATA_REQUEST });
  return d3
    .csv("csv/covidData/latest_model_outputs.csv")
    .then((data) =>
      dispatch({
        type: types.FETCH_COVID_PROJECTIONS_DATA_SUCCESS,
        payload: parseCovidProjectionsData(data),
      })
    )
    .catch((error) => {
      dispatch({
        type: types.FETCH_COVID_PROJECTIONS_DATA_FAILURE,
        error,
      });
    });
};
