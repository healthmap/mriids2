import dayjs from "dayjs";
import { isDateWithinFiltersDateRange } from "./dateHelpers";
import { findCountryDataObject } from "./covidDataHelpers";

export const getChartColumns = (
  outbreakName,
  projection = false,
  chartType = "cases"
) => {
  const dataColumnLabel = `${outbreakName} ${
    chartType === "deaths" ? "Deaths" : "Cases"
  }`;
  const columns = [
    {
      type: "date",
      label: "Date",
    },
    {
      type: "number",
      label: dataColumnLabel,
    },
  ];
  // If projection is True, add projections column to columns array.
  if (projection) {
    columns.push({
      type: "number",
      label: `Projected future ${chartType}`,
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
  chartData.push(
    getChartColumns("Ebola", filters.projection, filters.chartType)
  );
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
    // Find the data for the selected country.
    const countryData = ebolaData[filters.country];
    // Get an array of date keys from the countryData object.
    const dateKeys = Object.keys(countryData);
    // For each dateKey in the dateKeys array, push a data row to the chartData array.
    dateKeys.forEach((dateKey) => {
      const dateValue = new Date(dateKey);
      // Only push the rows if the dateValue is within the filters.dateRange
      if (isDateWithinFiltersDateRange(dateValue, filters.dateRange)) {
        const dataRow = [dateValue, countryData[dateKey].value];
        if (filters.projection) {
          // If projections are enabled, store the weekly projection data in the projectionsData object.
          // We also need to add a value of null to the end of the dataRow array.
          projectionsData = countryData[dateKey].projections;
          dataRow.push(null);
        }
        chartData.push(dataRow);
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
  chartData.push(getChartColumns("COVID-19", false, filters.chartType));
  // Get an array of date keys from the countryData object of the first country data object.
  // Since all country data objects have data for the same dates, we are using the dates from the first country.
  const covidDataDateKeys = Object.keys(covidData[0].countryData);
  // Loop through all the 'covidDataDateKeys'.
  covidDataDateKeys.forEach((dateKey) => {
    // This is the caseCount for each dateKey.
    let caseCount = 0;
    // If the 'dateKey' is within the dates in the filters, execute this block.
    if (isDateWithinFiltersDateRange(dateKey, filters.dateRange)) {
      // Loop through each country data object in the covidData array.
      covidData.forEach((countryDataObject) => {
        // Get each country's daily case count for the day in the 'dateKey'.
        const countryDailyCaseCount = countryDataObject.countryData[dateKey];
        // If the countryDailyCaseCount is an integer, add it to the caseCount counter.
        if (Number.isInteger(countryDailyCaseCount)) {
          caseCount += countryDailyCaseCount;
        }
      });
      const dataRow = [new Date(dateKey), caseCount];
      chartData.push(dataRow);
    }
  });
  return chartData;
};

export const getSelectedCountryChartData = (covidData, filters) => {
  const chartData = [];
  // Add column headers to chartData array.
  chartData.push(getChartColumns("COVID-19", false, filters.chartType));
  // Find a data object for the country in the filters
  const countryDataObject = findCountryDataObject(covidData, filters.country);
  // If a countryDataObject is found, execute this block.
  if (countryDataObject) {
    // Get an array of all of the date keys in the countryDataObject.countryData.
    const covidDataDateKeys = Object.keys(countryDataObject.countryData);
    // Loop through all the 'covidDataDateKeys'.
    covidDataDateKeys.forEach((dateKey) => {
      // If the 'dateKey' is within the dates in the filters, push the data row to the chartData array.
      if (isDateWithinFiltersDateRange(dateKey, filters.dateRange)) {
        // If the country has a case/death count for that day, get that value. Otherwise that value is 0.
        const countryDailyCaseCount = countryDataObject.countryData[dateKey]
          ? countryDataObject.countryData[dateKey]
          : 0;
        const dataRow = [new Date(dateKey), countryDailyCaseCount];
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
