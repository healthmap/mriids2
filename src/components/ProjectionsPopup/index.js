import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeProjectionsPopup } from "../../actions/ui";
import { changeDataType } from "../../actions/filters";
import {
  PopupContainer,
  PopupButtonsContainer,
} from "../DataRadioButtons/styles";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";

class ProjectionsPopup extends Component {
  handleConfirmButtonClick = () => {
    this.props.changeDataType(
      this.props.outbreakSelected === "COVID 19"
        ? "projected deaths"
        : "projected cases"
    );
    this.props.closeProjectionsPopup();
  };
  render() {
    return (
      <Modal open={this.props.isProjectionsPopupOpen}>
        <PopupContainer>
          <h2>Show Additional Data</h2>
          <p>
            Some of our data, including risk and projection data, is for
            research only.
          </p>
          <p>
            Please click confirm to accept our terms and conditions before
            viewing this data.
          </p>
          <PopupButtonsContainer>
            <Button
              variant="contained"
              onClick={() => this.props.closeProjectionsPopup()}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleConfirmButtonClick()}
            >
              Confirm
            </Button>
          </PopupButtonsContainer>
        </PopupContainer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  outbreakSelected: state.filters.outbreak,
  isProjectionsPopupOpen: state.ui.isProjectionsPopupOpen,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ closeProjectionsPopup, changeDataType }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectionsPopup);
