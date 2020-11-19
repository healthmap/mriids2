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
import {
  getScale,
  getSnapshotColor,
  getSnapshotProjectionsColor,
} from "../../utils/snapshotMapHelpers";
import { getEbolaCountriesCaseCounts } from "../../utils/ebolaDataHelpers";

const SnapshotMap = ({ ebolaData, filters }) => {
  const [zoomLevel, setZoomLevel] = useState(5);
  const [showCaseCounts, changeShowCaseCounts] = useState(true);

  const changeZoomLevel = (newZoomValue = 0) => {
    setZoomLevel(newZoomValue);
  };

  const getGeographyFillColor = (geoProperties) => {
    const ebolaCountries = ["Guinea", "Liberia", "Sierra Leone"];
    // If the NAME of the geography is in the ebolaCountries array, execute this block.
    if (ebolaCountries.includes(geoProperties.NAME)) {
      // Get the case count for the 3 ebolaCountries.
      const ebolaCountriesCaseCounts = getEbolaCountriesCaseCounts(
        ebolaData,
        filters
      );
      const scale = getScale(ebolaCountriesCaseCounts);
      const percentage = ebolaCountriesCaseCounts[geoProperties.NAME] / scale;
      // If projections are enabled, return the color value using the getSnapshotProjectionsColor function.
      // Otherwise return the color value using the getSnapshotColor function.
      return filters.projection
        ? getSnapshotProjectionsColor(percentage)
        : getSnapshotColor(percentage);
    } else {
      // If the NAME of the geography is not in the ebolaCountries array, add the fill color below.
      return "#FCF1DD";
    }
  };

  const showHideCaseCounts = () => {
    changeShowCaseCounts(!showCaseCounts);
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
                      fill: getGeographyFillColor(geo.properties),
                      opacity: 1,
                      transition: "all .5s ease",
                    },
                    hover: {
                      fill: getGeographyFillColor(geo.properties),
                      opacity: 0.8,
                      transition: "all .5s ease",
                    },
                    pressed: {
                      fill: getGeographyFillColor(geo.properties),
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
        viewPortZoom={zoomLevel}
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
