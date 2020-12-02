import { getValidCountryNameValue } from "../commonHelpers";

describe("Tests for the getValidCountryNameValue helper function", () => {
  test("should return USA", () => {
    expect(getValidCountryNameValue("United States of America")).toEqual("USA");
  });
  test("should return Guinea", () => {
    expect(getValidCountryNameValue("Guinea")).toEqual("Guinea");
  });
});
