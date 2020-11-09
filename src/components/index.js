import React, { useState } from "react";
import { connect } from "react-redux";
import { Slider } from "@material-ui/core";

const DateRangeSlider = (props) => {
  const [numberOfWeeks, setNumberOfWeeks] = useState([20, 68]);

  return <Slider value={numberOfWeeks} />;
};

const mapStateToProps = (state) => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(DateRangeSlider);
