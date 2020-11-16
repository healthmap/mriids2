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

const Sidebar = (props) => {
  const changeCountry = (selectedValue) => {
    props.changeCountryFilter(selectedValue.target.value);
  };
  const changeOutbreak = (selectedValue) => {
    props.changeOutbreakFilter(selectedValue.target.value);
  };
  const diseaseCaseCount = getDiseaseCaseCount(
    props.ebola.ebolaData.data,
    props.filters
  );
  const showReportedCases =
    props.filters.view === "snapshot" &&
    props.filters.outbreak === "Ebola Outbreak";
  const showEbolaSummary = props.filters.outbreak === "Ebola Outbreak";
  const showEbolaRiskList =
    props.filters.view === "risk" &&
    props.filters.outbreak === "Ebola Outbreak";

  return (
    <Styled.SidebarWrapper>
      <SelectCountryWrapper>
        <Select
          name="location"
          type="location"
          options={["All", "Guinea", "Liberia", "Sierra Leone"]}
          value={props.filters.country}
          changeFunction={changeCountry}
        />
      </SelectCountryWrapper>
      <SelectOutbreakWrapper>
        <Select
          name="outbreak"
          type="outbreak"
          options={["Ebola Outbreak", "COVID 19"]}
          value={props.filters.outbreak}
          changeFunction={changeOutbreak}
        />
      </SelectOutbreakWrapper>
      {showReportedCases && (
        <ReportedCases
          projection={props.filters.projection}
          dateRange={props.filters.dateRange}
          diseaseCaseCount={diseaseCaseCount}
        />
      )}
      {showEbolaSummary && (
        <Summary
          projection={props.filters.projection}
          dateRange={props.filters.dateRange}
          country={props.filters.country}
          diseaseCaseCount={diseaseCaseCount}
        />
      )}
      {showEbolaRiskList && <EbolaRiskList />}
    </Styled.SidebarWrapper>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
  ebola: state.ebola,
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
