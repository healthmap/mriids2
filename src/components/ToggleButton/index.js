import React from "react";
import { ToggleButtonStyled } from "../styled-components/ToggleButton";

const ToggleButton = ({ value, status, onClickFunction, label = "" }) => (
  <ToggleButtonStyled
    className={status === value ? "is-active" : ""}
    onClick={() => onClickFunction(value)}
  >
    {label}
  </ToggleButtonStyled>
);

export default ToggleButton;
