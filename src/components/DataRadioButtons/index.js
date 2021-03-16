import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDataType } from "../../actions/filters";
import { openProjectionsPopup } from "../../actions/ui";
import { StyledInputLabel } from "../SharedStyledComponents/StyledInputLabel";
import SvgIcon from "../SvgIcon";
import FormControl from "@material-ui/core/FormControl";
import * as Styled from "./styles";

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
    <Styled.DataRadioButtonsContainer>
      <FormControl component="fieldset">
        <StyledInputLabel>Data</StyledInputLabel>
        <Styled.StyledRadioGroup
          aria-label="data"
          name="data"
          value={dataType}
          onChange={handleChange}
        >
          <Styled.StyledFormControlLabel
            value="cases"
            control={<Styled.StyledRadio />}
            label="Cases"
          />
          {outbreakSelected === "COVID 19" ? (
            <>
              <Styled.StyledFormControlLabel
                value="deaths"
                control={<Styled.StyledRadio />}
                label="Deaths"
              />
              <Styled.StyledFormControlLabel
                value="projected deaths"
                control={<Styled.StyledRadio />}
                label="Projected Deaths"
              />
            </>
          ) : (
            <>
              <Styled.FormLabelIconWrapper>
                <Styled.StyledFormControlLabel
                  value="projected cases"
                  control={<Styled.StyledRadio />}
                  label="Projected Cases"
                />
                <Styled.StyledTooltip
                  title="There is some uncertainty associated with the projection values. Projections are reported as an interval that contains 95% of the projected values from several simulations. The width of this interval is a measure of the uncertainty associated with the projections."
                  aria-label="info"
                >
                  <div>
                    <SvgIcon title="info-icon" size="14" icon="Info" />
                  </div>
                </Styled.StyledTooltip>
              </Styled.FormLabelIconWrapper>
              <Styled.StyledFormControlLabel
                value="risk"
                control={<Styled.StyledRadio />}
                label="Risk"
              />
            </>
          )}
        </Styled.StyledRadioGroup>
      </FormControl>
    </Styled.DataRadioButtonsContainer>
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
