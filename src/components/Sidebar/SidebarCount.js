import React from "react";
import { connect } from "react-redux";
import { BlockPadded } from "../styled-components/Block";
import {
  SidebarCountParent,
  SidebarCountLabel,
  SidebarCountValue,
} from "../styled-components/SidebarCountStyles";
import { getDiseaseCount } from "../../utils/sidebarDataHelpers";
import { getFutureProjectionCount } from "../../utils/ebolaDataHelpers";

const SidebarCount = ({
  filters,
  ebolaData,
  ebolaDataCombined,
  covidCaseCountData,
  covidDeathCountData,
}) => {
  const diseaseCount = getDiseaseCount(
    ebolaData,
    covidCaseCountData,
    covidDeathCountData,
    filters
  );

  const projectedDiseaseCount = getFutureProjectionCount(
    ebolaData,
    ebolaDataCombined,
    filters
  );
  // If the Covid outbreak is selected, display either "cases" or "deaths" depending which data type is selected.
  // If the Ebola outbreak is selected, just display "cases".
  const dataType = filters.outbreak === "COVID 19" ? filters.dataType : "cases";

  const locationText =
    filters.country === "All" ? "all locations" : filters.country;
  const titleText = filters.dataType.includes("projected")
    ? "Projection"
    : `Reported ${dataType} in ${locationText}`;
  const labelText = filters.dataType.includes("projected")
    ? "Total outbreak projections"
    : "Suspected and confirmed";

  return (
    <BlockPadded>
      <p>
        {titleText} from:
        <br />
        <strong>
          {filters.dateRange.from.toDateString()} {" - "}
          {filters.dateRange.to.toDateString()}
        </strong>
      </p>
      <SidebarCountParent>
        <SidebarCountLabel>{labelText}</SidebarCountLabel>
        <SidebarCountValue>{diseaseCount.toLocaleString()}</SidebarCountValue>
      </SidebarCountParent>
      {filters.dataType.includes("projected") && (
        <SidebarCountParent>
          <SidebarCountLabel>Projected future cases</SidebarCountLabel>
          <SidebarCountValue>
            {projectedDiseaseCount.toLocaleString()}
          </SidebarCountValue>
        </SidebarCountParent>
      )}
    </BlockPadded>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
  ebolaData: state.ebola.ebolaData.data,
  ebolaDataCombined: state.ebola.ebolaDataCombined.data,
  covidCaseCountData: state.covid.caseCounts.data,
  covidDeathCountData: state.covid.deathCounts.data,
});

export default connect(mapStateToProps)(SidebarCount);
