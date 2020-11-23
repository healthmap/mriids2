import React, { useState, memo } from "react";
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
import ReactTooltip from "react-tooltip";
import {
  getGeographyFillColor,
  getCountryToolTipContent,
} from "../../utils/snapshotMapHelpers";

const SnapshotMap = ({ ebolaData, filters }) => {
  const [zoomLevel, setZoomLevel] = useState(9);
  const [showCaseCounts, toggleShowHideCaseCounts] = useState(true);
  const [toolTipContent, setToolTipContent] = useState("");

  const changeZoomLevel = (newZoomLevel) => {
    //  This prevents zooming in to a level higher than 9 and lower than 1.
    const validNewZoomLevel = newZoomLevel <= 9 && newZoomLevel >= 1;
    return validNewZoomLevel ? setZoomLevel(newZoomLevel) : null;
  };

  const showHideCaseCounts = () => {
    toggleShowHideCaseCounts(!showCaseCounts);
  };

  return (
    <SnapshotMapContainer>
      <ViewToggle />
      <ReactTooltip>{toolTipContent}</ReactTooltip>
      <ComposableMap
        projection="geoMercator"
        style={{ backgroundColor: "#D6E4EE" }}
        stroke="#000000"
        strokeWidth={0.02}
        data-tip=""
      >
        <ZoomableGroup zoom={zoomLevel} center={[-10, 2]} maxZoom={9}>
          <Geographies geography="mapData/world_50m.json">
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
                    onMouseEnter={() => {
                      setToolTipContent(
                        getCountryToolTipContent(
                          ebolaData,
                          filters,
                          geo.properties.NAME,
                          showCaseCounts
                        )
                      );
                    }}
                    onMouseLeave={() => setToolTipContent("")}
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
        maxZoom={9}
        minZoom={1}
      />
    </SnapshotMapContainer>
  );
};

const mapStateToProps = (state) => ({
  ebolaData: state.ebola.ebolaData.data,
  filters: state.filters,
});

// Wrapped SnapshotMap component in memo() as recommended here: https://www.react-simple-maps.io/examples/map-chart-with-tooltip/
export default connect(mapStateToProps)(memo(SnapshotMap));
