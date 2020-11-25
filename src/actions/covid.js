import axios from "axios";
import * as types from "../constants/ActionTypes";
import { allCountries } from "../constants/Countries";

export const fetchCovidData = () => (dispatch) => {
  dispatch({
    type: types.FETCH_COVID_DATA_REQUEST,
  });
  const countriesString = allCountries.join();

  return axios
    .get(`https://disease.sh/v3/covid-19/historical/${countriesString}`)
    .then((response) => {
      dispatch({
        type: types.FETCH_COVID_DATA_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: types.FETCH_COVID_DATA_FAILURE,
        error,
      });
    });
};
