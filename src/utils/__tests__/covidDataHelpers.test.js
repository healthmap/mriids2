import { parseCovidData } from "../covidDataHelpers";
import { testCovidData } from "../testData";

describe("Tests for the parseCovidData helper function", () => {
  test("should return data in the expected format", () => {
    expect(parseCovidData(testCovidData)).toEqual([
      {
        countryName: "Canada",
        cases: {
          "11/11/20": 280465,
          "11/12/20": 285939,
        },
        deaths: {
          "11/11/20": 10748,
          "11/12/20": 10828,
        },
      },
      {
        countryName: "Honduras",
        cases: {
          "11/11/20": 101169,
          "11/12/20": 101468,
        },
        deaths: {
          "11/11/20": 2797,
          "11/12/20": 2804,
        },
      },
    ]);
  });
});
