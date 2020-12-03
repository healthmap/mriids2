import { getValidCountryNameValue } from "../commonHelpers";

describe("Tests for the getValidCountryNameValue helper function", () => {
  test("should return United States of America", () => {
    expect(getValidCountryNameValue("USA")).toEqual("United States of America");
  });
  test("should return United Kingdom", () => {
    expect(getValidCountryNameValue("UK")).toEqual("United Kingdom");
  });
  test("should return Guinea", () => {
    expect(getValidCountryNameValue("Guinea")).toEqual("Guinea");
  });
});
