import React from "react";
import { connect } from "react-redux";
import { Chart } from "react-google-charts";
import { ChartContainer } from "../styled-components/ChartContainer";
import { options } from "../../constants/GoogleChartOptions";
import {
  getEbolaDataForCharts,
  getCovidDataForCharts,
} from "../../utils/chartDataHelpers";

const ChartComponent = ({
  ebolaData,
  ebolaDataCombined,
  covidCaseCountsData,
  covidDeathCountsData,
  filters,
}) => {
  // Determines whether we are showing the covid case or death counts in the chart.
  const covidData =
    filters.dataType === "deaths" ? covidDeathCountsData : covidCaseCountsData;

  // // Get the chartData based on the outbreak selected in the filters
  const chartData =
    filters.outbreak === "Ebola Outbreak"
      ? getEbolaDataForCharts(ebolaData, ebolaDataCombined, filters)
      : getCovidDataForCharts(covidData, filters);

  return (
    <ChartContainer>
      <Chart
        width="100%"
        height="100%"
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={options}
        legendToggle
      />
    </ChartContainer>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
  ebolaData: state.ebola.ebolaData.data,
  ebolaDataCombined: state.ebola.ebolaDataCombined.data,
  covidCaseCountsData: state.covid.caseCounts.data,
  covidDeathCountsData: state.covid.deathCounts.data,
});

export default connect(mapStateToProps)(ChartComponent);
