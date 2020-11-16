import React from "react";
import { connect } from "react-redux";
import MapLegendLevel from "../MapLegendLevel";
import {
  getMaxValueForSnapshotLegend,
  getSnapshotColor,
  getSnapshotProjectionsColor,
} from "../../utils/snapshotMapHelpers";
import { getEbolaCountriesCaseCounts } from "../../utils/ebolaDataHelpers";
import CaseCountToggle from "../CaseCountToggle";
import {
  MapLegendWrapperSnapshot,
  MapLegendItemsWrapper,
} from "../styled-components/MapLegendWrappers";
import { BlockDropshadow } from "../styled-components/Block";

const SnapshotMapCaseCountLegend = (props) => {
  // Getting the number of case counts for each country.
  // We need this to get the max value for the legend.
  const countriesEbolaCaseCounts = getEbolaCountriesCaseCounts(
    props.ebolaData,
    props.filters
  );

  const legendHeader = props.filters.projection
    ? "Total outbreak projections"
    : "Case counts";

  const renderLegendLevels = () => {
    // This is the maximum value for the case count legend.
    const maxCountryCaseCount = getMaxValueForSnapshotLegend(
      countriesEbolaCaseCounts
    );
    // We want to render 10 levels for the legend.
    const numberOfLevels = 9;
    const levels = [];
    for (let i = 0; i <= numberOfLevels; i++) {
      let value = i / numberOfLevels;
      // If the projections are turned on, we want to use the projections colors.
      // Else, use the regular snapshot colors.
      const color = props.filters.projection
        ? getSnapshotProjectionsColor(value)
        : getSnapshotColor(value);
      levels.push(
        <MapLegendLevel
          key={`legend-level-${i}`}
          color={color}
          value={Math.round(value * maxCountryCaseCount)}
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
        <CaseCountToggle
          showCaseCount={props.showCaseCounts}
          toggleCaseCountFunction={props.toggleCaseCountFunction}
        />
      </BlockDropshadow>
    </MapLegendWrapperSnapshot>
  );
};

const mapStateToProps = (state) => ({
  ebolaData: state.ebola.ebolaData.data,
  filters: state.filters,
});

export default connect(mapStateToProps)(SnapshotMapCaseCountLegend);
