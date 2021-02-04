import dayjs from "dayjs";
import {
  ebolaInitialDateRange,
  covidInitialDateRange,
} from "../constants/DateRanges";

export const getNumberOfWeeksBetweenDates = (firstDate, secondDate) => {
  const startDate = dayjs(firstDate);
  const endDate = dayjs(secondDate);
  // Returns the rounded number of weeks between the startDate and endDate.
  return Math.round(endDate.diff(startDate, "week", true));
};

export const isDateWithinFiltersDateRange = (weekDateString, dateRange) => {
  // Checks to see if the weekDateString is a date that falls within the dateRange from the filters.
  const dateValue = new Date(weekDateString);
  return dateValue > dateRange.from && dateValue < dateRange.to;
};

export const getLastDateValueWithinDateRange = (datesArray = [], dateRange) => {
  // 1. Get an array of dates that are within the dateRange.
  const validDatesArray = [];
  datesArray.forEach((date) => {
    if (isDateWithinFiltersDateRange(date, dateRange)) {
      validDatesArray.push(date);
    }
  });
  // 2. Return the last date in the validDatesArray.
  return validDatesArray[validDatesArray.length - 1];
};

//  Returns the initial date range depending on which outbreak is selected.
export const getOutbreakInitialDateRange = (outbreakSelected) =>
  outbreakSelected === "Ebola Outbreak"
    ? ebolaInitialDateRange
    : covidInitialDateRange;

export const getMinimumDateRangeDate = (outbreakSelected) =>
  outbreakSelected === "Ebola Outbreak"
    ? ebolaInitialDateRange.from
    : covidInitialDateRange.from;

export const getMaximumDateRangeDate = (outbreakSelected) =>
  outbreakSelected === "Ebola Outbreak"
    ? ebolaInitialDateRange.to
    : covidInitialDateRange.to;
