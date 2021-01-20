import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeChartType } from "../../actions/filters";
import { ChartTypeButtonsWrapper } from "../styled-components/ChartTypeButtonsWrapper";
import { Button } from "../styled-components/Button";

const ChartTypeButtons = ({ chartType, changeChartType }) => (
  <ChartTypeButtonsWrapper>
    <label>Chart Type</label>
    <Button
      className={chartType === "cases" && "is-active"}
      onClick={() => changeChartType("cases")}
    >
      Cases
    </Button>
    <Button
      className={chartType === "deaths" && "is-active"}
      onClick={() => changeChartType("deaths")}
    >
      Deaths
    </Button>
    <Button
      className={chartType === "cases and deaths" && "is-active"}
      onClick={() => changeChartType("cases and deaths")}
    >
      Cases and Deaths
    </Button>
  </ChartTypeButtonsWrapper>
);

const mapStateToProps = (state) => ({
  chartType: state.filters.chartType,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeChartType }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChartTypeButtons);
