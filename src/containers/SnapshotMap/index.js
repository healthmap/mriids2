import React, { useState } from "react";
import { connect } from "react-redux";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";
import { geoChamberlinAfrica } from "d3-geo-projection";

import { SnapshotMapContainer } from "../../components/styled-components/MapContainers";
import ViewToggle from "../../components/ViewToggle";
import SnapshotMapCaseCountLegend from "../../components/SnapshotMapCaseCountLegend";
import MapZoomButtons from "../../components/MapZoomButtons";

const SnapshotMap = (props) => {
  const [zoomLevel, setZoomLevel] = useState(5);
  const [showCaseCounts, changeShowCaseCounts] = useState(true);

  const changeZoomLevel = (newZoomValue = 0) => {
    setZoomLevel(newZoomValue);
  };

  const getGeographyFillColor = (geoProperties) => {
    const ebolaCountries = ["Guinea", "Liberia", "Sierra Leone"];
    if (ebolaCountries.includes(geoProperties.NAME)) {
      return "#E23D4A";
    }
  };

  const showHideCaseCounts = () => {
    changeShowCaseCounts(!showCaseCounts);
  };

  return (
    <SnapshotMapContainer>
      <ViewToggle />
      <ComposableMap projection={geoChamberlinAfrica()}>
        <ZoomableGroup zoom={zoomLevel}>
          <Geographies geography="mapData/world-50m-simplified.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: getGeographyFillColor(geo.properties),
                      opacity: 1,
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
        viewPortZoom={zoomLevel}
        changeZoomFunction={changeZoomLevel}
      />
    </SnapshotMapContainer>
  );
};

const mapStateToProps = (state) => ({
  ebolaData: state.ebola.ebolaData,
  filters: state.filters,
});

export default connect(mapStateToProps)(SnapshotMap);
