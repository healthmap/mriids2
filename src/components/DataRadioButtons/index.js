import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDataType } from "../../actions/filters";
import { openProjectionsPopup } from "../../actions/ui";
import { InputLabel } from "../styled-components/InputLabel";
import SvgIcon from "../SvgIcon";
import FormControl from "@material-ui/core/FormControl";
import {
  DataRadioButtonsContainer,
  StyledRadioGroup,
  StyledRadio,
  FormLabelIconWrapper,
  StyledFormControlLabel,
  StyledTooltip,
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
              <StyledFormControlLabel
                value="projected deaths"
                control={<StyledRadio />}
                label="Projected Deaths"
              />
            </>
          ) : (
            <>
              <FormLabelIconWrapper>
                <StyledFormControlLabel
                  value="projected cases"
                  control={<StyledRadio />}
                  label="Projected Cases"
                />
                <StyledTooltip
                  title="There is some uncertainty associated with the projection values. Projections are reported as an interval that contains 95% of the projected values from several simulations. The width of this interval is a measure of the uncertainty associated with the projections."
                  aria-label="info"
                >
                  <div>
                    <SvgIcon title="info-icon" size="14" icon="Info" />
                  </div>
                </StyledTooltip>
              </FormLabelIconWrapper>
              <StyledFormControlLabel
                value="risk"
                control={<StyledRadio />}
                label="Risk"
              />
            </>
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
