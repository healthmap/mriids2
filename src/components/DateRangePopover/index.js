import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  closeDateRangePopover,
  clearPopoverAnchorElement,
} from "../../actions/ui";
import Popover from "@material-ui/core/Popover";
import DialogContent from "@material-ui/core/DialogContent";
import SidebarDateRange from "../SidebarDateRange";

const DateRangePopover = ({
  isDateRangePopoverOpen,
  closeDateRangePopover,
  popoverAnchorElement,
  clearPopoverAnchorElement,
}) => {
  const handlePopoverClose = () => {
    // Clear the anchor element for the date range popover.
    clearPopoverAnchorElement();
    //  Close the popover.
    closeDateRangePopover();
  };
  return (
    <Popover
      anchorEl={popoverAnchorElement}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      aria-labelledby="date-range-picker-modal"
      aria-describedby="date-range-picker-modal"
      open={isDateRangePopoverOpen}
      onClose={() => handlePopoverClose()}
      children={
        <DialogContent>
          <SidebarDateRange />
        </DialogContent>
      }
    />
  );
};

const mapStateToProps = (state) => ({
  isDateRangePopoverOpen: state.ui.isDateRangePopoverOpen,
  popoverAnchorElement: state.ui.popoverAnchorElement,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { closeDateRangePopover, clearPopoverAnchorElement },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DateRangePopover);
