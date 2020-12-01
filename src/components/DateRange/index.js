import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDateRange } from "../../actions/filters";
import { Slider } from "@material-ui/core";
import Timespan from "../Timespan";
import ProjectionsToggle from "../ProjectionsToggle";
import {
  ebolaInitialDateRange,
  covidInitialDateRange,
} from "../../constants/DateRanges";
import {
  DateRangeComponentContainer,
  DateRangeSliderContainer,
} from "../styled-components/DateRangeComponentContainer";
import { getNumberOfWeeksBetweenDates } from "../../utils/dateHelpers";

const DateRange = ({ filters, changeDateRange }) => {
  const [sliderRange, setSliderRange] = useState([0, 72]);

  // This useEffect updates the dateRange and sliderRange when the filters.outbreak prop changes.
  useEffect(() => {
    const dateRange =
      filters.outbreak === "Ebola Outbreak"
        ? ebolaInitialDateRange
        : covidInitialDateRange;
    // Resets the dateRange filter.
    changeDateRange([dateRange.from, dateRange.to]);
    // Resets the values for the sliderRange.
    setSliderRange([
      0,
      getNumberOfWeeksBetweenDates(dateRange.from, dateRange.to),
    ]);
  }, [filters.outbreak, changeDateRange]);

  const handleRangeChange = (event, newRangeArray) => {
    // Only execute this block if the newRangeArray is different from the numberOfWeeks state.
    if (sliderRange !== newRangeArray) {
      // Here we are getting the new dateRange.from date value for the filters.
      let newFromDate = new Date(ebolaInitialDateRange.from);
      const fromDateChange = 7 * newRangeArray[0];
      newFromDate.setDate(newFromDate.getDate() + fromDateChange);
      // Here we are getting the new dateRange.to date value for the filters.
      let newToDate = new Date(ebolaInitialDateRange.to);
      const toDateChange = 7 * (newRangeArray[1] - 72);
      newToDate.setDate(newToDate.getDate() + toDateChange);

      changeDateRange([newFromDate, newToDate]);
      setSliderRange(newRangeArray);
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
      <Timespan updateSliderRange={setSliderRange} />
    </DateRangeComponentContainer>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeDateRange,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(DateRange);
