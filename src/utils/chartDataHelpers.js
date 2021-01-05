import dayjs from "dayjs";
import {
  isDateWithinFiltersDateRange,
  getWeeklyDateObjectKeys,
} from "./dateHelpers";
import { findCountryDataObject } from "./covidDataHelpers";

export const getChartColumns = (outbreakName, projection = false) => {
  const columns = [
    {
      type: "date",
      label: "Date",
    },
    {
      type: "number",
      label: `${outbreakName} Cases`,
    },
  ];
  // If filters.projection is True, add "Projected future cases" column to columns array.
  if (projection) {
    columns.push({
      type: "number",
      label: "Projected future cases",
    });
  }
  return columns;
};

export const getWeekProjectionData = (
  lastWeekDate,
  numberOfWeeks,
  projectionsData
) => {
  return [
    new Date(dayjs(lastWeekDate).add(numberOfWeeks, "week").format()),
    null,
    projectionsData,
  ];
};

export const prepareEbolaDataForCharts = (
  ebolaData,
  ebolaDataCombined,
  filters
) => {
  const chartData = [];
  // 1. Add column headers to chartData array.
  chartData.push(getChartColumns("Ebola", filters.projection));
  // 2. Add ebola data to chartData array.

  let projectionsData = {
    oneWeek: null,
    twoWeeks: null,
    threeWeeks: null,
    fourWeeks: null,
  };

  const showEbolaDataCombined =
    ebolaDataCombined && ebolaDataCombined.length && filters.country === "All";

  // Here we are adding the ebola data for all countries
  if (showEbolaDataCombined) {
    ebolaDataCombined.forEach((row) => {
      const dateValue = new Date(row.projection_from);
      // Only push the rows if the dateValue is within the filters.dateRange
      if (isDateWithinFiltersDateRange(dateValue, filters.dateRange)) {
        const aggregatedData = row.aggregated;
        const dataRow = [dateValue, aggregatedData];
        if (filters.projection) {
          // If projections are enabled, store the weekly projection data in the projectionsData object.
          // We also need to add a value of null to the end of the dataRow array.
          projectionsData.oneWeek = parseFloat(row["y1.aggregated"]);
          projectionsData.twoWeeks = parseFloat(row["y2.aggregated"]);
          projectionsData.threeWeeks = parseFloat(row["y3.aggregated"]);
          projectionsData.fourWeeks = parseFloat(row["y4.aggregated"]);
          dataRow.push(null);
        }
        chartData.push(dataRow);
      }
    });
  }

  // If the ebolaData object has keys and a specific country is selected, show the country-specific ebola data.
  const showCountryEbolaData =
    Object.keys(ebolaData).length && filters.country !== "All";

  // Here we are adding the ebola data for a specific country
  if (showCountryEbolaData) {
    Object.keys(ebolaData).forEach((key) => {
      // If the ebolaData key is equal to filters.country, this is the country data that we want.
      if (key === filters.country) {
        const countryData = ebolaData[key];
        // For each date key in the countryData object, push a data row to the chartData array.
        for (const date in countryData) {
          // this is a check to filter unwanted properties from the countryData object.
          if (Object.prototype.hasOwnProperty.call(countryData, date)) {
            const dateValue = new Date(date);
            // Only push the rows if the dateValue is within the filters.dateRange
            if (isDateWithinFiltersDateRange(dateValue, filters.dateRange)) {
              const dataRow = [dateValue, countryData[date].value];
              if (filters.projection) {
                // If projections are enabled, store the weekly projection data in the projectionsData object.
                // We also need to add a value of null to the end of the dataRow array.
                projectionsData = countryData[date].projections;
                dataRow.push(null);
              }
              chartData.push(dataRow);
            }
          }
        }
      }
    });
  }
  if (filters.projection) {
    // If projections are enabled, we are pushing 4 additional rows to the chartData array (one for each week) with the projections data.
    const lastWeekDate = chartData[chartData.length - 1][0];
    chartData.push(
      getWeekProjectionData(lastWeekDate, 1, projectionsData.oneWeek)
    );
    chartData.push(
      getWeekProjectionData(lastWeekDate, 2, projectionsData.twoWeeks)
    );
    chartData.push(
      getWeekProjectionData(lastWeekDate, 3, projectionsData.threeWeeks)
    );
    chartData.push(
      getWeekProjectionData(lastWeekDate, 4, projectionsData.fourWeeks)
    );
  }
  return chartData;
};

export const getAllCountriesChartData = (covidData, filters) => {
  const chartData = [];
  // Add column headers to chartData array.
  chartData.push(getChartColumns("COVID-19", false));
  // Get an array of keys where the dates are 7 days apart.
  // Since all country data objects have data for the same dates, we are using the dates from the first country.
  const weekDateKeys = getWeeklyDateObjectKeys(covidData[0].countryData);
  // Loop through all the 'weekDateKeys'.
  weekDateKeys.forEach((dateKey) => {
    // This is the caseCount for each dateKey.
    let caseCount = 0;
    // If the 'dateKey' is within the dates in the filters, execute this block.
    if (isDateWithinFiltersDateRange(dateKey, filters.dateRange)) {
      // Loop through each country data object in the covidData array.
      covidData.forEach((countryDataObject) => {
        // Get an array of all of the date keys in the countryDataObject.countryData.
        const countryCovidDataDateKeys = Object.keys(
          countryDataObject.countryData
        );
        // Get each country's case count for the week ending in 'dateKey'.
        const countryCaseCount = returnLastSevenDaysDataCount(
          countryDataObject.countryData,
          countryCovidDataDateKeys,
          dateKey
        );
        // If the countryCaseCount is an integer, add it to the caseCount counter.
        if (Number.isInteger(countryCaseCount)) {
          caseCount += countryCaseCount;
        }
      });
      const dataRow = [new Date(dateKey), caseCount];
      chartData.push(dataRow);
    }
  });
  return chartData;
};

// Returns the sum of the case/death counts for the week ending in dateKey.
export const returnLastSevenDaysDataCount = (
  covidDataObject,
  covidDataDateKeys,
  dateKey
) => {
  let caseCount = 0;
  // Get the index of the dateKey in the covidDataDateKeys array.
  const dateKeyIndex = covidDataDateKeys.indexOf(dateKey);
  // If the dateKey is not the first item in the covidDataDateKeys array (index is not 0), execute this block.
  if (dateKeyIndex) {
    // Get the index of the date that is 6 days before the dateKey.
    const startIndex = dateKeyIndex - 6 > 0 ? dateKeyIndex - 6 : 0;
    // Get an array of date keys for the week ending in dateKey.
    const lastSevenDayKeys = covidDataDateKeys.slice(
      startIndex,
      dateKeyIndex + 1
    );
    // For each of the keys in the lastSevenDayKeys array, add the counts to the caseCount.
    lastSevenDayKeys.forEach((dateKey) => {
      caseCount += covidDataObject[dateKey];
    });
  } else {
    // If the dateKey is the first item in the covidDataDateKeys array, this is the caseCount we want.
    caseCount = covidDataObject[dateKey];
  }
  return caseCount;
};

export const getSelectedCountryChartData = (covidData, filters) => {
  const chartData = [];
  // Add column headers to chartData array.
  chartData.push(getChartColumns("COVID-19", false));
  // Find a data object for the country in the filters
  const countryDataObject = findCountryDataObject(covidData, filters.country);
  // If a countryDataObject is found, execute this block.
  if (countryDataObject) {
    // Get an array of all of the date keys in the countryDataObject.countryData.
    const covidDataDateKeys = Object.keys(countryDataObject.countryData);
    // Get an array of keys from the countryDataObject.countryData object where the dates are 7 days apart.
    const weekDateKeys = getWeeklyDateObjectKeys(countryDataObject.countryData);
    // Loop through all the 'weekDateKeys'.
    weekDateKeys.forEach((dateKey) => {
      // If the 'dateKey' is within the dates in the filters, push the data row to the chartData array.
      if (isDateWithinFiltersDateRange(dateKey, filters.dateRange)) {
        const dataRow = [
          new Date(dateKey),
          returnLastSevenDaysDataCount(
            countryDataObject.countryData,
            covidDataDateKeys,
            dateKey
          ),
        ];
        chartData.push(dataRow);
      }
    });
  }
  return chartData;
};

export const getCovidDataForCharts = (covidData, filters) => {
  const getAllCountriesCovidData =
    filters.country === "All" && Object.keys(covidData).length;
  const getSpecificCountryCovidData =
    filters.country !== "All" && Object.keys(covidData).length;
  if (getAllCountriesCovidData) {
    return getAllCountriesChartData(covidData, filters);
  } else if (getSpecificCountryCovidData) {
    return getSelectedCountryChartData(covidData, filters);
  }
};
