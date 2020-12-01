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

export const getCovidCountryCaseCountDataInDateRange = (
  countryCovidCaseData,
  dateRange
) => {
  let dataInDateRange = {};
  Object.keys(countryCovidCaseData).forEach((weekKey) => {
    // If the weekKey date is within the dateRange, add this data to the dataInDateRange object.
    if (isDateWithinFiltersDateRange(weekKey, dateRange)) {
      dataInDateRange[weekKey] = countryCovidCaseData[weekKey];
    }
  });
  return dataInDateRange;
};

export const getCovidCaseCount = (covidData = [], filters) => {
  let caseCount = 0;
  if (filters.country === "All") {
    // Loops through each country in the covidData array.
    covidData.forEach((countryData) => {
      const countryCasesInDateRange = getCovidCountryCaseCountDataInDateRange(
        countryData.cases,
        filters.dateRange
      );
      const lastDateKey = getLastObjectKey(countryCasesInDateRange);
      // Adds the case count for the last key in the 'cases' object for each country to the caseCount counter.
      caseCount += countryCasesInDateRange[lastDateKey];
    });
  } else {
    // Finds the data object for the country selected in filters.country.
    const selectedCountryDataObject = covidData.find(
      (dataObject) => dataObject.countryName === filters.country
    );
    if (selectedCountryDataObject) {
      // If data for the country is found, adds the case count for the last key in the 'cases' object to the caseCount counter.
      const countryCasesInDateRange = getCovidCountryCaseCountDataInDateRange(
        selectedCountryDataObject.cases,
        filters.dateRange
      );
      const lastDateKey = getLastObjectKey(countryCasesInDateRange);
      caseCount += countryCasesInDateRange[lastDateKey];
    }
  }
  // Only returns the caseCount value if it is an integer. This ensures the caseCount returned is not NaN.
  if (Number.isInteger(caseCount)) {
    return caseCount;
  }
};
