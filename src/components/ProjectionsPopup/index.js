import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  closeProjectionsPopup,
  confirmProjectionsPopup,
} from "../../actions/ui";
import { changeDataType } from "../../actions/filters";
import * as Styled from "./styles";

const ProjectionsPopup = ({
  isProjectionsPopupOpen,
  outbreakSelected,
  closeProjectionsPopup,
  confirmProjectionsPopup,
  changeDataType,
}) => {
  const handleConfirmButtonClick = () => {
    // Change the data type.
    changeDataType(
      outbreakSelected === "COVID 19" ? "projected deaths" : "projected cases"
    );
    // Close the popup.
    closeProjectionsPopup();
    // Mark the projections popup as 'confirmed'.
    confirmProjectionsPopup();
  };
  return (
    <Styled.StyledModal open={isProjectionsPopupOpen}>
      <Styled.PopupContainer>
        <Styled.PopupTitle>Show Additional Data</Styled.PopupTitle>
        <Styled.PopupTextSection>
          Some of our data, including risk and projection data, is for research
          only.
        </Styled.PopupTextSection>
        <Styled.PopupTextSection>
          Please click confirm to accept our terms and conditions before viewing
          this data.
        </Styled.PopupTextSection>
        <Styled.PopupButtonsContainer>
          <Styled.StyledButton
            variant="contained"
            onClick={() => closeProjectionsPopup()}
            disableRipple
          >
            Cancel
          </Styled.StyledButton>
          <Styled.StyledButton
            variant="contained"
            color="primary"
            onClick={() => handleConfirmButtonClick()}
            disableRipple
          >
            Confirm
          </Styled.StyledButton>
        </Styled.PopupButtonsContainer>
      </Styled.PopupContainer>
    </Styled.StyledModal>
  );
};

const mapStateToProps = (state) => ({
  outbreakSelected: state.filters.outbreak,
  isProjectionsPopupOpen: state.ui.isProjectionsPopupOpen,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { closeProjectionsPopup, confirmProjectionsPopup, changeDataType },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProjectionsPopup);
