import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDataType } from "../../actions/filters";
import { openProjectionsPopup } from "../../actions/ui";
import { InputLabel } from "../styled-components/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import {
  DataRadioButtonsContainer,
  StyledRadioGroup,
  StyledRadio,
  StyledFormControlLabel,
} from "../styled-components/RadioButtonStyles";

const DataRadioButtons = ({
  dataType,
  changeDataType,
  openProjectionsPopup,
  hasConfirmedProjectionsPopup,
  outbreakSelected,
}) => {
  const handleChange = (event) => {
    const dataTypeSelected = event.target.value;
    // If the user tries to view to projections data and has not clicked on 'Confirm' on the ProjectionsPopup,
    // open the ProjectionsPopup.
    if (
      dataTypeSelected.includes("projected") &&
      !hasConfirmedProjectionsPopup
    ) {
      openProjectionsPopup();
    } else {
      // Otherwise, change to the selected data type.
      changeDataType(dataTypeSelected);
    }
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
  hasConfirmedProjectionsPopup: state.ui.hasConfirmedProjectionsPopup,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeDataType, openProjectionsPopup }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DataRadioButtons);
