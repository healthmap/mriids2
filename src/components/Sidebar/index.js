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
import { getDiseaseCaseCount } from "../../utils/ebolaDataHelpers";

const Sidebar = ({
  filters,
  ebolaData,
  changeCountryFilter,
  changeOutbreakFilter,
}) => {
  const changeCountry = (selectedValue) => {
    changeCountryFilter(selectedValue.target.value);
  };
  const changeOutbreak = (selectedValue) => {
    changeOutbreakFilter(selectedValue.target.value);
  };
  const diseaseCaseCount = getDiseaseCaseCount(ebolaData, filters);
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
          options={["Ebola Outbreak", "COVID 19"]}
          value={filters.outbreak}
          changeFunction={changeOutbreak}
        />
      </SelectOutbreakWrapper>
      {showReportedCases && (
        <ReportedCases
          projection={filters.projection}
          dateRange={filters.dateRange}
          diseaseCaseCount={diseaseCaseCount}
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
