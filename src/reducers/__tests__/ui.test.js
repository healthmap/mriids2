import ui from "../ui";
import * as types from "../../constants/ActionTypes";
import { reduxInitialState } from "../../constants/CommonTestData";

const initialUiState = reduxInitialState.ui;

describe("Tests for ui reducer", () => {
  test("should return the initialUiState", () => {
    expect(ui(initialUiState, {})).toEqual(initialUiState);
  });
  test("should handle date slider range change", () => {
    const changedUiState = {
      ...initialUiState,
      dateSliderRange: [0, 20],
    };
    expect(
      ui(initialUiState, {
        type: types.CHANGE_DATE_SLIDER_RANGE,
        payload: [0, 20],
      })
    ).toEqual(changedUiState);
  });
});
