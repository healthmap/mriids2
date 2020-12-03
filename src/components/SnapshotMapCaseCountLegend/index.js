import React from "react";
import { connect } from "react-redux";
import MapLegendLevel from "../MapLegendLevel";
import {
  getEbolaScale,
  getCovidScale,
  getSnapshotColor,
  getSnapshotProjectionsColor,
} from "../../utils/snapshotMapHelpers";
import { getCountriesEbolaCaseCounts } from "../../utils/ebolaDataHelpers";
import { getCountriesCovidCaseCounts } from "../../utils/covidDataHelpers";
import {
  MapLegendWrapperSnapshot,
  MapLegendItemsWrapper,
} from "../styled-components/MapLegendWrappers";
import { BlockDropshadow } from "../styled-components/Block";

const SnapshotMapCaseCountLegend = ({ ebolaData, covidData, filters }) => {
  // Determines whether the ebola outbreak is selected.
  const ebolaOutbreakSelected = filters.outbreak === "Ebola Outbreak";

  // Getting the number of case counts for each country.
  // We need this to get the max value for the legend.
  const countriesCaseCounts = ebolaOutbreakSelected
    ? getCountriesEbolaCaseCounts(ebolaData, filters)
    : getCountriesCovidCaseCounts(covidData, filters);

  const legendHeader = filters.projection
    ? "Total outbreak projections"
    : "Case counts";

  const renderLegendLevels = () => {
    const scale = ebolaOutbreakSelected
      ? getEbolaScale(countriesCaseCounts)
      : getCovidScale(countriesCaseCounts);
    // We want to render 10 levels for the legend.
    const numberOfLevels = 9;
    const levels = [];
    for (let i = 0; i <= numberOfLevels; i++) {
      let value = i / numberOfLevels;
      // If the projections are enabled, we want to use the projections colors.
      // Else, use the regular snapshot colors.
      const color = filters.projection
        ? getSnapshotProjectionsColor(value)
        : getSnapshotColor(value);
      levels.push(
        <MapLegendLevel
          key={`legend-level-${i}`}
          color={color}
          value={Math.round(value * scale).toLocaleString()}
        />
      );
    }
    // We reverse the order of the elements in the 'levels' array because we want to highest level at the top.
    return levels.reverse();
  };

  return (
    <MapLegendWrapperSnapshot>
      <BlockDropshadow>
        <h3>{legendHeader}</h3>
        <MapLegendItemsWrapper>{renderLegendLevels()}</MapLegendItemsWrapper>
      </BlockDropshadow>
    </MapLegendWrapperSnapshot>
  );
};

const mapStateToProps = (state) => ({
  ebolaData: state.ebola.ebolaData.data,
  covidData: state.covid.covidData.data,
  filters: state.filters,
});

export default connect(mapStateToProps)(SnapshotMapCaseCountLegend);
