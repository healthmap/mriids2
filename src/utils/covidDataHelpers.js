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

export const getCovidCaseCount = (covidData = [], filters) => {
  let caseCount = 0;
  if (filters.country === "All") {
    // Loops through each country in the covidData array.
    covidData.forEach((countryData) => {
      // Adds the case count for the last key in the 'cases' object for each country to the caseCount counter.
      caseCount += countryData.cases[getLastObjectKey(countryData.cases)];
    });
  } else {
    // Finds the data object for the country selected in filters.country.
    const selectedCountryDataObject = covidData.find(
      (dataObject) => dataObject.countryName === filters.country
    );
    // Adds the case count for the last key in the 'cases' object for the selected country to the caseCount counter.
    caseCount +=
      selectedCountryDataObject.cases[
        getLastObjectKey(selectedCountryDataObject.cases)
      ];
  }
  return caseCount;
};
