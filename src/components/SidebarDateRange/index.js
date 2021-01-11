import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDateRange } from "../../actions/filters";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const SidebarDateRange = ({ dateRange, changeDateRange }) => {
  return (
    <div>
      <DateRangePicker
        onChange={(item) =>
          changeDateRange([item.selection.startDate, item.selection.endDate])
        }
        showSelectionPreview={true}
        moveRangeOnFirstSelection={true}
        months={2}
        ranges={[
          {
            startDate: dateRange.from,
            endDate: dateRange.to,
            key: "selection",
          },
        ]}
        direction="horizontal"
      />
    </div>
  );
};

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
