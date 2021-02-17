import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeDateRangeModal } from "../../actions/ui";
import Popover from "@material-ui/core/Popover";
import DialogContent from "@material-ui/core/DialogContent";
import SidebarDateRange from "../SidebarDateRange";

const DateRangePopover = ({ isDateRangeModalOpen, closeDateRangeModal }) => {
  return (
    <Popover
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      aria-labelledby="date-range-picker-modal"
      aria-describedby="date-range-picker-modal"
      open={isDateRangeModalOpen}
      onClose={() => closeDateRangeModal()}
      children={
        <DialogContent>
          <SidebarDateRange />
        </DialogContent>
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isDateRangeModalOpen: state.ui.isDateRangeModalOpen,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ closeDateRangeModal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DateRangePopover);
