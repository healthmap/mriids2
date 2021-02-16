import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDataType } from "../../actions/filters";
import FormControl from "@material-ui/core/FormControl";
import {
  DataRadioButtonsContainer,
  InputLabel,
  StyledRadioGroup,
  StyledRadio,
  StyledFormControlLabel,
} from "../styled-components/RadioButtonStyles";

const DataRadioButtons = ({ dataType, changeDataType, outbreakSelected }) => {
  const handleChange = (event) => {
    changeDataType(event.target.value);
  };
  return (
    <DataRadioButtonsContainer>
      <FormControl component="fieldset">
        <InputLabel>Data</InputLabel>
        <StyledRadioGroup
          aria-label="data"
          name="data"
          value={dataType}
          onChange={handleChange}
        >
          <StyledFormControlLabel
            value="cases"
            control={<StyledRadio />}
            label="Cases"
          />
          {outbreakSelected === "COVID 19" ? (
            <>
              <StyledFormControlLabel
                value="deaths"
                control={<StyledRadio />}
                label="Deaths"
              />
              {/*<FormControlLabel*/}
              {/*  value="projected deaths"*/}
              {/*  control={<Radio />}*/}
              {/*  label="Projected Deaths"*/}
              {/*/>*/}
            </>
          ) : (
            <StyledFormControlLabel
              value="projected cases"
              control={<StyledRadio />}
              label="Projected Cases"
            />
          )}
        </StyledRadioGroup>
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
