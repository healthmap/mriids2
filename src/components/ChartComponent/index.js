import React from "react";
import { connect } from "react-redux";
import { Chart } from "react-google-charts";

import { ChartContainer } from "../styled-components/ChartContainer";
import { options } from "../../constants/GoogleChartOptions";
import { prepareDataForCharts } from "../../utils/chartDataHelpers";

const ChartComponent = (props) => {
  const chartData = prepareDataForCharts(
    props.ebola.ebolaData.data,
    props.ebola.ebolaDataCombined,
    props.filters
  );

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
  ebola: state.ebola,
});

export default connect(mapStateToProps)(ChartComponent);
