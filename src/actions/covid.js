import axios from "axios";
import * as types from "../constants/ActionTypes";
import { parseCovidData } from "../utils/covidDataHelpers";
import { allCountries } from "../constants/Countries";

export const fetchCovidData = () => (dispatch) => {
  dispatch({
    type: types.FETCH_COVID_DATA_REQUEST,
  });
  const countries = ["Burma", ...allCountries];
  const countriesString = countries.join();

  return axios
    .get(
      `https://disease.sh/v3/covid-19/historical/${countriesString}?lastdays=all`
    )
    .then((response) => {
      dispatch({
        type: types.FETCH_COVID_DATA_SUCCESS,
        payload: parseCovidData(response.data),
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_COVID_DATA_FAILURE,
        error,
      });
    });
};

export const fetchCovidDataCombined = () => (dispatch) => {
  dispatch({
    type: types.FETCH_COVID_DATA_COMBINED_REQUEST,
  });

  return axios
    .get("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
    .then((response) => {
      dispatch({
        type: types.FETCH_COVID_DATA_COMBINED_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_COVID_DATA_COMBINED_FAILURE,
        error,
      });
    });
};
