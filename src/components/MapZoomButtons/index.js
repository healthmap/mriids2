import React from "react";
import { ZoomButton, ZoomButtons } from "../styled-components/ZoomButtons";

const MapZoomButtons = ({ zoomLevel, changeZoomFunction }) => {
  return (
    <ZoomButtons>
      <ZoomButton
        disabled={zoomLevel >= 20}
        onClick={() => changeZoomFunction(zoomLevel + 1)}
      >
        +
      </ZoomButton>
      <ZoomButton
        disabled={zoomLevel <= 2}
        onClick={() => changeZoomFunction(zoomLevel - 1)}
      >
        -
      </ZoomButton>
    </ZoomButtons>
  );
};

export default MapZoomButtons;
