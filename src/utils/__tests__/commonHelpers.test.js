import { addUnderscoreWordSeparator } from "../commonHelpers";

describe("Tests for addUnderscoreWordSeparator", () => {
  test("should return United_States_of_America", () => {
    expect(addUnderscoreWordSeparator("United States of America")).toEqual(
      "United_States_of_America"
    );
  });
});
