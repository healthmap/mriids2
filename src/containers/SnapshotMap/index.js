import React, { Component } from "react";
import ReactMapGL from "react-map-gl";

import { SnapshotMapContainer } from "../../components/styled-components/MapContainers";
import ViewToggle from "../../components/ViewToggle";
import SnapshotMapCaseCountLegend from "../../components/SnapshotMapCaseCountLegend";
import MapZoomButtons from "../../components/MapZoomButtons";

class SnapshotMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "100%",
        height: "100%",
        latitude: 8.555216,
        longitude: -11.322184,
        zoom: 5,
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
      showCaseCounts: true,
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

  showHideCaseCounts = () => {
    this.setState((currentState) => ({
      showCaseCounts: !currentState.showCaseCounts,
    }));
  };

  render() {
    return (
      <SnapshotMapContainer>
        <ViewToggle />
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={(viewport) => this.onViewportChange(viewport)}
          mapStyle="mapbox://styles/compepi/cjnxgpr991b6h2rpcvqmh5j4f"
        />
        <SnapshotMapCaseCountLegend
          showCaseCounts={this.state.showCaseCounts}
          toggleCaseCountFunction={this.showHideCaseCounts}
        />
        <MapZoomButtons
          viewPortZoom={this.state.viewport.zoom}
          changeZoomFunction={this.changeZoomLevel}
        />
      </SnapshotMapContainer>
    );
  }
}

export default SnapshotMap;
