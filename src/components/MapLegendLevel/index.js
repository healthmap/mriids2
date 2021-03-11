import React from "react";
import { LevelWrapper, LevelValue, LevelColor } from "./styles";

const MapLegendLevel = ({ color, value }) => {
  return (
    <LevelWrapper>
      <LevelColor style={{ backgroundColor: color }} />
      <LevelValue>{value}</LevelValue>
    </LevelWrapper>
  );
};

export default MapLegendLevel;
