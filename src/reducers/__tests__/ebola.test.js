import ebola from "../ebola";
import * as types from "../../constants/ActionTypes";
import { reduxInitialState } from "../../constants/CommonTestData";

const ebolaInitialState = reduxInitialState.ebola;

test("should return the ebolaInitialState", () => {
  expect(ebola(ebolaInitialState, {})).toEqual(ebolaInitialState);
});

describe("Tests for updating the ebolaData", () => {
  test("should handle request to update the ebolaData", () => {
    const newEbolaState = {
      ...ebolaInitialState,
      ebolaData: {
        isFetching: 1,
        data: {},
        error: {},
      },
    };
    expect(
      ebola(ebolaInitialState, { type: types.FETCH_EBOLA_DATA_REQUEST })
    ).toEqual(newEbolaState);
  });
  test("should handle updating the ebolaData", () => {
    const newEbolaData = { someKey: "some value" };
    const updatedEbolaDataState = {
      ...ebolaInitialState,
      ebolaData: {
        isFetching: -1,
        data: newEbolaData,
        error: {},
      },
    };
    expect(
      ebola(ebolaInitialState, {
        type: types.FETCH_EBOLA_DATA_SUCCESS,
        payload: newEbolaData,
      })
    ).toEqual(updatedEbolaDataState);
  });
  test("should handle failure to update the ebolaData", () => {
    const errorObject = { error: "Something went wrong fetching the data" };
    const newEbolaState = {
      ...ebolaInitialState,
      ebolaData: {
        isFetching: -1,
        data: {},
        error: errorObject,
      },
    };
    expect(
      ebola(ebolaInitialState, {
        type: types.FETCH_EBOLA_DATA_FAILURE,
        error: errorObject,
      })
    ).toEqual(newEbolaState);
  });
});

describe("Tests for updating the ebolaDataCombined", () => {
  test("should handle request to update the ebolaDataCombined", () => {
    const newEbolaState = {
      ...ebolaInitialState,
      ebolaDataCombined: {
        isFetching: 1,
        data: {},
        error: {},
      },
    };
    expect(
      ebola(ebolaInitialState, {
        type: types.FETCH_EBOLA_DATA_COMBINED_REQUEST,
      })
    ).toEqual(newEbolaState);
  });
  test("should handle successfully updating the ebolaDataCombined", () => {
    const newEbolaDataCombined = [1, 2, 3];
    const updatedEbolaDataCombinedState = {
      ...ebolaInitialState,
      ebolaDataCombined: {
        isFetching: -1,
        data: newEbolaDataCombined,
        error: {},
      },
    };
    expect(
      ebola(ebolaInitialState, {
        type: types.FETCH_EBOLA_DATA_COMBINED_SUCCESS,
        payload: newEbolaDataCombined,
      })
    ).toEqual(updatedEbolaDataCombinedState);
  });
  test("should handle failure to update the ebolaDataCombined", () => {
    const errorObject = { error: "Something went wrong fetching the data" };
    const newEbolaState = {
      ...ebolaInitialState,
      ebolaDataCombined: {
        isFetching: -1,
        data: {},
        error: errorObject,
      },
    };
    expect(
      ebola(ebolaInitialState, {
        type: types.FETCH_EBOLA_DATA_COMBINED_FAILURE,
        error: errorObject,
      })
    ).toEqual(newEbolaState);
  });
});

describe("Tests for updating the riskData", () => {
  test("should handle request to update the riskData", () => {
    const newEbolaState = {
      ...ebolaInitialState,
      riskData: {
        isFetching: 1,
        data: {},
        error: {},
      },
    };
    expect(
      ebola(ebolaInitialState, {
        type: types.FETCH_RISK_DATA_REQUEST,
      })
    ).toEqual(newEbolaState);
  });
  test("should handle successfully updating the riskData", () => {
    const newRiskData = { someKey: "some value" };
    const updatedRiskDataState = {
      ...ebolaInitialState,
      riskData: {
        isFetching: -1,
        data: newRiskData,
        error: {},
      },
    };
    expect(
      ebola(ebolaInitialState, {
        type: types.FETCH_RISK_DATA_SUCCESS,
        payload: newRiskData,
      })
    ).toEqual(updatedRiskDataState);
  });
  test("should handle failure to update the riskData", () => {
    const errorObject = { error: "Something went wrong fetching the data" };
    const newEbolaState = {
      ...ebolaInitialState,
      riskData: {
        isFetching: -1,
        data: {},
        error: errorObject,
      },
    };
    expect(
      ebola(ebolaInitialState, {
        type: types.FETCH_RISK_DATA_FAILURE,
        error: errorObject,
      })
    ).toEqual(newEbolaState);
  });
});
