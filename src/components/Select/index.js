import React from "react";
import { StyledInputLabel } from "../SharedStyledComponents/StyledInputLabel";
import * as Styled from "./styles";

const Select = ({
  name,
  value,
  changeFunction,
  optionsCurrent,
  optionsPast,
}) => {
  const renderOptions = (optionsArray = []) =>
    optionsArray.map((value, index) => (
      <Styled.StyledMenuItem
        disableRipple
        key={`select-option-${index}`}
        value={value}
      >
        {value}
      </Styled.StyledMenuItem>
    ));

  return (
    <>
      <StyledInputLabel>{name}</StyledInputLabel>
      <Styled.StyledMuiSelect
        name={name}
        value={value}
        onChange={changeFunction}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
          getContentAnchorEl: null,
        }}
      >
        <Styled.StyledListSubheader>
          Current Outbreaks
        </Styled.StyledListSubheader>
        {renderOptions(optionsCurrent)}
        <Styled.StyledListSubheader>Past Outbreaks</Styled.StyledListSubheader>
        {renderOptions(optionsPast)}
      </Styled.StyledMuiSelect>
    </>
  );
};
export default Select;
