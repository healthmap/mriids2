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
          const dateValue = new Date(date);
          // Only push the rows if the dateValue is within the filters.dateRange
          const isDateValueInRange =
            dateValue > filters.dateRange.from &&
            dateValue < filters.dateRange.to;
          if (isDateValueInRange) {
            chartData.push([dateValue, countryData[date].value]);
          }
        }
      }
    });
  }

  return chartData;
};

export const prepareCovidDataForCharts = () => {
  const chartData = [];
  const columns = [
    {
      type: "date",
      label: "Date",
    },
    {
      type: "number",
      label: "COVID-19 Cases",
    },
  ];
  // 1. Add column headers to chartData array.
  chartData.push(columns);
  return chartData;
};
