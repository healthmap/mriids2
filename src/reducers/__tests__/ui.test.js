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
  test("should handle opening the date range popover", () => {
    const changedUiState = {
      ...initialUiState,
      isDateRangePopoverOpen: true,
    };
    expect(
      ui(initialUiState, {
        type: types.OPEN_DATE_RANGE_POPOVER,
      })
    ).toEqual(changedUiState);
  });
  test("should handle closing the date range popover", () => {
    const changedUiState = {
      ...initialUiState,
      isDateRangePopoverOpen: false,
    };
    expect(
      ui(initialUiState, {
        type: types.CLOSE_DATE_RANGE_POPOVER,
      })
    ).toEqual(changedUiState);
  });
  test("should setting the popover anchor element", () => {
    const anchorElement = "some element";
    const changedUiState = {
      ...initialUiState,
      popoverAnchorElement: anchorElement,
    };
    expect(
      ui(initialUiState, {
        type: types.SET_POPOVER_ANCHOR_ELEMENT,
        payload: anchorElement,
      })
    ).toEqual(changedUiState);
  });
  test("should clearing the popover anchor element", () => {
    const changedUiState = {
      ...initialUiState,
      popoverAnchorElement: null,
    };
    expect(
      ui(initialUiState, {
        type: types.CLEAR_POPOVER_ANCHOR_ELEMENT,
      })
    ).toEqual(changedUiState);
  });
  test("should handle opening the projections popup", () => {
    const changedUiState = {
      ...initialUiState,
      isProjectionsPopupOpen: true,
    };
    expect(
      ui(initialUiState, {
        type: types.OPEN_PROJECTIONS_POPUP,
      })
    ).toEqual(changedUiState);
  });
  test("should handle closing the projections popup", () => {
    const changedUiState = {
      ...initialUiState,
      isProjectionsPopupOpen: false,
    };
    expect(
      ui(initialUiState, {
        type: types.CLOSE_PROJECTIONS_POPUP,
      })
    ).toEqual(changedUiState);
  });
  test("should handle confirming the projections popup", () => {
    const changedUiState = {
      ...initialUiState,
      hasConfirmedProjectionsPopup: true,
    };
    expect(
      ui(initialUiState, {
        type: types.CONFIRM_PROJECTIONS_POPUP,
      })
    ).toEqual(changedUiState);
  });
});
