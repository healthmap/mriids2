import React from "react";
import { ZoomButton, ZoomButtons } from "../styled-components/ZoomButtons";

const MapZoomButtons = ({ viewPortZoom, changeZoomFunction }) => {
  return (
    <ZoomButtons>
      <ZoomButton
        disabled={viewPortZoom >= 20}
        onClick={() => changeZoomFunction(viewPortZoom + 1)}
      >
        +
      </ZoomButton>
      <ZoomButton
        disabled={viewPortZoom <= 2}
        onClick={() => changeZoomFunction(viewPortZoom - 1)}
      >
        -
      </ZoomButton>
    </ZoomButtons>
  );
};

export default MapZoomButtons;
