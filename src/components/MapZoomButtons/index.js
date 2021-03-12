import React from "react";
import { ZoomButton, ZoomButtons } from "./styles";

const MapZoomButtons = ({
  zoomLevel,
  changeZoomFunction,
  maxZoom,
  minZoom,
}) => (
  <ZoomButtons>
    <ZoomButton
      disabled={zoomLevel >= maxZoom}
      onClick={() => changeZoomFunction(zoomLevel + 1)}
    >
      +
    </ZoomButton>
    <ZoomButton
      disabled={zoomLevel <= minZoom}
      onClick={() => changeZoomFunction(zoomLevel - 1)}
    >
      -
    </ZoomButton>
  </ZoomButtons>
);

export default MapZoomButtons;
