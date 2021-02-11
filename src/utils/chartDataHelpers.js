import dayjs from "dayjs";
import { isDateWithinFiltersDateRange } from "./dateHelpers";
import { findCountryDataObject } from "./covidDataHelpers";
import { capitalizeString } from "./commonHelpers";

export const getDataColumnLabel = (outbreakName, dataType) => {
  // If the dataType is either "cases" or "deaths", return the outbreak name with either "Cases" or "Deaths".
  if (dataType === "cases" || dataType === "deaths") {
    return `${outbreakName} ${capitalizeString(dataType)}`;
  } else {
    // Otherwise return the outbreak name with the second word in the dataTypeWordArray (either "Cases" or "Deaths").
    const dataTypeWordArray = dataType.split(" ");
    return `${outbreakName} ${capitalizeString(dataTypeWordArray[1])}`;
  }
};

export const getProjectionsColumnLabel = (dataType) => {
  const dataTypeWordArray = dataType.split(" ");
  return `Projected ${capitalizeString(dataTypeWordArray[1])}`;
};

export const getChartColumns = (outbreakName, dataType = "cases") => {
  const dataColumnLabel = getDataColumnLabel(outbreakName, dataType);
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
  // If the dataType includes the word 'projected', add projections column to columns array.
  if (dataType.includes("projected")) {
    const projectionsColumnLabel = getProjectionsColumnLabel(dataType);
    columns.push({
      type: "number",
      label: `${projectionsColumnLabel}`,
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

// Adds additional rows to the chartDataArray with the projections data for each week.
export const addProjectionsData = (projectionsDataObject, chartDataArray) => {
  // Get the date of the last row in the chartDataArray.
  const lastWeekDate = chartDataArray[chartDataArray.length - 1][0];
  // Get the keys in the projectionsDataObject.
  const projectionsDataKeys = Object.keys(projectionsDataObject);
  // For each key in the projectionsDataKeys, push the weekly projections data to the chartDataArray.
  projectionsDataKeys.forEach((key, index) => {
    const numberOfWeeks = index + 1;
    chartDataArray.push(
      getWeekProjectionData(
        lastWeekDate,
        numberOfWeeks,
        projectionsDataObject[key]
      )
    );
  });
};

export const getAllCountriesEbolaChartData = (ebolaDataCombined, filters) => {
  const chartData = [];
  let projectionsData = {
    oneWeek: null,
    twoWeeks: null,
    threeWeeks: null,
    fourWeeks: null,
  };
  // Add column headers to the chartData array.
  chartData.push(getChartColumns("Ebola", filters.dataType));
  // Add the data rows to the chartData array.
  ebolaDataCombined.forEach((row) => {
    const dateValue = new Date(row.projection_from);
    // Only push the rows if the dateValue is within the filters.dateRange
    if (isDateWithinFiltersDateRange(dateValue, filters.dateRange)) {
      const dataRow = [dateValue, row.aggregated];
      if (filters.dataType === "projected cases") {
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
  // If projections are enabled, add projections data to chartData array.
  if (filters.dataType === "projected cases") {
    addProjectionsData(projectionsData, chartData);
  }
  return chartData;
};

export const getSelectedCountryEbolaChartData = (ebolaData, filters) => {
  const chartData = [];
  let projectionsData = {
    oneWeek: null,
    twoWeeks: null,
    threeWeeks: null,
    fourWeeks: null,
  };
  // Add column headers to chartData array.
  chartData.push(getChartColumns("Ebola", filters.dataType));
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
      if (filters.dataType === "projected cases") {
        // If projections are enabled, store the weekly projection data in the projectionsData object.
        // We also need to add a value of null to the end of the dataRow array.
        projectionsData = countryData[dateKey].projections;
        dataRow.push(null);
      }
      chartData.push(dataRow);
    }
  });
  // If projections are enabled, add projections data to chartData array.
  if (filters.dataType === "projected cases") {
    addProjectionsData(projectionsData, chartData);
  }
  return chartData;
};

export const getEbolaDataForCharts = (
  ebolaData,
  ebolaDataCombined,
  filters
) => {
  const showEbolaDataCombined =
    ebolaDataCombined && ebolaDataCombined.length && filters.country === "All";
  const showCountryEbolaData =
    Object.keys(ebolaData).length && filters.country !== "All";
  // Here we are returning the ebola chart data for all countries.
  if (showEbolaDataCombined) {
    return getAllCountriesEbolaChartData(ebolaDataCombined, filters);
  }
  // Here we are returning the ebola chart data for a specific country.
  if (showCountryEbolaData) {
    return getSelectedCountryEbolaChartData(ebolaData, filters);
  }
};

export const getAllCountriesCovidChartData = (covidData, filters) => {
  const chartData = [];
  // Add column headers to chartData array.
  chartData.push(getChartColumns("COVID-19", filters.dataType));
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

export const getSelectedCountryCovidChartData = (covidData, filters) => {
  const chartData = [];
  // Add column headers to chartData array.
  chartData.push(getChartColumns("COVID-19", filters.dataType));
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
    return getAllCountriesCovidChartData(covidData, filters);
  } else if (getSpecificCountryCovidData) {
    return getSelectedCountryCovidChartData(covidData, filters);
  }
};
