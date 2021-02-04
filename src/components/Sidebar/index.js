import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  changeCountryFilter,
  changeOutbreakFilter,
} from "../../actions/filters";
import Select from "../Select";
import SidebarCount from "./SidebarCount";
import Summary from "./Summary";
import EbolaRiskList from "./EbolaRiskList";
import * as Styled from "./styles";
import {
  SelectCountryWrapper,
  SelectOutbreakWrapper,
} from "../styled-components/SelectWrappers";
import { getFutureProjectionCount } from "../../utils/ebolaDataHelpers";
import { getDiseaseCount } from "../../utils/sidebarDataHelpers";
import CountrySelect from "../CountrySelect";

const Sidebar = ({
  filters,
  ebolaData,
  ebolaDataCombined,
  covidCaseCountData,
  covidDeathCountData,
  changeCountryFilter,
  changeOutbreakFilter,
}) => {
  const changeOutbreak = (selectedValue) => {
    changeOutbreakFilter(selectedValue.target.value);
    // This resets the country filter to 'All' whenever you switch between outbreaks
    changeCountryFilter("All");
  };

  // This is the disease count for the SidebarCount child component
  const diseaseCount = getDiseaseCount(
    ebolaData,
    covidCaseCountData,
    covidDeathCountData,
    filters
  );

  // This is the projected disease count for the SidebarCount child component
  const projectedDiseaseCount = getFutureProjectionCount(
    ebolaData,
    ebolaDataCombined,
    filters
  );

  const showSidebarCount = filters.view === "snapshot";
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
          optionsCurrent={["COVID 19"]}
          optionsPast={["Ebola Outbreak"]}
          value={filters.outbreak}
          changeFunction={changeOutbreak}
        />
      </SelectOutbreakWrapper>
      {showSidebarCount && (
        <SidebarCount
          filters={filters}
          diseaseCount={diseaseCount.toLocaleString()}
          projectedDiseaseCount={projectedDiseaseCount.toLocaleString()}
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
  covidCaseCountData: state.covid.caseCounts.data,
  covidDeathCountData: state.covid.deathCounts.data,
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
