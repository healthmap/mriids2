import React, { useState, memo, useEffect } from "react";
import { connect } from "react-redux";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { SnapshotMapContainer } from "../styled-components/MapContainers";
import SnapshotMapLegend from "../SnapshotMapLegend";
import MapZoomButtons from "../MapZoomButtons";
import { StyledTooltip } from "../styled-components/MapTooltip";
import SnapshotMapCountryPopup from "../SnapshotMapCountryPopup";
import {
  getEbolaFillColorsDictionary,
  getCovidFillColorsDictionary,
  getCountryFillColor,
} from "../../utils/snapshotMapHelpers";
import { getCountryDiseaseCountDictionary } from "../../utils/snapshotMapHelpers";

const SnapshotMap = ({
  filters,
  hasConfirmedProjectionsPopup,
  ebolaData,
  covidCaseCountData,
  covidDeathCountData,
}) => {
  const [zoomLevel, setZoomLevel] = useState(9);
  const [fillColorDictionary, setFillColorDictionary] = useState({});
  const [countryDiseaseCounts, updateCountryDiseaseCounts] = useState({});
  const [toolTipContent, setToolTipContent] = useState(null);

  // Getting the country disease counts for the selected outbreak when the filters are updated.
  useEffect(() => {
    const diseaseCountsDictionary = getCountryDiseaseCountDictionary(
      ebolaData,
      covidCaseCountData,
      covidDeathCountData,
      filters
    );
    updateCountryDiseaseCounts(diseaseCountsDictionary);
  }, [ebolaData, covidCaseCountData, covidDeathCountData, filters]);

  // Set the fillColorDictionary when the countryDiseaseCounts is updated or the outbreak or projections are changed.
  useEffect(() => {
    const colorDictionary =
      filters.outbreak === "Ebola Outbreak"
        ? getEbolaFillColorsDictionary(countryDiseaseCounts, filters.dataType)
        : getCovidFillColorsDictionary(countryDiseaseCounts, filters.dataType);
    setFillColorDictionary(colorDictionary);
  }, [countryDiseaseCounts, filters.outbreak, filters.dataType]);

  // Update the zoomLevel when switching between outbreaks
  useEffect(() => {
    filters.outbreak === "Ebola Outbreak" ? setZoomLevel(9) : setZoomLevel(1);
  }, [filters.outbreak]);

  const changeZoomLevel = (newZoomLevel) => {
    // This prevents zooming in to a level higher than 9 and lower than 1.
    const validNewZoomLevel = newZoomLevel <= 9 && newZoomLevel >= 1;
    return validNewZoomLevel ? setZoomLevel(newZoomLevel) : null;
  };

  return (
    <SnapshotMapContainer
      isProjectionsBannerDisplayed={hasConfirmedProjectionsPopup}
    >
      <StyledTooltip>{toolTipContent}</StyledTooltip>
      <ComposableMap
        projection="geoMercator"
        style={{ backgroundColor: "#F1F5FB" }}
        stroke="#131D34"
        strokeWidth={0.02}
        data-tip=""
      >
        <ZoomableGroup zoom={zoomLevel} center={[-10, 2]} maxZoom={9}>
          <Geographies geography="mapData/world_50m.json">
            {({ geographies }) =>
              geographies.map((geo) => {
                //  Gets the fillColor for each country (geo).
                const fillColor = getCountryFillColor(
                  geo.properties.NAME,
                  filters,
                  fillColorDictionary
                );
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      setToolTipContent(
                        <SnapshotMapCountryPopup
                          countryName={geo.properties.NAME}
                          diseaseCaseCountsDictionary={countryDiseaseCounts}
                        />
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
      <SnapshotMapLegend countryDiseaseCounts={countryDiseaseCounts} />
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
  filters: state.filters,
  hasConfirmedProjectionsPopup: state.ui.hasConfirmedProjectionsPopup,
  ebolaData: state.ebola.ebolaData.data,
  covidCaseCountData: state.covid.caseCounts.data,
  covidDeathCountData: state.covid.deathCounts.data,
});

// Wrapped SnapshotMap component in memo() as recommended here: https://www.react-simple-maps.io/examples/map-chart-with-tooltip/
export default connect(mapStateToProps)(memo(SnapshotMap));
