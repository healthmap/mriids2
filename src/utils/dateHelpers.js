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

export const getLastDateKeyInDateRange = (objectKeysArray = [], dateRange) => {
  // 1. Get an array of date keys that are within the dateRange.
  const validDateKeys = [];
  objectKeysArray.forEach((dateKey) => {
    if (isDateWithinFiltersDateRange(dateKey, dateRange)) {
      validDateKeys.push(dateKey);
    }
  });
  // 2. Return the last dateKey in the validDateKeys array.
  return validDateKeys[validDateKeys.length - 1];
};

//  Returns the initial date range depending on which outbreak is selected.
export const getOutbreakInitialDateRange = (outbreakSelected) =>
  outbreakSelected === "Ebola Outbreak"
    ? ebolaInitialDateRange
    : covidInitialDateRange;
