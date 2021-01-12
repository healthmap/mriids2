import { changeDateSliderRange } from "../ui";
import * as types from "../../constants/ActionTypes";

describe("Tests for ui actions", () => {
  test("changeDateSliderRange should return expected action", () => {
    const expectedAction = {
      type: types.CHANGE_DATE_SLIDER_RANGE,
      payload: [0, 20],
    };
    expect(changeDateSliderRange([0, 20])).toEqual(expectedAction);
  });
});
