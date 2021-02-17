import React, { useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import dayjs from "dayjs";
import {
  changeCountryFilter,
  changeOutbreakFilter,
  changeDataType,
} from "../../actions/filters";
import {
  openDateRangePopover,
  setPopoverAnchorElement,
} from "../../actions/ui";
import Select from "../Select";
import SidebarCount from "./SidebarCount";
import Summary from "./Summary";
import EbolaRiskList from "./EbolaRiskList";
import * as Styled from "./styles";
import {
  SelectCountryWrapper,
  SelectOutbreakWrapper,
} from "../styled-components/SelectWrappers";
import { Button } from "../styled-components/Button";
import { InputLabel } from "../styled-components/InputLabel";
import { getFutureProjectionCount } from "../../utils/ebolaDataHelpers";
import { getDiseaseCount } from "../../utils/sidebarDataHelpers";
import CountrySelect from "../CountrySelect";
import DataRadioButtons from "../DataRadioButtons";

const Sidebar = ({
  filters,
  ebolaData,
  ebolaDataCombined,
  covidCaseCountData,
  covidDeathCountData,
  changeCountryFilter,
  changeOutbreakFilter,
  openDateRangePopover,
  setPopoverAnchorElement,
  changeDataType,
}) => {
  // This is used to set a ref for the parent div that houses the button to open the date range popover.
  // We need this ref to tell the DateRangePopover to use this element as it's anchor.
  const popoverButtonDivRef = useRef();

  const changeOutbreak = (selectedValue) => {
    changeOutbreakFilter(selectedValue.target.value);
    // This resets the country filter to 'All' whenever you switch between outbreaks
    changeCountryFilter("All");
    // Reset the data type to "cases"
    changeDataType("cases");
  };

  const handleDateRangePopoverOpen = () => {
    // Set the anchor element for the date range popover.
    setPopoverAnchorElement(popoverButtonDivRef.current);
    // Open the date range popover.
    openDateRangePopover();
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
      <InputLabel>Timespan</InputLabel>
      <div ref={popoverButtonDivRef}>
        <Button onClick={() => handleDateRangePopoverOpen()}>
          {dayjs(filters.dateRange.from).format("MMM D, YYYY")} -{" "}
          {dayjs(filters.dateRange.to).format("MMM D, YYYY")}
        </Button>
      </div>
      <DataRadioButtons />
      {showSidebarCount && (
        <SidebarCount
          filters={filters}
          diseaseCount={diseaseCount.toLocaleString()}
          projectedDiseaseCount={projectedDiseaseCount.toLocaleString()}
        />
      )}
      {showEbolaSummary && (
        <Summary
          dataType={filters.dataType}
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
      openDateRangePopover,
      setPopoverAnchorElement,
      changeDataType,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
