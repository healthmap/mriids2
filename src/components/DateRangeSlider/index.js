import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDateRange } from "../../actions/filters";
import { Slider } from "@material-ui/core";
import { DateRangeSliderContainer } from "../styled-components/DateRangeSliderContainer";
import Timespan from "../Timespan";
import { ebolaInitialDateRange } from "../../constants/DateRanges";

const DateRangeSlider = (props) => {
  const [sliderRange, setSliderRange] = useState([0, 72]);

  const handleRangeChange = (event, newRangeArray) => {
    // Only execute this block if the newRangeArray is different from the numberOfWeeks state.
    if (sliderRange !== newRangeArray) {
      // Here we are getting the new dateRange.from date value for the filters
      let newFromDate = new Date(ebolaInitialDateRange.from);
      const fromDateChange = 7 * newRangeArray[0];
      newFromDate.setDate(newFromDate.getDate() + fromDateChange);
      // Here we are getting the new dateRange.to date value for the filters
      let newToDate = new Date(ebolaInitialDateRange.to);
      const toDateChange = 7 * (newRangeArray[1] - 72);
      newToDate.setDate(newToDate.getDate() + toDateChange);

      props.changeDateRange([newFromDate, newToDate]);
      setSliderRange(newRangeArray);
    }
  };

  return (
    <DateRangeSliderContainer>
      <Slider
        value={sliderRange}
        min={0}
        max={72}
        onChange={handleRangeChange}
      />
      <Timespan updateSliderRange={setSliderRange} />
    </DateRangeSliderContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(DateRangeSlider);
