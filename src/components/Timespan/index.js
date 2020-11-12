import React from "react";
import { connect } from "react-redux";
import dayjs from "dayjs";

import { bindActionCreators } from "redux";
import { changeDateRange } from "../../actions/filters";

import { TimespanButtonsWrapper } from "../styled-components/TimespanButtonsWrapper";
import { Button, ButtonLink } from "../styled-components/Button";
import { ebolaInitialDateRange } from "../../constants/DateRanges";

const Timespan = (props) => {
  const updateDateRange = (number = 0, unitOfTime) => {
    //  uses the dayjs library to add units of time to the 'from' date in the initial date range.
    const newToDate = new Date(
      dayjs(ebolaInitialDateRange.from).add(number, unitOfTime).format()
    );
    props.changeDateRange([ebolaInitialDateRange.from, newToDate]);
  };
  const resetDateRange = () => {
    //  Reset the date range filter to it's initial state
    props.changeDateRange([
      ebolaInitialDateRange.from,
      ebolaInitialDateRange.to,
    ]);
  };
  return (
    <TimespanButtonsWrapper>
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
