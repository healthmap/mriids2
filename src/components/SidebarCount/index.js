import React from "react";
import { connect } from "react-redux";
import {
  getEbolaCaseCount,
  getFutureProjectionCount,
} from "../../utils/ebolaDataHelpers";
import { getCovidCount } from "../../utils/covidDataHelpers";
import { BlockPadded } from "../SharedStyledComponents/Block";
import * as Styled from "./styles";

const SidebarCount = ({
  filters,
  ebolaData,
  ebolaDataCombined,
  covidCaseCountData,
  covidDeathCountData,
}) => {
  // Gets the reported case count for either the Ebola or COVID 19 outbreak.
  const reportedCaseCount =
    filters.outbreak === "COVID 19"
      ? getCovidCount(covidCaseCountData, filters)
      : getEbolaCaseCount(ebolaData, filters);

  // Gets the reported death count for the COVID 19 outbreak.
  const reportedDeathCount = getCovidCount(covidDeathCountData, filters);

  // Gets the projected case count for the ebola outbreak.
  const projectedDiseaseCount = getFutureProjectionCount(
    ebolaData,
    ebolaDataCombined,
    filters
  );

  const dataType =
    filters.outbreak === "COVID 19" ? "cases and deaths" : "cases";
  const locationText =
    filters.country === "All" ? "All Locations" : filters.country;
  const titleText =
    filters.dataType === "projected cases"
      ? "Projection in"
      : `Total reported ${dataType} in`;
  const reportedCasesSectionTitle =
    filters.dataType === "projected cases"
      ? "Total outbreak projections"
      : "Reported cases";

  return (
    <BlockPadded>
      <p>
        {titleText} <strong>{locationText}</strong> from{" "}
        <strong>
          {filters.dateRange.from.toDateString()}
          {"–"}
          {filters.dateRange.to.toDateString()}
        </strong>
      </p>
      <Styled.SidebarCountParent>
        <Styled.SidebarCountLabel>
          {reportedCasesSectionTitle}
        </Styled.SidebarCountLabel>
        <Styled.SidebarCountValue>
          {reportedCaseCount.toLocaleString()}
        </Styled.SidebarCountValue>
      </Styled.SidebarCountParent>
      {filters.outbreak === "COVID 19" && (
        <Styled.SidebarCountParent>
          <Styled.SidebarCountLabel>Reported Deaths</Styled.SidebarCountLabel>
          <Styled.SidebarCountValue>
            {reportedDeathCount.toLocaleString()}
          </Styled.SidebarCountValue>
        </Styled.SidebarCountParent>
      )}
      {filters.dataType === "projected cases" && (
        <Styled.SidebarCountParent>
          <Styled.SidebarCountLabel>
            Projected future cases
          </Styled.SidebarCountLabel>
          <Styled.SidebarCountValue>
            {projectedDiseaseCount.toLocaleString()}
          </Styled.SidebarCountValue>
        </Styled.SidebarCountParent>
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
