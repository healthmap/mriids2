import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closeDateRangePopover } from "../../actions/ui";
import Popover from "@material-ui/core/Popover";
import DialogContent from "@material-ui/core/DialogContent";
import SidebarDateRange from "../SidebarDateRange";

const DateRangePopover = ({
  isDateRangePopoverOpen,
  closeDateRangePopover,
}) => {
  return (
    <Popover
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      aria-labelledby="date-range-picker-modal"
      aria-describedby="date-range-picker-modal"
      open={isDateRangePopoverOpen}
      onClose={() => closeDateRangePopover()}
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
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ closeDateRangePopover }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DateRangePopover);
