import React from "react";
import * as Styled from "./styles";

const Select = (props) => {
  const renderOptions = (array) => {
    const selectOptions = array.map(function (value, index) {
      return (
        <option key={`select-option-${index}`} value={value}>
          {value}
        </option>
      );
    });
    return selectOptions;
  };

  return (
    <Styled.SelectInput
      name={props.name}
      value={props.value}
      onChange={props.changeFunction}
    >
      {renderOptions(props.options)}
    </Styled.SelectInput>
  );
};
export default Select;
