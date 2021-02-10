import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDataType } from "../../actions/filters";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import {
  DataRadioButtonsContainer,
  StyledFormLabel,
} from "../styled-components/RadioButtonStyles";

const DataRadioButtons = ({ dataType, changeDataType, outbreakSelected }) => {
  const handleChange = (event) => {
    changeDataType(event.target.value);
  };
  return (
    <DataRadioButtonsContainer>
      <FormControl component="fieldset">
        <StyledFormLabel component="legend">Data</StyledFormLabel>
        <RadioGroup
          aria-label="data"
          name="data"
          value={dataType}
          onChange={handleChange}
        >
          <FormControlLabel value="cases" control={<Radio />} label="Cases" />
          {outbreakSelected === "COVID 19" ? (
            <>
              <FormControlLabel
                value="deaths"
                control={<Radio />}
                label="Deaths"
              />
              <FormControlLabel
                value="projected deaths"
                control={<Radio />}
                label="Projected Deaths"
              />
            </>
          ) : (
            <FormControlLabel
              value="projected cases"
              control={<Radio />}
              label="Projected Cases"
            />
          )}
        </RadioGroup>
      </FormControl>
    </DataRadioButtonsContainer>
  );
};

const mapStateToProps = (state) => ({
  dataType: state.filters.dataType,
  outbreakSelected: state.filters.outbreak,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeDataType }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DataRadioButtons);
