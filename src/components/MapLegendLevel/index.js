import React from "react";
import {
  LevelWrapper,
  LevelValue,
  LevelColor,
} from "../styled-components/MapLegendLevel";

const MapLegendLevel = ({ color, value }) => {
  return (
    <LevelWrapper>
      <LevelColor style={{ backgroundColor: color }} />
      <LevelValue>{value}</LevelValue>
    </LevelWrapper>
  );
};

export default MapLegendLevel;
