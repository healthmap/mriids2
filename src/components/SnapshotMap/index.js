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
  const [zoomLevel, changeZoomLevel] = useState(5);
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
        <ZoomableGroup zoom={zoomLevel}>
          <Geographies geography="mapData/world-50m-simplified.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: getGeographyFillColor(
                        ebolaData,
                        filters,
                        geo.properties
                      ),
                      opacity: 1,
                      transition: "all .5s ease",
                    },
                    hover: {
                      fill: getGeographyFillColor(
                        ebolaData,
                        filters,
                        geo.properties
                      ),
                      opacity: 0.8,
                      transition: "all .5s ease",
                    },
                    pressed: {
                      fill: getGeographyFillColor(
                        ebolaData,
                        filters,
                        geo.properties
                      ),
                      opacity: 0.8,
                      transition: "all .5s ease",
                    },
                  }}
                />
              ))
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
