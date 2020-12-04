import React from "react";
import { connect } from "react-redux";
import { Chart } from "react-google-charts";

import { ChartContainer } from "../styled-components/ChartContainer";
import { options } from "../../constants/GoogleChartOptions";
import {
  prepareEbolaDataForCharts,
  prepareCovidDataForCharts,
} from "../../utils/chartDataHelpers";

const ChartComponent = ({
  ebolaData,
  ebolaDataCombined,
  covidDataCombined,
  filters,
}) => {
  let chartData;
  if (filters.outbreak === "Ebola Outbreak") {
    chartData = prepareEbolaDataForCharts(
      ebolaData,
      ebolaDataCombined,
      filters
    );
  } else {
    chartData = prepareCovidDataForCharts(covidDataCombined, filters);
  }

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
  covidDataCombined: state.covid.covidDataCombined.data,
});

export default connect(mapStateToProps)(ChartComponent);
