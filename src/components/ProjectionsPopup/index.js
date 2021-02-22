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
} from "./styles";
import Button from "@material-ui/core/Button";

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
          <br />
          <br />
          Please click confirm to accept our terms and conditions before viewing
          this data.
        </PopupTextSection>
        <PopupButtonsContainer>
          <Button
            size="large"
            variant="contained"
            onClick={() => closeProjectionsPopup()}
          >
            Cancel
          </Button>
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => handleConfirmButtonClick()}
          >
            Confirm
          </Button>
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
