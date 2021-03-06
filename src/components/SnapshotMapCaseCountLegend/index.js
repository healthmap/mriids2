import React from "react";
import { connect } from "react-redux";
import MapLegendLevel from "../MapLegendLevel";
import {
  getScale,
  getSnapshotColor,
  getSnapshotProjectionsColor,
} from "../../utils/snapshotMapHelpers";
import { getEbolaCountriesCaseCounts } from "../../utils/ebolaDataHelpers";
import {
  MapLegendWrapperSnapshot,
  MapLegendItemsWrapper,
} from "../styled-components/MapLegendWrappers";
import { BlockDropshadow } from "../styled-components/Block";

const SnapshotMapCaseCountLegend = ({ ebolaData, filters }) => {
  // Getting the number of case counts for each country.
  // We need this to get the max value for the legend.
  const countriesEbolaCaseCounts = getEbolaCountriesCaseCounts(
    ebolaData,
    filters
  );

  const legendHeader = filters.projection
    ? "Total outbreak projections"
    : "Case counts";

  const renderLegendLevels = () => {
    const scale = getScale(countriesEbolaCaseCounts);
    // We want to render 10 levels for the legend.
    const numberOfLevels = 9;
    const levels = [];
    for (let i = 0; i <= numberOfLevels; i++) {
      let value = i / numberOfLevels;
      // If the projections are turned on, we want to use the projections colors.
      // Else, use the regular snapshot colors.
      const color = filters.projection
        ? getSnapshotProjectionsColor(value)
        : getSnapshotColor(value);
      levels.push(
        <MapLegendLevel
          key={`legend-level-${i}`}
          color={color}
          value={Math.round(value * scale)}
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
  filters: state.filters,
});

export default connect(mapStateToProps)(SnapshotMapCaseCountLegend);
