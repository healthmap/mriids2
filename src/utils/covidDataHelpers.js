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

export const getAllCountriesCovidCaseCount = (covidData = []) => {
  let caseCount = 0;
  covidData.forEach((countryData) => {
    // Gets all the keys of the countryData.cases object.
    const objectKeys = Object.keys(countryData.cases);
    // Gets the last key in the countryData.cases object.
    const lastDateKey = objectKeys[objectKeys.length - 1];
    // Adds the case count for the last key/value pair of the countryData.cases object to the caseCount counter.
    caseCount += countryData.cases[lastDateKey];
  });
  return caseCount;
};
