import React from "react";

import * as Styled from "./styles";

const Select = (props) => {
  const renderOptions = (array) => {
    const selectOptions = array.map(function (value, index) {
      return (
        <Styled.StyledMenuItem key={`select-option-${index}`} value={value}>
          {value}
        </Styled.StyledMenuItem>
      );
    });
    return selectOptions;
  };

  return (
    <>
      <Styled.InputLabel>{props.name}</Styled.InputLabel>
      <Styled.StyledMuiSelect
        name={props.name}
        value={props.value}
        onChange={props.changeFunction}
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
        {renderOptions(props.optionsCurrent)}
        <Styled.StyledListSubheader>Past Outbreaks</Styled.StyledListSubheader>
        {renderOptions(props.optionsPast)}
      </Styled.StyledMuiSelect>
    </>
  );
};
export default Select;
