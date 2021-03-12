import React from "react";
import MapLegendLevel from "../MapLegendLevel";
import { BlockDropshadow } from "../SharedStyledComponents/Block";
import * as Styled from "./styles";

const riskColors = ["#6c4ce1", "#7c64d3", "#9c8de7", "#c0b6fa", "#dad3fe"];
const riskLabels = ["High", "", "Med", "", "Low"];

const RiskMapLegend = () => (
  <Styled.MapLegendWrapper>
    <BlockDropshadow>
      <h3>Projected relative risk of spread</h3>
      {riskColors.map((color, index) => (
        <MapLegendLevel
          key={`risk-legend-level-${index}`}
          color={color}
          value={riskLabels[index]}
        />
      ))}
    </BlockDropshadow>
  </Styled.MapLegendWrapper>
);

export default RiskMapLegend;
