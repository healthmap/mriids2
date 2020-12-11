import React from "react";
import { connect } from "react-redux";
import { Chart } from "react-google-charts";

import { ChartContainer } from "../styled-components/ChartContainer";
import { options } from "../../constants/GoogleChartOptions";
import {
  prepareEbolaDataForCharts,
  getCovidDataForCharts,
} from "../../utils/chartDataHelpers";

const ChartComponent = ({
  ebolaData,
  ebolaDataCombined,
  covidData,
  covidDataCombined,
  filters,
}) => {
  // // Get the chartData based on the outbreak selected in the filters
  const chartData =
    filters.outbreak === "Ebola Outbreak"
      ? prepareEbolaDataForCharts(ebolaData, ebolaDataCombined, filters)
      : getCovidDataForCharts(covidData, covidDataCombined, filters);

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
  covidData: state.covid.covidData.data,
  covidDataCombined: state.covid.covidDataCombined.data,
});

export default connect(mapStateToProps)(ChartComponent);
