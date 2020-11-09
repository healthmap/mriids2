import React, { useState } from "react";
import { connect } from "react-redux";
import { Slider } from "@material-ui/core";
import { DateRangeSliderContainer } from "../styled-components/DateRangeSliderContainer";

const DateRangeSlider = (props) => {
  const [numberOfWeeks, setNumberOfWeeks] = useState([20, 68]);

  return (
    <DateRangeSliderContainer>
      <Slider value={numberOfWeeks} />
    </DateRangeSliderContainer>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(DateRangeSlider);
