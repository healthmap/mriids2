import React from "react";
import { connect } from "react-redux";
import MapLegendLevel from "../MapLegendLevel";
import {
  getEbolaScale,
  getCovidScale,
  getSnapshotColor,
  getSnapshotDeathsColor,
  getSnapshotProjectionsColor,
  getLegendTitle,
} from "../../utils/snapshotMapHelpers";
import { BlockDropshadow } from "../SharedStyledComponents/Block";
import {
  MapLegendWrapperSnapshot,
  MapLegendItemsWrapper,
  MapLegendTitle,
} from "./styles";

const SnapshotMapLegend = ({ countryDiseaseCounts, filters }) => {
  // Determines whether the ebola outbreak is selected.
  const ebolaOutbreakSelected = filters.outbreak === "Ebola Outbreak";

  const renderLegendLevels = () => {
    const scale = ebolaOutbreakSelected
      ? getEbolaScale(countryDiseaseCounts)
      : getCovidScale(countryDiseaseCounts);
    // We want to render 10 levels for the legend.
    const numberOfLevels = 9;
    const levels = [];
    for (let i = 0; i <= numberOfLevels; i++) {
      let value = i / 10;
      // If the projections are enabled, we want to use the projections colors.
      // Else, use the regular snapshot colors.
      let color;
      if (filters.dataType.includes("projected")) {
        color = getSnapshotProjectionsColor(value);
      } else if (filters.dataType === "cases") {
        color = getSnapshotColor(value);
      } else if (filters.dataType === "deaths") {
        color = getSnapshotDeathsColor(value);
      }

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
        <MapLegendTitle>
          {getLegendTitle(filters.outbreak, filters.dataType)}
        </MapLegendTitle>
        <MapLegendItemsWrapper>{renderLegendLevels()}</MapLegendItemsWrapper>
      </BlockDropshadow>
    </MapLegendWrapperSnapshot>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(SnapshotMapLegend);
