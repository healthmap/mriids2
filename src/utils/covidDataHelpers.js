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

export const getAllCountriesCaseCounts = (covidData = [], dateRange) => {
  let count = 0;
  covidData.forEach((countryObject) => {
    const countryCaseCount = getCountInDateRange(
      countryObject.countryData,
      dateRange
    );
    // This check prevents NaN from being added to the count.
    if (Number.isInteger(countryCaseCount)) {
      count += getCountInDateRange(countryObject.countryData, dateRange);
    }
  });
  return count;
};

// This gets the case count for the Sidebar
export const getCovidCaseCount = (covidData = [], filters) => {
  let caseCount = 0;
  if (filters.country === "All") {
    // If "All" countries are selected, get the case counts for all countries within the dateRange.
    caseCount = getAllCountriesCaseCounts(covidData, filters.dateRange);
  } else {
    // Finds the data object for the country selected in filters.country.
    const selectedCountryDataObject = covidData.find(
      (dataObject) => dataObject.countryName === filters.country
    );
    // If data for the country is found, get the latest case count the country and set it to the caseCount variable.
    if (selectedCountryDataObject) {
      caseCount = getCountInDateRange(
        selectedCountryDataObject.countryData,
        filters.dateRange
      );
    }
  }
  // Only returns the caseCount value if it is an integer. This ensures the caseCount returned is not NaN.
  return Number.isInteger(caseCount) ? caseCount : 0;
};

// Find data object for the specified country.
export const findCountryDataObject = (covidData, countryName) =>
  covidData.find((dataObject) => dataObject.countryName === countryName);

// This gets the country case counts for the Snapshot map.
export const getCountriesCovidCaseCounts = (covidData = [], filters) => {
  let countriesCaseCounts = {};
  allCountries.forEach((country) => {
    let countryCaseCount;
    // 1. Find the data object for the country.
    const countryDataObject = findCountryDataObject(covidData, country);
    // 2. If a countryDataObject is found, get the latest case count within the dateRange and set it to countryCaseCount.
    // If no countryDataObject is found, set countryCaseCount to 0
    if (countryDataObject) {
      countryCaseCount = getCountInDateRange(
        countryDataObject.countryData,
        filters.dateRange
      );
    } else {
      countryCaseCount = 0;
    }
    // 3. Add the data to the countriesCaseCounts object.
    // If the case count is an integer, add that. Otherwise add 0.
    countriesCaseCounts[country] = Number.isInteger(countryCaseCount)
      ? countryCaseCount
      : 0;
  });
  return countriesCaseCounts;
};
