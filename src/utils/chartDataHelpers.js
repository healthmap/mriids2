import dayjs from "dayjs";
import { isDateWithinFiltersDateRange } from "./ebolaDataHelpers";

const getChartColumns = (outbreakName, projection = false) => {
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

const getWeekProjectionData = (
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
          projectionsData.oneWeek = parseFloat(row["y1.aggregated"]);
          projectionsData.twoWeeks = parseFloat(row["y2.aggregated"]);
          projectionsData.threeWeeks = parseFloat(row["y3.aggregated"]);
          projectionsData.fourWeeks = parseFloat(row["y4.aggregated"]);
          dataRow.push(null);
        }
        chartData.push(dataRow);
      }
    });
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
              chartData.push([dateValue, countryData[date].value]);
            }
          }
        }
      }
    });
  }
  return chartData;
};

export const prepareCovidDataForCharts = () => {
  const chartData = [];
  // 1. Add column headers to chartData array.
  chartData.push(getChartColumns("COVID-19", false));
  return chartData;
};
