import { getNumberOfWeeksBetweenDates } from "../dateHelpers";
import { ebolaInitialDateRange } from "../../constants/DateRanges";

describe("tests for the getNumberOfWeeksBetweenDates helper function", () => {
  test("using date strings, the dates should be 2 weeks apart", () => {
    expect(getNumberOfWeeksBetweenDates("2020-01-01", "2020-01-15")).toBe(2);
  });
  test("using date values, the dates should be 2 weeks apart", () => {
    expect(
      getNumberOfWeeksBetweenDates(new Date(2014, 9, 1), new Date(2014, 9, 15))
    ).toBe(2);
  });
  test("using date values, the dates should be a rounded 3 weeks apart", () => {
    expect(
      getNumberOfWeeksBetweenDates(new Date(2014, 9, 1), new Date(2014, 9, 20))
    ).toBe(3);
  });
  test("for the ebola outbreak, the initial date range should be 72 weeks apart", () => {
    expect(
      getNumberOfWeeksBetweenDates(
        ebolaInitialDateRange.from,
        ebolaInitialDateRange.to
      )
    ).toBe(72);
  });
});
