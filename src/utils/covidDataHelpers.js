import { isDateWithinFiltersDateRange } from "./dateHelpers";
import { allCountries } from "../constants/Countries";

export const getCountryCountInDateRange = (
  covidData,
  dateRange,
  typeOfCount = "totalCount"
) => {
  let count = 0;
  if (covidData) {
    Object.keys(covidData).forEach((weekKey) => {
      if (isDateWithinFiltersDateRange(weekKey, dateRange)) {
        count += covidData[weekKey][typeOfCount];
      }
    });
  }
  return count;
};

export const getAllCountriesCount = (covidData = [], dateRange) => {
  let count = 0;
  covidData.forEach((countryObject) => {
    const countryCount = getCountryCountInDateRange(
      countryObject.countryData,
      dateRange,
      "totalCount"
    );
    // This check prevents NaN from being added to the count.
    if (Number.isInteger(countryCount)) {
      count += countryCount;
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
      count = getCountryCountInDateRange(
        selectedCountryDataObject.countryData,
        filters.dateRange,
        "totalCount"
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
    let countryCounts = {
      totalCount: 0,
      per100kCount: 0,
    };
    // 1. Find the data object for the country.
    const countryDataObject = findCountryDataObject(covidData, country);
    // 2. If a countryDataObject is found, execute this block.
    if (countryDataObject) {
      // Get the country's totalCount within the date range in the filters.
      const countryTotalCount = getCountryCountInDateRange(
        countryDataObject.countryData,
        filters.dateRange,
        "totalCount"
      );
      // If the country has a countryTotalCount, assign that to countryCounts.totalCount. Otherwise countryCounts.totalCount is 0.
      countryCounts.totalCount = countryTotalCount ? countryTotalCount : 0;
      // Get the country's per100kCount within the date range in the filters.
      const countryPer100kCount = getCountryCountInDateRange(
        countryDataObject.countryData,
        filters.dateRange,
        "per100kCount"
      );
      // If the country has a countryPer100kCount, assign that to countryCounts.per100kCount. Otherwise countryCounts.per100kCount is 0.
      countryCounts.per100kCount = countryPer100kCount
        ? countryPer100kCount
        : 0;
    }
    // 3. Add the countryCounts to the countriesCounts object.
    countriesCounts[country] = countryCounts;
  });
  return countriesCounts;
};
