import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeProjectionsPopup } from "../../actions/ui";
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
  changeDataType,
}) => {
  const handleConfirmButtonClick = () => {
    changeDataType(
      outbreakSelected === "COVID 19" ? "projected deaths" : "projected cases"
    );
    closeProjectionsPopup();
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
          <Button variant="contained" onClick={() => closeProjectionsPopup()}>
            Cancel
          </Button>
          <Button
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
  bindActionCreators({ closeProjectionsPopup, changeDataType }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectionsPopup);
