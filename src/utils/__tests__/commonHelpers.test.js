import { capitalizeString } from "../commonHelpers";

describe("Tests for capitalizeString", () => {
  test("should return 'Cases'", () => {
    expect(capitalizeString("cases")).toEqual("Cases");
  });
  test("should return 'Deaths'", () => {
    expect(capitalizeString("deaths")).toEqual("Deaths");
  });
});
