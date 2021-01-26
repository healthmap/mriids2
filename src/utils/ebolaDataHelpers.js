import { ebolaOutbreakCountries } from "../constants/Countries";
import {
  isDateWithinFiltersDateRange,
  getLastDateValueWithinDateRange,
} from "./dateHelpers";

// This gets the country case counts for the Snapshot map.
export const getCountriesEbolaCaseCounts = (ebolaData, filters) => {
  let countryCaseCount = {
    Guinea: 0,
    Liberia: 0,
    "Sierra Leone": 0,
  };
  ebolaOutbreakCountries.forEach((country) => {
    // Only run this block if ebolaData is not an empty object.
    if (Object.keys(ebolaData).length) {
      // Select the ebolaData for the specific country.
      const countryEbolaData = ebolaData[country];
      Object.keys(countryEbolaData).forEach((weekDateKey) => {
        // For each key in the countryEbolaData object, check if the date is within the dateRange from the filters.
        // If so, add that count to the countryCaseCount object for the country.
        if (isDateWithinFiltersDateRange(weekDateKey, filters.dateRange)) {
          const weeklyEbolaData = countryEbolaData[weekDateKey];
          // if projections are enabled, the count we want is the 'fourWeeks' projections count.
          if (filters.projection) {
            countryCaseCount[country] += parseInt(
              weeklyEbolaData.projections.fourWeeks
            );
          } else {
            countryCaseCount[country] += parseInt(weeklyEbolaData.value);
          }
        }
      });
    }
  });
  return countryCaseCount;
};

// This gets the case count for the Sidebar
export const getEbolaCaseCount = (diseaseData, filters) => {
  let diseaseCaseCount = 0;
  const ebolaCountriesCaseCounts = getCountriesEbolaCaseCounts(
    diseaseData,
    filters
  );
  if (filters.country === "All") {
    // Loop through each country key in the ebolaCountriesCaseCounts object and add it's value to the diseaseCaseCount counter.
    Object.keys(ebolaCountriesCaseCounts).forEach((countryKey) => {
      diseaseCaseCount += parseInt(ebolaCountriesCaseCounts[countryKey]);
    });
  } else {
    // if a country is selected, only add the value for that specific country.
    diseaseCaseCount = parseInt(ebolaCountriesCaseCounts[filters.country]);
  }
  return diseaseCaseCount;
};

export const getAllFutureProjectedCasesCount = (
  ebolaDataCombined,
  filtersDateRange
) => {
  let numberOfFutureProjectedCases = 0;
  const projectionDatesArray = [];
  // Only execute this block if ebolaDataCombined is not an empty array
  if (ebolaDataCombined.length) {
    // Add the projection date from each row to the projectionDatesArray.
    ebolaDataCombined.forEach((row) => {
      projectionDatesArray.push(row.projection_from);
    });
    // Find the latest projection date within the filtersDateRange.
    const latestProjectionDate = getLastDateValueWithinDateRange(
      projectionDatesArray,
      filtersDateRange
    );
    // Find the row with the latest projections data within the filtersDateRange.
    const latestProjectionRow = ebolaDataCombined.find(
      (row) => row.projection_from === latestProjectionDate
    );
    // Add the number of projected cases in the latestProjectionRow to the numberOfFutureProjectedCases counter.
    numberOfFutureProjectedCases =
      parseFloat(latestProjectionRow["y1.aggregated"]) +
      parseFloat(latestProjectionRow["y2.aggregated"]) +
      parseFloat(latestProjectionRow["y3.aggregated"]) +
      parseFloat(latestProjectionRow["y4.aggregated"]);
  }
  // return the numberOfFutureProjectedCases rounded to a whole number.
  return Math.round(numberOfFutureProjectedCases);
};

export const getCountryFutureProjectedCasesCount = (ebolaData, filters) => {
  let numberOfFutureProjectedCases = 0;
  // Find ebola data for the selected country.
  const countryData = ebolaData[filters.country];
  // Get the keys for the countryData object.
  const countryDataKeys = Object.keys(countryData);
  // Find the last date key that is in the dateRange
  const lastDateKeyInDateRange = getLastDateValueWithinDateRange(
    countryDataKeys,
    filters.dateRange
  );
  // Get the projections data for the last date in the dateRange.
  const latestProjectionsData = countryData[lastDateKeyInDateRange].projections;
  // Add the number of projected cases in the latestProjectionsData object to the numberOfFutureProjectedCases counter.
  Object.keys(latestProjectionsData).forEach((weekKey) => {
    numberOfFutureProjectedCases += latestProjectionsData[weekKey];
  });
  // return the numberOfFutureProjectedCases rounded to a whole number.
  return Math.round(numberOfFutureProjectedCases);
};
