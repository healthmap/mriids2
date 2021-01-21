import { isDateWithinFiltersDateRange } from "./dateHelpers";
import { allCountries } from "../constants/Countries";

export const getCountInDateRange = (covidData, dateRange) => {
  let count = 0;
  if (covidData) {
    Object.keys(covidData).forEach((weekKey) => {
      if (isDateWithinFiltersDateRange(weekKey, dateRange)) {
        count += covidData[weekKey];
      }
    });
  }
  return count;
};

export const getAllCountriesCount = (covidData = [], dateRange) => {
  let count = 0;
  covidData.forEach((countryObject) => {
    const countryCount = getCountInDateRange(
      countryObject.countryData,
      dateRange
    );
    // This check prevents NaN from being added to the count.
    if (Number.isInteger(countryCount)) {
      count += getCountInDateRange(countryObject.countryData, dateRange);
    }
  });
  return count;
};

// This gets the case/death count for the Sidebar
export const getCovidCount = (covidData = [], filters) => {
  let count = 0;
  if (filters.country === "All") {
    // If "All" countries are selected, get the case/death count for all countries within the dateRange.
    count = getAllCountriesCount(covidData, filters.dateRange);
  } else {
    // Finds the data object for the country selected in filters.country.
    const selectedCountryDataObject = covidData.find(
      (dataObject) => dataObject.countryName === filters.country
    );
    // If data for the country is found, get the case/death count for the country and set it to the count variable.
    if (selectedCountryDataObject) {
      count = getCountInDateRange(
        selectedCountryDataObject.countryData,
        filters.dateRange
      );
    }
  }
  // Only returns the count value if it is an integer. This ensures the count returned is not NaN.
  return Number.isInteger(count) ? count : 0;
};

// Find data object for the specified country.
export const findCountryDataObject = (covidData, countryName) =>
  covidData.find((dataObject) => dataObject.countryName === countryName);

// This gets the case/death counts for all countries for the Snapshot map.
export const getCountriesCovidCounts = (covidData = [], filters) => {
  let countriesCounts = {};
  allCountries.forEach((country) => {
    let countryCount;
    // 1. Find the data object for the country.
    const countryDataObject = findCountryDataObject(covidData, country);
    // 2. If a countryDataObject is found, get the case/death count within the dateRange and set it to countryCount.
    // If no countryDataObject is found, set countryCount to 0
    if (countryDataObject) {
      countryCount = getCountInDateRange(
        countryDataObject.countryData,
        filters.dateRange
      );
    } else {
      countryCount = 0;
    }
    // 3. Add the country count data to the countriesCounts object.
    // If the case count is an integer, add that. Otherwise add 0.
    countriesCounts[country] = Number.isInteger(countryCount)
      ? countryCount
      : 0;
  });
  return countriesCounts;
};
