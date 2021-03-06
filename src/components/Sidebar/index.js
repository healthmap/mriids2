import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  changeCountryFilter,
  changeOutbreakFilter,
} from "../../actions/filters";
import Select from "../Select";
import ReportedCases from "./ReportedCases";
import Summary from "./Summary";
import EbolaRiskList from "./EbolaRiskList";
import * as Styled from "./styles";
import {
  SelectCountryWrapper,
  SelectOutbreakWrapper,
} from "../styled-components/SelectWrappers";
import {
  getDiseaseCaseCount,
  getAllFutureProjectedCasesCount,
  getCountryFutureProjectedCasesCount,
} from "../../utils/ebolaDataHelpers";

const Sidebar = ({
  filters,
  ebolaData,
  ebolaDataCombined,
  changeCountryFilter,
  changeOutbreakFilter,
}) => {
  const changeCountry = (selectedValue) => {
    changeCountryFilter(selectedValue.target.value);
  };
  const changeOutbreak = (selectedValue) => {
    changeOutbreakFilter(selectedValue.target.value);
  };
  // This is the ebola case count for the ReportedCases child component
  const diseaseCaseCount = getDiseaseCaseCount(ebolaData, filters);
  // This is the projected ebola case count for the ReportedCases child component
  const projectedCaseCount =
    filters.country === "All"
      ? getAllFutureProjectedCasesCount(ebolaDataCombined, filters.dateRange)
      : getCountryFutureProjectedCasesCount(ebolaData, filters);
  const showReportedCases =
    filters.view === "snapshot" && filters.outbreak === "Ebola Outbreak";
  const showEbolaSummary = filters.outbreak === "Ebola Outbreak";
  const showEbolaRiskList =
    filters.view === "risk" && filters.outbreak === "Ebola Outbreak";

  return (
    <Styled.SidebarWrapper>
      <SelectCountryWrapper>
        <Select
          name="location"
          type="location"
          options={["All", "Guinea", "Liberia", "Sierra Leone"]}
          value={filters.country}
          changeFunction={changeCountry}
        />
      </SelectCountryWrapper>
      <SelectOutbreakWrapper>
        <Select
          name="outbreak"
          type="outbreak"
          options={["Ebola Outbreak"]}
          value={filters.outbreak}
          changeFunction={changeOutbreak}
        />
      </SelectOutbreakWrapper>
      {showReportedCases && (
        <ReportedCases
          projection={filters.projection}
          dateRange={filters.dateRange}
          diseaseCaseCount={diseaseCaseCount}
          projectedCaseCount={projectedCaseCount}
        />
      )}
      {showEbolaSummary && (
        <Summary
          projection={filters.projection}
          dateRange={filters.dateRange}
          country={filters.country}
          diseaseCaseCount={diseaseCaseCount}
        />
      )}
      {showEbolaRiskList && <EbolaRiskList />}
    </Styled.SidebarWrapper>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
  ebolaData: state.ebola.ebolaData.data,
  ebolaDataCombined: state.ebola.ebolaDataCombined.data,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeCountryFilter,
      changeOutbreakFilter,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
