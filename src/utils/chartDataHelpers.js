export const prepareDataForCharts = (ebolaData, ebolaDataCombined, filters) => {
  const chartData = [];

  // 1. Add column headers to chartData array.
  if (filters.projection) {
    chartData.push([
      {
        type: "date",
        label: "Date",
      },
      {
        type: "number",
        label: "Ebola Cases",
      },
      {
        type: "number",
        label: "Projected future cases",
      },
    ]);
  } else {
    chartData.push([
      {
        type: "date",
        label: "Date",
      },
      {
        type: "number",
        label: "Ebola Cases",
      },
    ]);
  }
  return chartData;
};
