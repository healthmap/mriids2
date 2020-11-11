import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeDateRange } from "../../actions/filters";

import { TimespanButtonsWrapper } from "../styled-components/TimespanButtonsWrapper";
import { Button, ButtonLink } from "../styled-components/Button";

const Timespan = (props) => {
  return (
    <TimespanButtonsWrapper>
      <Button onClick={() => console.log("1 month")}>1 month</Button>
      <Button onClick={() => console.log("3 month")}>3 months</Button>
      <Button onClick={() => console.log("6 month")}>6 months</Button>
      <Button onClick={() => console.log("1 year")}>1 year</Button>
      <Button onClick={() => console.log("max")}>Max</Button>
      <ButtonLink onClick={() => console.log("max")}>Reset</ButtonLink>
    </TimespanButtonsWrapper>
  );
};

const mapStateToProps = (state) => ({
  dateRange: state.filters.dateRange,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeDateRange,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Timespan);
