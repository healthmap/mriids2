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
