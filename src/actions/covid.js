import * as d3 from "d3-fetch";
import * as types from "../constants/ActionTypes";

export const fetchCovidCaseCounts = () => (dispatch) => {
  dispatch({ type: types.FETCH_COVID_CASE_COUNT_DATA_REQUEST });
  return d3
    .json("json/covidData/cases.json")
    .then((data) =>
      dispatch({
        type: types.FETCH_COVID_CASE_COUNT_DATA_SUCCESS,
        payload: data,
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
    .json("json/covidData/deaths.json")
    .then((data) =>
      dispatch({
        type: types.FETCH_COVID_DEATH_COUNT_DATA_SUCCESS,
        payload: data,
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
    .json("json/covidData/projections.json")
    .then((data) =>
      dispatch({
        type: types.FETCH_COVID_PROJECTIONS_DATA_SUCCESS,
        payload: data,
      })
    )
    .catch((error) => {
      dispatch({
        type: types.FETCH_COVID_PROJECTIONS_DATA_FAILURE,
        error,
      });
    });
};
