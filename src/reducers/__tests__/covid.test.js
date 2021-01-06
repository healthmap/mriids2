import covid from "../covid";
import * as types from "../../constants/ActionTypes";
import { reduxInitialState } from "../../constants/CommonTestData";

const covidInitialState = reduxInitialState.covid;

test("covid reducer should return the covidInitialState", () => {
  expect(covid(covidInitialState, {})).toEqual(covidInitialState);
});

describe("Tests for updating the caseCounts", () => {
  test("should handle request to update the caseCounts", () => {
    const newCovidState = {
      ...covidInitialState,
      caseCounts: {
        isFetching: 1,
        data: [],
        error: {},
      },
    };
    expect(
      covid(covidInitialState, {
        type: types.FETCH_COVID_CASE_COUNT_DATA_REQUEST,
      })
    ).toEqual(newCovidState);
  });
  test("should handle successfully updating the caseCounts", () => {
    const newCovidData = [1, 2, 3];
    const updatedCovidDataState = {
      ...covidInitialState,
      caseCounts: {
        isFetching: -1,
        data: newCovidData,
        error: {},
      },
    };
    expect(
      covid(covidInitialState, {
        type: types.FETCH_COVID_CASE_COUNT_DATA_SUCCESS,
        payload: newCovidData,
      })
    ).toEqual(updatedCovidDataState);
  });
  test("should handle failure to update the caseCounts", () => {
    const errorObject = { error: "Something went wrong fetching the data" };
    const newCovidState = {
      ...covidInitialState,
      caseCounts: {
        isFetching: -1,
        data: [],
        error: errorObject,
      },
    };
    expect(
      covid(covidInitialState, {
        type: types.FETCH_COVID_CASE_COUNT_DATA_FAILURE,
        error: errorObject,
      })
    ).toEqual(newCovidState);
  });
});

describe("Tests for updating the death counts", () => {
  test("should handle request to update the deathCounts", () => {
    const newCovidState = {
      ...covidInitialState,
      deathCounts: {
        isFetching: 1,
        data: [],
        error: {},
      },
    };
    expect(
      covid(covidInitialState, {
        type: types.FETCH_COVID_DEATH_COUNT_DATA_REQUEST,
      })
    ).toEqual(newCovidState);
  });
  test("should handle successfully updating the deathCounts", () => {
    const newCovidData = [1, 2, 3];
    const updatedCovidDataState = {
      ...covidInitialState,
      deathCounts: {
        isFetching: -1,
        data: newCovidData,
        error: {},
      },
    };
    expect(
      covid(covidInitialState, {
        type: types.FETCH_COVID_DEATH_COUNT_DATA_SUCCESS,
        payload: newCovidData,
      })
    ).toEqual(updatedCovidDataState);
  });
  test("should handle failure to update the deathCounts", () => {
    const errorObject = { error: "Something went wrong fetching the data" };
    const newCovidState = {
      ...covidInitialState,
      deathCounts: {
        isFetching: -1,
        data: [],
        error: errorObject,
      },
    };
    expect(
      covid(covidInitialState, {
        type: types.FETCH_COVID_DEATH_COUNT_DATA_FAILURE,
        error: errorObject,
      })
    ).toEqual(newCovidState);
  });
});
