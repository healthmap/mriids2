import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDateRange } from "../../actions/filters";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

const SidebarDateRange = ({ dateRange, changeDateRange }) => (
  <div>
    <DateRangePicker
      value={[dateRange.from, dateRange.to]}
      onChange={changeDateRange}
      clearIcon={null}
    />
  </div>
);

const mapStateToProps = (state) => ({
  dateRange: state.filters.dateRange,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeDateRange,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SidebarDateRange);
