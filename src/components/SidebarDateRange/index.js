import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDateRange } from "../../actions/filters";
import { changeDateSliderRange } from "../../actions/ui";
import {
  covidDateRangeOptions,
  ebolaDateRangeOptions,
} from "../../constants/DateRanges";
import {
  getMinimumDateRangeDate,
  getMaximumDateRangeDate,
  getNumberOfWeeksBetweenDates,
  getOutbreakInitialDateRange,
} from "../../utils/dateHelpers";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import * as Styled from "./styles.js";

class SidebarDateRange extends Component {
  updateDateRangeAndSlider = (startDate, endDate) => {
    const initialDateRange = getOutbreakInitialDateRange(
      this.props.outbreakSelected
    );
    // Changes the date range in filters Redux state.
    this.props.changeDateRange([startDate, endDate]);
    // Changes the range in the date range slider.
    this.props.changeDateSliderRange([
      getNumberOfWeeksBetweenDates(initialDateRange.from, startDate),
      getNumberOfWeeksBetweenDates(initialDateRange.from, endDate),
    ]);
  };
  render() {
    const dateRangeOptions =
      this.props.outbreakSelected === "Ebola Outbreak"
        ? ebolaDateRangeOptions
        : covidDateRangeOptions;
    return (
      <div>
        <Styled.StyledDateRangePicker
          onChange={(item) =>
            this.updateDateRangeAndSlider(
              item.selection.startDate,
              item.selection.endDate
            )
          }
          showSelectionPreview={true}
          moveRangeOnFirstSelection={true}
          months={1}
          minDate={getMinimumDateRangeDate(this.props.outbreakSelected)}
          maxDate={getMaximumDateRangeDate(this.props.outbreakSelected)}
          ranges={[
            {
              startDate: this.props.dateRange.from,
              endDate: this.props.dateRange.to,
              key: "selection",
            },
          ]}
          staticRanges={dateRangeOptions}
          inputRanges={[]}
          direction="vertical"
          color="#4D73CE"
          rangeColors={["#4D73CE"]}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  dateRange: state.filters.dateRange,
  outbreakSelected: state.filters.outbreak,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeDateRange,
      changeDateSliderRange,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(SidebarDateRange);
