import React from "react";
import * as Styled from "./styles";

const MapLegendLevel = ({ color, value }) => {
  return (
    <Styled.LevelWrapper>
      <Styled.LevelColor style={{ backgroundColor: color }} />
      <Styled.LevelValue>{value}</Styled.LevelValue>
    </Styled.LevelWrapper>
  );
};

export default MapLegendLevel;
