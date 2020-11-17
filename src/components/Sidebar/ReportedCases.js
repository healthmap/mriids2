import React from "react";
import { BlockPadded } from "../styled-components/Block";
import {
  ReportedCasesParent,
  ReportedCasesColor,
  ReportedCasesLabel,
  ReportedCasesValue,
} from "../styled-components/ReportedCasesStyles";

const ReportedCases = ({
  dateRange,
  diseaseCaseCount = 0,
  projectedCaseCount = 0,
  projection = false,
}) => {
  const titleText = projection ? "Projection" : "Reported Cases";
  const labelText = projection
    ? "Total outbreak projections"
    : "Suspected and confirmed";
  const iconColor = projection ? "#259994" : "#4D73CE";
  return (
    <BlockPadded className="reported-cases-wrapper">
      <p>
        <strong>
          {titleText} from:
          <br />
          {dateRange.from.toDateString()} to {dateRange.to.toDateString()}
        </strong>
      </p>
      <ReportedCasesParent>
        <ReportedCasesLabel>{labelText}</ReportedCasesLabel>
        <ReportedCasesColor style={{ backgroundColor: iconColor }} />
        <ReportedCasesValue>{diseaseCaseCount}</ReportedCasesValue>
      </ReportedCasesParent>
      {projection && (
        <ReportedCasesParent>
          <ReportedCasesLabel>Projected future cases</ReportedCasesLabel>
          <ReportedCasesColor style={{ backgroundColor: "#F2AD33" }} />
          <ReportedCasesValue>{projectedCaseCount}</ReportedCasesValue>
        </ReportedCasesParent>
      )}
    </BlockPadded>
  );
};

export default ReportedCases;
