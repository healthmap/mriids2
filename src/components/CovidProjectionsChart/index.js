import React from "react";
import { connect } from "react-redux";
import { Chart } from "react-google-charts";
import {
  getCovidDeathProjectionsDataForChart,
  getStartDateForCountryDeathProjections,
} from "../../utils/chartDataHelpers";
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
  // This determines whether the selected country has any projections data.
  const countryHasProjectionsData = chartData.length > 1;

  // This is the date that will be displayed in the chart title.
  const projectionsStartDate = getStartDateForCountryDeathProjections(
    projectedDeathsData,
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
          <ChartTitle>
            {countryHasProjectionsData
              ? `Projected Deaths for ${selectedCountry} for the week starting on ${projectionsStartDate}`
              : `We currently don't have death projections data for ${selectedCountry}`}
          </ChartTitle>
          {countryHasProjectionsData && (
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
          )}
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
