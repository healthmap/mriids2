import React, { useState } from "react";
import { connect } from "react-redux";
import { Slider } from "@material-ui/core";
import { DateRangeSliderContainer } from "../styled-components/DateRangeSliderContainer";

const DateRangeSlider = (props) => {
  const [numberOfWeeks, setNumberOfWeeks] = useState([0, 68]);

  const handleRangeChange = (event, newRangeArray) => {
    setNumberOfWeeks(newRangeArray);
  };

  return (
    <DateRangeSliderContainer>
      <Slider value={numberOfWeeks} onChange={handleRangeChange} />
    </DateRangeSliderContainer>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(DateRangeSlider);
