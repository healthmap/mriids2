import React from "react";
import { connect } from "react-redux";
import MapLegendLevel from "../MapLegendLevel";
import {
  getEbolaScale,
  getCovidScale,
  getSnapshotColor,
  getSnapshotProjectionsColor,
} from "../../utils/snapshotMapHelpers";
import {
  MapLegendWrapperSnapshot,
  MapLegendItemsWrapper,
} from "../styled-components/MapLegendWrappers";
import { BlockDropshadow } from "../styled-components/Block";

const SnapshotMapLegend = ({ countryDiseaseCounts, filters }) => {
  // Determines whether the ebola outbreak is selected.
  const ebolaOutbreakSelected = filters.outbreak === "Ebola Outbreak";
  // If the covid outbreak is selected and the data type is "deaths", display "Death" in legend header.
  // Otherwise, show "Case" in legend header.
  const dataType =
    !ebolaOutbreakSelected && filters.dataType === "deaths" ? "Death" : "Case";
  const legendHeader = filters.projection
    ? "Total outbreak projections"
    : `${dataType} counts`;

  const renderLegendLevels = () => {
    const scale = ebolaOutbreakSelected
      ? getEbolaScale(countryDiseaseCounts)
      : getCovidScale(countryDiseaseCounts);
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
    <MapLegendWrapperSnapshot data-test-id="snapshot-map-legend">
      <BlockDropshadow>
        <h3>{legendHeader}</h3>
        <MapLegendItemsWrapper>{renderLegendLevels()}</MapLegendItemsWrapper>
      </BlockDropshadow>
    </MapLegendWrapperSnapshot>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(SnapshotMapLegend);
