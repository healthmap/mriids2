import {
  getNumberOfWeeksBetweenDates,
  isDateWithinFiltersDateRange,
  getOutbreakInitialDateRange,
  getMinimumDateRangeDate,
  getMaximumDateRangeDate,
} from "../dateHelpers";
import {
  ebolaInitialDateRange,
  covidInitialDateRange,
} from "../../constants/DateRanges";
import { reduxInitialState } from "../../constants/CommonTestData";

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

describe("Tests for isDateWithinFiltersDateRange", () => {
  test("should return true because date is within filterDates", () => {
    expect(
      isDateWithinFiltersDateRange(
        "2014-10-13",
        reduxInitialState.filters.dateRange
      )
    ).toEqual(true);
  });
  test("should return false because 2013-10-13 is outside filterDates", () => {
    expect(
      isDateWithinFiltersDateRange(
        "2013-10-13",
        reduxInitialState.filters.dateRange
      )
    ).toEqual(false);
  });
  test("should return false because 10/28/20 is outside filterDates", () => {
    expect(
      isDateWithinFiltersDateRange(
        "10/28/20",
        reduxInitialState.filters.dateRange
      )
    ).toEqual(false);
  });
});

describe("Tests for getOutbreakInitialDateRange", () => {
  test("should return ebolaInitialDateRange", () => {
    expect(getOutbreakInitialDateRange("Ebola Outbreak")).toEqual(
      ebolaInitialDateRange
    );
  });
  test("should return covidInitialDateRange", () => {
    expect(getOutbreakInitialDateRange("COVID 19")).toEqual(
      covidInitialDateRange
    );
  });
});

describe("Tests for getMinimumDateRangeDate", () => {
  test("should return return October 1 2014", () => {
    expect(getMinimumDateRangeDate("Ebola Outbreak")).toEqual(
      ebolaInitialDateRange.from
    );
  });
  test("should return return January 1 2020", () => {
    expect(getMinimumDateRangeDate("COVID 19")).toEqual(
      covidInitialDateRange.from
    );
  });
});

describe("Tests for getMaximumDateRangeDate", () => {
  test("should return return February 20 2016", () => {
    expect(getMaximumDateRangeDate("Ebola Outbreak")).toEqual(
      ebolaInitialDateRange.to
    );
  });
  test("should return return today's date", () => {
    expect(getMaximumDateRangeDate("COVID 19")).toEqual(
      covidInitialDateRange.to
    );
  });
});
