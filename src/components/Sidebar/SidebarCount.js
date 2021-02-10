import React from "react";
import { BlockPadded } from "../styled-components/Block";
import {
  SidebarCountParent,
  SidebarCountColor,
  SidebarCountLabel,
  SidebarCountValue,
} from "../styled-components/SidebarCountStyles";

const SidebarCount = ({
  filters,
  diseaseCount = 0,
  projectedDiseaseCount = 0,
}) => {
  // If the Covid outbreak is selected, display either "cases" or "deaths" depending which data type is selected.
  // If the Ebola outbreak is selected, just display "cases".
  const dataType = filters.outbreak === "COVID 19" ? filters.dataType : "cases";
  const titleText = filters.projection ? "Projection" : `Reported ${dataType}`;
  const labelText = filters.projection
    ? "Total outbreak projections"
    : "Suspected and confirmed";
  const iconColor = filters.projection ? "#259994" : "#4D73CE";
  return (
    <BlockPadded className="reported-cases-wrapper">
      <p>
        <strong>
          {titleText} from:
          <br />
          {filters.dateRange.from.toDateString()} to{" "}
          {filters.dateRange.to.toDateString()}
        </strong>
      </p>
      <SidebarCountParent>
        <SidebarCountLabel>{labelText}</SidebarCountLabel>
        <SidebarCountColor style={{ backgroundColor: iconColor }} />
        <SidebarCountValue>{diseaseCount}</SidebarCountValue>
      </SidebarCountParent>
      {filters.projection && (
        <SidebarCountParent>
          <SidebarCountLabel>Projected future cases</SidebarCountLabel>
          <SidebarCountColor style={{ backgroundColor: "#F2AD33" }} />
          <SidebarCountValue>{projectedDiseaseCount}</SidebarCountValue>
        </SidebarCountParent>
      )}
    </BlockPadded>
  );
};

export default SidebarCount;
