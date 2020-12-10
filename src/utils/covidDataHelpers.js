import { isDateWithinFiltersDateRange } from "./dateHelpers";
import { allCountries } from "../constants/Countries";
import { getValidCountryNameValue } from "./commonHelpers";

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

export const getLastObjectKey = (dataObject) => {
  // Gets all the keys of the dataObject.
  const objectKeys = Object.keys(dataObject);
  // Returns the last key in the dataObject.
  return objectKeys[objectKeys.length - 1];
};

export const getLatestCountryCountInDateRange = (
  countryCovidData,
  dateRange
) => {
  // 1. Add all of the data within the dateRange to the dataInDateRange object.
  let dataInDateRange = {};
  Object.keys(countryCovidData).forEach((weekKey) => {
    if (isDateWithinFiltersDateRange(weekKey, dateRange)) {
      dataInDateRange[weekKey] = countryCovidData[weekKey];
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
    // Loops through each country in the covidData array.
    covidData.forEach((countryData) => {
      // Adds the latest case count for each country to the caseCount.
      caseCount += getLatestCountryCountInDateRange(
        countryData.cases,
        filters.dateRange
      );
    });
  } else {
    // Finds the data object for the country selected in filters.country.
    const selectedCountryDataObject = covidData.find(
      (dataObject) =>
        getValidCountryNameValue(dataObject.countryName) === filters.country
    );
    // If data for the country is found, get the latest case count the country and set it to the caseCount variable.
    if (selectedCountryDataObject) {
      caseCount = getLatestCountryCountInDateRange(
        selectedCountryDataObject.cases,
        filters.dateRange
      );
    }
  }
  // Only returns the caseCount value if it is an integer. This ensures the caseCount returned is not NaN.
  return Number.isInteger(caseCount) ? caseCount : 0;
};

// This gets the country case counts for the Snapshot map.
export const getCountriesCovidCaseCounts = (covidData, filters) => {
  let countriesCaseCounts = {};
  allCountries.forEach((country) => {
    let countryCaseCount;
    // 1. Find the data object for the country.
    const countryDataObject = covidData.find(
      (dataObject) =>
        getValidCountryNameValue(dataObject.countryName) === country
    );
    // 2. If a countryDataObject is found, get the latest case count within the dateRange and set it to countryCaseCount.
    // If no countryDataObject is found, set countryCaseCount to 0
    if (countryDataObject) {
      countryCaseCount = getLatestCountryCountInDateRange(
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
