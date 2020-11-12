import React from "react";
import { connect } from "react-redux";
import dayjs from "dayjs";

import { bindActionCreators } from "redux";
import { changeDateRange } from "../../actions/filters";
import { getNumberOfWeeksBetweenDates } from "../../utils/dateHelpers";
import { TimespanButtonsWrapper } from "../styled-components/TimespanButtonsWrapper";
import { Button, ButtonLink } from "../styled-components/Button";
import { ebolaInitialDateRange } from "../../constants/DateRanges";

const Timespan = (props) => {
  const updateDateRange = (number = 0, unitOfTime) => {
    // Uses the dayjs library to add units of time to the 'from' date in the initial date range.
    const newToDate = new Date(
      dayjs(ebolaInitialDateRange.from).add(number, unitOfTime).format()
    );
    // Updates the date range filter in the redux state.
    props.changeDateRange([ebolaInitialDateRange.from, newToDate]);
    // Updates the sliderRange in the DateRangeSlider component.
    props.updateSliderRange([
      0,
      getNumberOfWeeksBetweenDates(ebolaInitialDateRange.from, newToDate),
    ]);
  };
  const resetDateRange = () => {
    //  Reset the date range filter in the redux state to it's initial state.
    props.changeDateRange([
      ebolaInitialDateRange.from,
      ebolaInitialDateRange.to,
    ]);
    //  Reset the sliderRange in the DateRangeSlider component.
    props.updateSliderRange([
      0,
      getNumberOfWeeksBetweenDates(
        ebolaInitialDateRange.from,
        ebolaInitialDateRange.to
      ),
    ]);
  };
  return (
    <TimespanButtonsWrapper>
      <label>Timespan:</label>
      <Button onClick={() => updateDateRange(1, "month")}>1 month</Button>
      <Button onClick={() => updateDateRange(3, "month")}>3 months</Button>
      <Button onClick={() => updateDateRange(6, "month")}>6 months</Button>
      <Button onClick={() => updateDateRange(1, "year")}>1 year</Button>
      <Button onClick={() => resetDateRange()}>Max</Button>
      <ButtonLink onClick={() => resetDateRange()}>Reset</ButtonLink>
    </TimespanButtonsWrapper>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeDateRange,
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(Timespan);
