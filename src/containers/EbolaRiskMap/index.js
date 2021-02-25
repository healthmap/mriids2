import React, { Component } from "react";
import ReactMapGL from "react-map-gl";

import { EbolaRiskMapContainer } from "../../components/styled-components/MapContainers";
import RiskMapLegend from "../../components/RiskMapLegend";
import MapZoomButtons from "../../components/MapZoomButtons";

class EbolaRiskMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "100%",
        height: "100%",
        latitude: 2.450552,
        longitude: 20.799039,
        zoom: 3,
        minZoom: 2,
        pitch: 0,
        bearing: 0,
      },
      settings: {
        dragPan: true,
        dragRotate: true,
        scrollZoom: true,
        touchZoom: true,
        touchRotate: true,
        keyboard: true,
        doubleClickZoom: true,
      },
    };
  }

  onViewportChange = (viewport) => {
    this.setState({ viewport });
  };

  changeZoomLevel = (newZoomValue = 0) => {
    this.setState((currentState) => ({
      viewport: {
        ...currentState.viewport,
        zoom: newZoomValue,
      },
    }));
  };

  render() {
    return (
      <EbolaRiskMapContainer>
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={(viewport) => this.onViewportChange(viewport)}
          mapStyle="mapbox://styles/compepi/cjnxhx2q84zo12rqom3w1m25i"
        />
        <RiskMapLegend />
        <MapZoomButtons
          zoomLevel={this.state.viewport.zoom}
          changeZoomFunction={this.changeZoomLevel}
          maxZoom={20}
          minZoom={2}
        />
      </EbolaRiskMapContainer>
    );
  }
}

export default EbolaRiskMap;
