import covid from "../covid";
import * as types from "../../constants/ActionTypes";
import { reduxInitialState } from "../../constants/CommonTestData";

const covidInitialState = reduxInitialState.covid;

test("covid reducer should return the covidInitialState", () => {
  expect(covid(covidInitialState, {})).toEqual(covidInitialState);
});
describe("Tests for updating the covidData", () => {
  test("should handle request to update the covidData", () => {
    const newCovidState = {
      ...covidInitialState,
      covidData: {
        isFetching: 1,
        data: [],
        error: {},
      },
    };
    expect(
      covid(covidInitialState, {
        type: types.FETCH_COVID_DATA_REQUEST,
      })
    ).toEqual(newCovidState);
  });
  test("should handle successfully updating the covidData", () => {
    const newCovidData = [1, 2, 3];
    const updatedCovidDataState = {
      ...covidInitialState,
      covidData: {
        isFetching: -1,
        data: newCovidData,
        error: {},
      },
    };
    expect(
      covid(covidInitialState, {
        type: types.FETCH_COVID_DATA_SUCCESS,
        payload: newCovidData,
      })
    ).toEqual(updatedCovidDataState);
  });
  test("should handle failure to update the covidData", () => {
    const errorMessage = { error: "Something went wrong fetching the data" };
    const newCovidState = {
      ...covidInitialState,
      covidData: {
        isFetching: -1,
        data: [],
        error: errorMessage,
      },
    };
    expect(
      covid(covidInitialState, {
        type: types.FETCH_COVID_DATA_FAILURE,
        error: errorMessage,
      })
    ).toEqual(newCovidState);
  });
});
