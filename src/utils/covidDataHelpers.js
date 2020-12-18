import { isDateWithinFiltersDateRange } from "./dateHelpers";
import { allCountries } from "../constants/Countries";
import {
  getValidCountryNameValue,
  addUnderscoreWordSeparator,
} from "./commonHelpers";

export const parseCovidData = (jhuCovidData = []) => {
  // This ensures that there are no 'null' values in the jhuCovidData array.
  const covidDataNoNullValues = jhuCovidData.filter(
    (dataRow) => dataRow !== null
  );
  let parsedData = [];
  covidDataNoNullValues.forEach((row) => {
    // If the row contains data covid data for a country, execute this block.
    if (Object.prototype.hasOwnProperty.call(row, "country")) {
      parsedData.push({
        countryName: row.country,
        cases: row.timeline.cases,
        deaths: row.timeline.deaths,
      });
    }
  });
  return parsedData;
};

export const parseCovidCSVData = (csvData = []) => {
  const parsedData = [];
  allCountries.forEach((country) => {
    // The countryData object will store the daily case/death counts for the country.
    const countryData = {};
    // If the csvData is not an empty array, get the case/death counts for the country.
    if (csvData.length) {
      csvData.forEach((row) => {
        countryData[row.dates] = row[addUnderscoreWordSeparator(country)];
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
  Object.keys(covidData).forEach((weekKey) => {
    if (isDateWithinFiltersDateRange(weekKey, dateRange)) {
      count += covidData[weekKey];
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
export const getCovidCaseCount = (
  covidData = [],
  covidDataCombined,
  filters
) => {
  let caseCount = 0;
  if (filters.country === "All") {
    // If "All" countries are selected, get the latest value from the covidDataCombined.cases object within the dateRange.
    caseCount = getLatestCountInDateRange(
      covidDataCombined.cases,
      filters.dateRange
    );
  } else {
    // Finds the data object for the country selected in filters.country.
    const selectedCountryDataObject = covidData.find(
      (dataObject) =>
        getValidCountryNameValue(dataObject.countryName) === filters.country
    );
    // If data for the country is found, get the latest case count the country and set it to the caseCount variable.
    if (selectedCountryDataObject) {
      caseCount = getLatestCountInDateRange(
        selectedCountryDataObject.cases,
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
export const getCountriesCovidCaseCounts = (covidData, filters) => {
  let countriesCaseCounts = {};
  allCountries.forEach((country) => {
    let countryCaseCount;
    // 1. Find the data object for the country.
    const countryDataObject = findCountryDataObject(covidData, country);
    // 2. If a countryDataObject is found, get the latest case count within the dateRange and set it to countryCaseCount.
    // If no countryDataObject is found, set countryCaseCount to 0
    if (countryDataObject) {
      countryCaseCount = getLatestCountInDateRange(
        countryDataObject.cases,
        filters.dateRange
      );
    } else {
      countryCaseCount = 0;
    }
    // 3. Add the data to the countriesCaseCounts object.
    // If the case count is an integer, add that. Otherwise add 0.
    countriesCaseCounts[country] = countryCaseCount;
  });
  return countriesCaseCounts;
};
