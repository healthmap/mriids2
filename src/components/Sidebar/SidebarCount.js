import React from "react";
import { BlockPadded } from "../styled-components/Block";
import {
  SidebarCountParent,
  SidebarCountColor,
  SidebarCountLabel,
  SidebarCountValue,
} from "../styled-components/SidebarCountStyles";

const SidebarCount = ({
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
      <SidebarCountParent>
        <SidebarCountLabel>{labelText}</SidebarCountLabel>
        <SidebarCountColor style={{ backgroundColor: iconColor }} />
        <SidebarCountValue>{diseaseCaseCount}</SidebarCountValue>
      </SidebarCountParent>
      {projection && (
        <SidebarCountParent>
          <SidebarCountLabel>Projected future cases</SidebarCountLabel>
          <SidebarCountColor style={{ backgroundColor: "#F2AD33" }} />
          <SidebarCountValue>{projectedCaseCount}</SidebarCountValue>
        </SidebarCountParent>
      )}
    </BlockPadded>
  );
};

export default SidebarCount;
