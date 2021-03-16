import React from "react";
import * as Styled from "./styles";

const MapZoomButtons = ({
  zoomLevel,
  changeZoomFunction,
  maxZoom,
  minZoom,
}) => (
  <Styled.ZoomButtons>
    <Styled.ZoomButton
      disabled={zoomLevel >= maxZoom}
      onClick={() => changeZoomFunction(zoomLevel + 1)}
    >
      +
    </Styled.ZoomButton>
    <Styled.ZoomButton
      disabled={zoomLevel <= minZoom}
      onClick={() => changeZoomFunction(zoomLevel - 1)}
    >
      -
    </Styled.ZoomButton>
  </Styled.ZoomButtons>
);

export default MapZoomButtons;
