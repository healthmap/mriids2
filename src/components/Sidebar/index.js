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
  getEbolaCaseCount,
  getAllFutureProjectedCasesCount,
  getCountryFutureProjectedCasesCount,
} from "../../utils/ebolaDataHelpers";
import { getCovidCount } from "../../utils/covidDataHelpers";
import CountrySelect from "../CountrySelect";

const Sidebar = ({
  filters,
  ebolaData,
  ebolaDataCombined,
  covidData,
  changeCountryFilter,
  changeOutbreakFilter,
}) => {
  const changeOutbreak = (selectedValue) => {
    changeOutbreakFilter(selectedValue.target.value);
    // This resets the country filter to 'All' whenever you switch between outbreaks
    changeCountryFilter("All");
  };

  // This is the disease count for the ReportedCases child component
  const diseaseCount =
    filters.outbreak === "Ebola Outbreak"
      ? getEbolaCaseCount(ebolaData, filters)
      : getCovidCount(covidData, filters);

  // This is the projected ebola case count for the ReportedCases child component
  const projectedCaseCount =
    filters.country === "All"
      ? getAllFutureProjectedCasesCount(ebolaDataCombined, filters.dateRange)
      : getCountryFutureProjectedCasesCount(ebolaData, filters);

  const showReportedCases = filters.view === "snapshot";
  const showEbolaSummary = filters.outbreak === "Ebola Outbreak";
  const showEbolaRiskList =
    filters.view === "risk" && filters.outbreak === "Ebola Outbreak";

  return (
    <Styled.SidebarWrapper>
      <SelectCountryWrapper>
        <CountrySelect />
      </SelectCountryWrapper>
      <SelectOutbreakWrapper>
        <Select
          name="outbreak"
          type="outbreak"
          options={["Ebola Outbreak", "COVID 19"]}
          value={filters.outbreak}
          changeFunction={changeOutbreak}
        />
      </SelectOutbreakWrapper>
      {showReportedCases && (
        <ReportedCases
          projection={filters.projection}
          dateRange={filters.dateRange}
          diseaseCaseCount={diseaseCount.toLocaleString()}
          projectedCaseCount={projectedCaseCount.toLocaleString()}
        />
      )}
      {showEbolaSummary && (
        <Summary
          projection={filters.projection}
          dateRange={filters.dateRange}
          country={filters.country}
          diseaseCaseCount={diseaseCount.toLocaleString()}
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
  covidData: state.covid.caseCounts.data,
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
