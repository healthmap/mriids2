import React from "react";
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
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const SidebarDateRange = ({
  dateRange,
  outbreakSelected,
  changeDateRange,
  changeDateSliderRange,
}) => {
  const dateRangeOptions =
    outbreakSelected === "Ebola Outbreak"
      ? ebolaDateRangeOptions
      : covidDateRangeOptions;

  const updateDateRangeAndSlider = (startDate, endDate) => {
    const initialDateRange = getOutbreakInitialDateRange(outbreakSelected);
    // Changes the date range in filters Redux state.
    changeDateRange([startDate, endDate]);
    // Changes the range in the date range slider.
    changeDateSliderRange([
      getNumberOfWeeksBetweenDates(initialDateRange.from, startDate),
      getNumberOfWeeksBetweenDates(initialDateRange.from, endDate),
    ]);
  };
  return (
    <div>
      <DateRangePicker
        onChange={(item) =>
          updateDateRangeAndSlider(
            item.selection.startDate,
            item.selection.endDate
          )
        }
        showSelectionPreview={true}
        moveRangeOnFirstSelection={true}
        months={2}
        minDate={getMinimumDateRangeDate(outbreakSelected)}
        maxDate={getMaximumDateRangeDate(outbreakSelected)}
        ranges={[
          {
            startDate: dateRange.from,
            endDate: dateRange.to,
            key: "selection",
          },
        ]}
        staticRanges={dateRangeOptions}
        inputRanges={[]}
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
      changeDateSliderRange,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(SidebarDateRange);
