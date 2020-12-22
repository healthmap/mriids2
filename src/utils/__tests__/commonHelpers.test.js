import {
  getValidCountryNameValue,
  addUnderscoreWordSeparator,
} from "../commonHelpers";

describe("Tests for the getValidCountryNameValue helper function", () => {
  test("should return United States of America", () => {
    expect(getValidCountryNameValue("USA")).toEqual("United States of America");
  });
  test("should return United Kingdom", () => {
    expect(getValidCountryNameValue("UK")).toEqual("United Kingdom");
  });
  test("should return Libya", () => {
    expect(getValidCountryNameValue("Libyan Arab Jamahiriya")).toEqual("Libya");
  });
  test("should return Syria", () => {
    expect(getValidCountryNameValue("Syrian Arab Republic")).toEqual("Syria");
  });
  test("should return South Korea", () => {
    expect(getValidCountryNameValue("S. Korea")).toEqual("South Korea");
  });
  test("should return Myanmar", () => {
    expect(getValidCountryNameValue("Burma")).toEqual("Myanmar");
  });
  test("should return Laos", () => {
    expect(
      getValidCountryNameValue("Lao People's Democratic Republic")
    ).toEqual("Laos");
  });
  test("should return United Arab Emirates", () => {
    expect(getValidCountryNameValue("UAE")).toEqual("United Arab Emirates");
  });
  test("should return eSwatini", () => {
    expect(getValidCountryNameValue("Swaziland")).toEqual("eSwatini");
  });
  test("should return Guinea", () => {
    expect(getValidCountryNameValue("Guinea")).toEqual("Guinea");
  });
});

describe("Tests for addUnderscoreWordSeparator", () => {
  test("should return United_States_of_America", () => {
    expect(addUnderscoreWordSeparator("United States of America")).toEqual(
      "United_States_of_America"
    );
  });
});
