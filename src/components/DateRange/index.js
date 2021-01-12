import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDateRange } from "../../actions/filters";
import { changeDateSliderRange } from "../../actions/ui";
import { Slider } from "@material-ui/core";
import Timespan from "../Timespan";
import ProjectionsToggle from "../ProjectionsToggle";
import {
  DateRangeComponentContainer,
  DateRangeSliderContainer,
} from "../styled-components/DateRangeComponentContainer";
import {
  getNumberOfWeeksBetweenDates,
  getOutbreakInitialDateRange,
} from "../../utils/dateHelpers";

const DateRange = ({
  filters,
  sliderRange,
  changeDateRange,
  changeDateSliderRange,
}) => {
  const initialDateRange = getOutbreakInitialDateRange(filters.outbreak);

  // This useEffect updates the dateRange and sliderRange when the filters.outbreak prop changes.
  useEffect(() => {
    // Resets the dateRange filter.
    changeDateRange([initialDateRange.from, initialDateRange.to]);
    // Resets the values for the sliderRange.
    changeDateSliderRange([
      0,
      getNumberOfWeeksBetweenDates(initialDateRange.from, initialDateRange.to),
    ]);
  }, [
    filters.outbreak,
    changeDateRange,
    changeDateSliderRange,
    initialDateRange.from,
    initialDateRange.to,
  ]);

  const handleRangeChange = (event, newRangeArray) => {
    // Only execute this block if the newRangeArray is different from the sliderRange.
    if (sliderRange !== newRangeArray) {
      // Gets the max value for the slider based on how many weeks are between the dates in the initialDateRange.
      const maxSliderValue = getNumberOfWeeksBetweenDates(
        initialDateRange.from,
        initialDateRange.to
      );
      // Here we are getting the new dateRange.from date value for the filters.
      let newFromDate = new Date(initialDateRange.from);
      const fromDateChange = 7 * newRangeArray[0];
      newFromDate.setDate(newFromDate.getDate() + fromDateChange);
      // Here we are getting the new dateRange.to date value for the filters.
      let newToDate = new Date(initialDateRange.to);
      const toDateChange = 7 * (newRangeArray[1] - maxSliderValue);
      newToDate.setDate(newToDate.getDate() + toDateChange);
      // Changes the dateRange filter in the Redux state.
      changeDateRange([newFromDate, newToDate]);
      // Sets the new sliderRange.
      changeDateSliderRange(newRangeArray);
    }
  };

  return (
    <DateRangeComponentContainer>
      <DateRangeSliderContainer>
        <Slider
          value={sliderRange}
          min={0}
          max={72}
          onChange={handleRangeChange}
        />
        <ProjectionsToggle />
      </DateRangeSliderContainer>
      <Timespan updateSliderRange={changeDateSliderRange} />
    </DateRangeComponentContainer>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
  sliderRange: state.ui.dateSliderRange,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeDateRange,
      changeDateSliderRange,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DateRange);
