import React from "react";
import { ChartTypeButtonsWrapper } from "../styled-components/ChartTypeButtonsWrapper";
import { Button } from "../styled-components/Button";

const ChartTypeButtons = () => (
  <ChartTypeButtonsWrapper>
    <label>Chart Type</label>
    <Button>Cases</Button>
    <Button>Deaths</Button>
    <Button>Cases and Deaths</Button>
  </ChartTypeButtonsWrapper>
);

export default ChartTypeButtons;
