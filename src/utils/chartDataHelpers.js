export const prepareEbolaDataForCharts = (
  ebolaData,
  ebolaDataCombined,
  filters
) => {
  const chartData = [];
  const columns = [
    {
      type: "date",
      label: "Date",
    },
    {
      type: "number",
      label: "Ebola Cases",
    },
  ];

  // If filters.projection is True, add "Projected future cases" column to columns array.
  if (filters.projection) {
    columns.push({
      type: "number",
      label: "Projected future cases",
    });
  }
  // 1. Add column headers to chartData array.
  chartData.push(columns);
  // 2. Add ebola data to chartData array.
  const showEbolaDataCombined =
    ebolaDataCombined && ebolaDataCombined.length && filters.country === "All";

  // Here we are adding the ebola data for all countries
  if (showEbolaDataCombined) {
    ebolaDataCombined.forEach((row) => {
      const dateValue = new Date(row.projection_from);
      // Only push the rows if the dateValue is within the filters.dateRange
      const isDateValueInRange =
        dateValue > filters.dateRange.from && dateValue < filters.dateRange.to;
      if (isDateValueInRange) {
        const aggregatedData = row.aggregated;
        chartData.push([dateValue, aggregatedData]);
      }
    });
  }

  return chartData;
};
