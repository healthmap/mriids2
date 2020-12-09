import ebola from "../ebola";
import * as types from "../../constants/ActionTypes";
import { reduxInitialState } from "../../constants/CommonTestData";

const ebolaInitialState = reduxInitialState.ebola;

describe("Tests for the ebola reducer", () => {
  test("should return the ebolaInitialState", () => {
    expect(ebola(ebolaInitialState, {})).toEqual(ebolaInitialState);
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
  test("should handle updating the ebolaDataCombined", () => {
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
  test("should handle updating the riskData", () => {
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
});
