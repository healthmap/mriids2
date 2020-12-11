import React from "react";
import { connect } from "react-redux";
import dayjs from "dayjs";

import { bindActionCreators } from "redux";
import { changeDateRange } from "../../actions/filters";
import { getNumberOfWeeksBetweenDates } from "../../utils/dateHelpers";
import { TimespanButtonsWrapper } from "../styled-components/TimespanButtonsWrapper";
import { Button, ButtonLink } from "../styled-components/Button";
import {
  ebolaInitialDateRange,
  covidInitialDateRange,
} from "../../constants/DateRanges";

const Timespan = ({ changeDateRange, updateSliderRange, outbreak }) => {
  //  Determines which initialDateRange to use depending on which outbreak is selected.
  const initialDateRange =
    outbreak === "Ebola Outbreak"
      ? ebolaInitialDateRange
      : covidInitialDateRange;

  const updateDateRange = (number = 0, unitOfTime) => {
    // Uses the dayjs library to add units of time to the 'from' date in the initial date range.
    const newToDate = new Date(
      dayjs(initialDateRange.from).add(number, unitOfTime).format()
    );
    // Updates the date range filter in the redux state.
    changeDateRange([initialDateRange.from, newToDate]);
    // Updates the sliderRange in the DateRange component.
    updateSliderRange([
      0,
      getNumberOfWeeksBetweenDates(initialDateRange.from, newToDate),
    ]);
  };
  const resetDateRange = () => {
    //  Reset the date range filter in the redux state to it's initial state.
    changeDateRange([initialDateRange.from, initialDateRange.to]);
    //  Reset the sliderRange in the DateRange component.
    updateSliderRange([
      0,
      getNumberOfWeeksBetweenDates(initialDateRange.from, initialDateRange.to),
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

const mapStateToProps = (state) => ({
  outbreak: state.filters.outbreak,
});

export default connect(mapStateToProps, mapDispatchToProps)(Timespan);
