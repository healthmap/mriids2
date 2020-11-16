import React from "react";
import { connect } from "react-redux";
import MapLegendLevel from "../MapLegendLevel";
import {
  getMaxValueForSnapshotLegend,
  getSnapshotColor,
} from "../../utils/snapshotMapHelpers";
import { getEbolaCountriesCaseCounts } from "../../utils/ebolaDataHelpers";

import {
  MapLegendWrapperSnapshot,
  MapLegendItemsWrapper,
} from "../styled-components/MapLegendWrappers";
import { BlockDropshadow } from "../styled-components/Block";

const SnapshotMapCaseCountLegend = (props) => {
  // Getting the number of case counts for each country.
  const countriesEbolaCaseCounts = getEbolaCountriesCaseCounts(
    props.ebolaData,
    props.filters
  );

  const legendHeader = props.filters.projection
    ? "Total outbreak projections"
    : "Case counts";

  const renderLegendLevels = () => {
    const maxCountryCaseCount = getMaxValueForSnapshotLegend(
      countriesEbolaCaseCounts
    );
    const numberOfLevels = 9;
    const levels = [];
    for (let i = 0; i <= numberOfLevels; i++) {
      let value = i / numberOfLevels;
      levels.push(
        <MapLegendLevel
          key={`legend-level-${i}`}
          color={getSnapshotColor(value)}
          value={Math.round(value * maxCountryCaseCount)}
        />
      );
    }
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
