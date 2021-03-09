import React from "react";
import { connect } from "react-redux";
import { Chart } from "react-google-charts";
import { getCovidDeathProjectionsDataForChart } from "../../utils/chartDataHelpers";
import { covidDeathProjectionOptions } from "../../constants/GoogleChartOptions";
import {
  CovidProjectionsContainer,
  ChartTitle,
  ChartContainer,
} from "./styles";

const CovidProjectionsChart = ({
  hasConfirmedProjectionsPopup,
  selectedCountry,
  projectedDeathsData,
  deathsData,
}) => {
  const chartData = getCovidDeathProjectionsDataForChart(
    projectedDeathsData,
    deathsData,
    selectedCountry
  );
  return (
    <CovidProjectionsContainer
      isProjectionsBannerDisplayed={hasConfirmedProjectionsPopup}
    >
      {selectedCountry === "All" ? (
        <ChartTitle>Select a country to view projections</ChartTitle>
      ) : (
        <>
          <ChartTitle>{`Projected Deaths for ${selectedCountry}`}</ChartTitle>
          <ChartContainer>
            <Chart
              width="100%"
              height="100%"
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={chartData}
              options={covidDeathProjectionOptions}
              legendToggle
            />
          </ChartContainer>
        </>
      )}
    </CovidProjectionsContainer>
  );
};

const mapStateToProps = (state) => ({
  hasConfirmedProjectionsPopup: state.ui.hasConfirmedProjectionsPopup,
  selectedCountry: state.filters.country,
  projectedDeathsData: state.covid.projections.data,
  deathsData: state.covid.deathCounts.data,
});

export default connect(mapStateToProps)(CovidProjectionsChart);
