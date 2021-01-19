import { ebolaOutbreakCountries } from "../constants/Countries";
import { isDateWithinFiltersDateRange } from "./dateHelpers";

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
  const fourWeekProjectionsData = {
    oneWeek: 0,
    twoWeeks: 0,
    threeWeeks: 0,
    fourWeeks: 0,
  };
  // Only execute this block if ebolaDataCombined is not an empty array
  if (ebolaDataCombined.length) {
    ebolaDataCombined.forEach((row) => {
      const dateValue = new Date(row.projection_from);
      // Only use row data if the dateValue is within the filters.dateRange
      if (isDateWithinFiltersDateRange(dateValue, filtersDateRange)) {
        fourWeekProjectionsData.oneWeek = parseFloat(row["y1.aggregated"]);
        fourWeekProjectionsData.twoWeeks = parseFloat(row["y2.aggregated"]);
        fourWeekProjectionsData.threeWeeks = parseFloat(row["y3.aggregated"]);
        fourWeekProjectionsData.fourWeeks = parseFloat(row["y4.aggregated"]);
      }
    });
  }
  // Add the number of projected cases in the fourWeekProjectionsData object to the numberOfFutureProjectedCases counter.
  Object.keys(fourWeekProjectionsData).forEach((weekKey) => {
    numberOfFutureProjectedCases += fourWeekProjectionsData[weekKey];
  });
  // return the numberOfFutureProjectedCases rounded to a whole number.
  return Math.round(numberOfFutureProjectedCases);
};

export const getCountryFutureProjectedCasesCount = (ebolaData, filters) => {
  let numberOfFutureProjectedCases = 0;
  let fourWeekProjectionsData = {
    oneWeek: 0,
    twoWeeks: 0,
    threeWeeks: 0,
    fourWeeks: 0,
  };
  // Only execute this block if ebolaData is not an empty object
  if (Object.keys(ebolaData).length) {
    Object.keys(ebolaData).forEach((countryKey) => {
      // If the ebolaData countryKey is equal to filters.country, this is the country data that we want.
      if (countryKey === filters.country) {
        const countryData = ebolaData[countryKey];
        for (const date in countryData) {
          // this is a check to filter unwanted properties from the countryData object.
          if (Object.prototype.hasOwnProperty.call(countryData, date)) {
            const dateValue = new Date(date);
            // Only use row data if the dateValue is within the filters.dateRange
            if (isDateWithinFiltersDateRange(dateValue, filters.dateRange)) {
              fourWeekProjectionsData = countryData[date].projections;
            }
          }
        }
      }
    });
  }
  // Add the number of projected cases in the fourWeekProjectionsData object to the numberOfFutureProjectedCases counter.
  Object.keys(fourWeekProjectionsData).forEach((weekKey) => {
    numberOfFutureProjectedCases += fourWeekProjectionsData[weekKey];
  });
  // return the numberOfFutureProjectedCases rounded to a whole number.
  return Math.round(numberOfFutureProjectedCases);
};
