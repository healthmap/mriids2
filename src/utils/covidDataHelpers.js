import { isDateWithinFiltersDateRange } from "./dateHelpers";

export const parseCovidData = (countriesCovidData = []) => {
  let parsedData = [];
  countriesCovidData.forEach((row) => {
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
      (dataObject) => dataObject.countryName === filters.country
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
  if (Number.isInteger(caseCount)) {
    return caseCount;
  }
};
