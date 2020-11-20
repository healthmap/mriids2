import React, { useState } from "react";
import { connect } from "react-redux";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

import { SnapshotMapContainer } from "../styled-components/MapContainers";
import ViewToggle from "../ViewToggle";
import SnapshotMapCaseCountLegend from "../SnapshotMapCaseCountLegend";
import MapZoomButtons from "../MapZoomButtons";
import { getGeographyFillColor } from "../../utils/snapshotMapHelpers";

const SnapshotMap = ({ ebolaData, filters }) => {
  const [zoomLevel, changeZoomLevel] = useState(9);
  const [showCaseCounts, toggleShowHideCaseCounts] = useState(true);

  const showHideCaseCounts = () => {
    toggleShowHideCaseCounts(!showCaseCounts);
  };

  return (
    <SnapshotMapContainer>
      <ViewToggle />
      <ComposableMap
        style={{ backgroundColor: "#D6E4EE" }}
        stroke="#000000"
        strokeWidth={0.05}
      >
        <ZoomableGroup zoom={zoomLevel} center={[-10, 4]} maxZoom={9}>
          <Geographies geography="mapData/world-50m-simplified.json">
            {({ geographies }) =>
              geographies.map((geo) => {
                //  Gets the fillColor for each country (geo).
                const fillColor = getGeographyFillColor(
                  ebolaData,
                  filters,
                  geo.properties
                );
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: fillColor,
                        opacity: 1,
                        transition: "all .5s ease",
                      },
                      hover: {
                        fill: fillColor,
                        opacity: 0.8,
                        transition: "all .5s ease",
                      },
                      pressed: {
                        fill: fillColor,
                        opacity: 0.8,
                        transition: "all .5s ease",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <SnapshotMapCaseCountLegend
        showCaseCounts={showCaseCounts}
        toggleCaseCountFunction={showHideCaseCounts}
      />
      <MapZoomButtons
        zoomLevel={zoomLevel}
        changeZoomFunction={changeZoomLevel}
      />
    </SnapshotMapContainer>
  );
};

const mapStateToProps = (state) => ({
  ebolaData: state.ebola.ebolaData.data,
  filters: state.filters,
});

export default connect(mapStateToProps)(SnapshotMap);
