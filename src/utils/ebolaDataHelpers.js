export const prepareEbolaData = (csvData) => {
  const countries = ["Guinea", "Liberia", "Sierra Leone"];
  const keys = ["y"];
  const projections = ["oneWeek", "twoWeeks", "threeWeeks", "fourWeeks"];
  const projectionsMapping = {
    oneWeek: 1,
    twoWeeks: 2,
    threeWeeks: 3,
    fourWeeks: 4,
  };

  let newData = {};

  countries.forEach((country) => {
    newData[country] = {};
    csvData.forEach((row) => {
      newData[country][row.projection_from] = {};
      newData[country][row.projection_from].projections = {};
      projections.forEach((projection) => {
        newData[country][row.projection_from].projections[projection] = {};
        keys.forEach((key) => {
          newData[country][row.projection_from].projections[
            projection
          ] = parseFloat(
            row[`${key}${projectionsMapping[projection]}.${country}`]
          );
        });
      });
      newData[country][row.projection_from].value = row[country];
    });
  });
  return newData;
};

export const isDateWithinFiltersDateRange = (weekDateString, dateRange) => {
  // Checks to see if the weekDateString is a date that falls within the dateRange from the filters.
  const dateValue = new Date(weekDateString);
  return dateValue > dateRange.from && dateValue < dateRange.to;
};

export const getEbolaCountriesCaseCounts = (ebolaData, filters) => {
  const countries = ["Guinea", "Liberia", "Sierra Leone"];
  let countryCaseCount = {
    Guinea: 0,
    Liberia: 0,
    "Sierra Leone": 0,
  };
  countries.forEach((country) => {
    // Only run this block if ebolaData is not an empty object.
    if (Object.keys(ebolaData).length) {
      // Select the ebolaData for the specific country.
      const countryEbolaData = ebolaData[country];
      Object.keys(countryEbolaData).forEach((weekDateKey) => {
        // For each key in the countryEbolaData object, check if the date is within the dateRange from the filters.
        // If so, add that count to the countryCaseCount object for the country.
        if (isDateWithinFiltersDateRange(weekDateKey, filters.dateRange)) {
          const weeklyEbolaData = countryEbolaData[weekDateKey];
          countryCaseCount[country] += parseInt(weeklyEbolaData.value);
        }
      });
    }
  });
  return countryCaseCount;
};

export const getDiseaseCaseCount = (diseaseData, filters) => {
  let diseaseCaseCount = 0;
  const ebolaCountriesCaseCounts = getEbolaCountriesCaseCounts(
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
