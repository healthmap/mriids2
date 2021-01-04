import { isDateWithinFiltersDateRange } from "./dateHelpers";
import { allCountries } from "../constants/Countries";
import {
  getValidCountryNameValue,
  addUnderscoreWordSeparator,
} from "./commonHelpers";

export const parseCovidCSVData = (csvData = []) => {
  const parsedData = [];
  allCountries.forEach((country) => {
    // The countryData object will store the daily case/death counts for the country.
    const countryData = {};
    // If the csvData is not an empty array, get the case/death counts for the country.
    if (csvData.length) {
      csvData.forEach((row) => {
        const caseCountForDate = row[addUnderscoreWordSeparator(country)];
        countryData[row.dates] = parseInt(caseCountForDate);
      });
    }
    // Push an object with the country name and country data to the parsedData array.
    parsedData.push({
      countryName: country,
      countryData,
    });
  });
  return parsedData;
};

export const getLastObjectKey = (dataObject) => {
  // Gets all the keys of the dataObject.
  const objectKeys = Object.keys(dataObject);
  // Returns the last key in the dataObject.
  return objectKeys[objectKeys.length - 1];
};

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

export const getLatestCountInDateRange = (covidData, dateRange) => {
  // 1. Add all of the data within the dateRange to the dataInDateRange object.
  let dataInDateRange = {};
  Object.keys(covidData).forEach((weekKey) => {
    if (isDateWithinFiltersDateRange(weekKey, dateRange)) {
      dataInDateRange[weekKey] = covidData[weekKey];
    }
  });
  // 2. Find the last key in the dataInDateRange object.
  const lastDateKey = getLastObjectKey(dataInDateRange);
  // 3. Return the last value from the dataInDateRange object.
  return dataInDateRange[lastDateKey];
};

// This gets the case count for the Sidebar
export const getCovidCaseCount = (covidData = [], filters) => {
  let caseCount = 0;
  if (filters.country === "All") {
    // If "All" countries are selected, get the latest value from the covidDataCombined.cases object within the dateRange.
    caseCount = getAllCountriesCaseCounts(covidData, filters.dateRange);
  } else {
    // Finds the data object for the country selected in filters.country.
    const selectedCountryDataObject = covidData.find(
      (dataObject) =>
        getValidCountryNameValue(dataObject.countryName) === filters.country
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
  covidData.find(
    (dataObject) =>
      getValidCountryNameValue(dataObject.countryName) === countryName
  );

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
