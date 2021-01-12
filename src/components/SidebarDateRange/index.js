import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDateRange } from "../../actions/filters";
import {
  covidDateRangeOptions,
  ebolaDateRangeOptions,
} from "../../constants/DateRanges";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const SidebarDateRange = ({ dateRange, outbreakSelected, changeDateRange }) => {
  const dateRangeOptions =
    outbreakSelected === "Ebola Outbreak"
      ? ebolaDateRangeOptions
      : covidDateRangeOptions;
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
        staticRanges={dateRangeOptions}
        direction="horizontal"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  dateRange: state.filters.dateRange,
  outbreakSelected: state.filters.outbreak,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeDateRange,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SidebarDateRange);
