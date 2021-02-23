import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  closeProjectionsPopup,
  confirmProjectionsPopup,
} from "../../actions/ui";
import { changeDataType } from "../../actions/filters";
import {
  StyledModal,
  PopupContainer,
  PopupTitle,
  PopupTextSection,
  PopupButtonsContainer,
  StyledButton,
} from "./styles";

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
    <StyledModal open={isProjectionsPopupOpen}>
      <PopupContainer>
        <PopupTitle>Show Additional Data</PopupTitle>
        <PopupTextSection>
          Some of our data, including risk and projection data, is for research
          only.
        </PopupTextSection>
        <PopupTextSection>
          Please click confirm to accept our terms and conditions before viewing
          this data.
        </PopupTextSection>
        <PopupButtonsContainer>
          <StyledButton
            variant="contained"
            onClick={() => closeProjectionsPopup()}
            disableRipple
          >
            Cancel
          </StyledButton>
          <StyledButton
            variant="contained"
            color="primary"
            onClick={() => handleConfirmButtonClick()}
            disableRipple
          >
            Confirm
          </StyledButton>
        </PopupButtonsContainer>
      </PopupContainer>
    </StyledModal>
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
