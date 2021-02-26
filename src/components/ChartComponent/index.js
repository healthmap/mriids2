import React from "react";
import { connect } from "react-redux";
import { Chart } from "react-google-charts";
import {
  ChartContainer,
  ChartTitle,
} from "../styled-components/ChartContainer";
import {
  caseCountOptions,
  deathCountOptions,
} from "../../constants/GoogleChartOptions";
import {
  getChartTitle,
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

  // Get the chartData based on the outbreak selected in the filters
  const chartData =
    filters.outbreak === "Ebola Outbreak"
      ? getEbolaDataForCharts(ebolaData, ebolaDataCombined, filters)
      : getCovidDataForCharts(covidData, filters);

  const chartOptions =
    filters.dataType === "deaths" ? deathCountOptions : caseCountOptions;

  const titleText = getChartTitle(
    filters.outbreak,
    filters.dataType,
    filters.country
  );

  const projectionsEnabled = filters.dataType.includes("projected");

  return (
    <ChartContainer projectionsBanner={projectionsEnabled}>
      <ChartTitle>{titleText}</ChartTitle>
      <Chart
        width="100%"
        height="100%"
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={chartOptions}
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
