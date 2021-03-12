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
import SidebarCount from "../SidebarCount";
import EbolaRiskList from "../EbolaRiskList";
import { StyledInputLabel } from "../SharedStyledComponents/StyledInputLabel";
import CountrySelect from "../CountrySelect";
import DataRadioButtons from "../DataRadioButtons";
import * as Styled from "./styles";

const Sidebar = ({
  filters,
  changeCountryFilter,
  changeOutbreakFilter,
  openDateRangePopover,
  setPopoverAnchorElement,
  hasConfirmedProjectionsPopup,
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

  const showSidebarCount = filters.dataType !== "risk";
  const showEbolaRiskList =
    filters.dataType === "risk" && filters.outbreak === "Ebola Outbreak";

  return (
    <Styled.SidebarWrapper
      isProjectionsBannerDisplayed={hasConfirmedProjectionsPopup}
    >
      <Styled.SelectCountryWrapper>
        <CountrySelect />
      </Styled.SelectCountryWrapper>
      <Styled.SelectOutbreakWrapper>
        <Select
          name="outbreak"
          type="outbreak"
          optionsCurrent={["COVID 19"]}
          optionsPast={["Ebola Outbreak"]}
          value={filters.outbreak}
          changeFunction={changeOutbreak}
        />
      </Styled.SelectOutbreakWrapper>
      <StyledInputLabel>Timespan</StyledInputLabel>
      <div data-test-id="open-date-range-button" ref={popoverButtonDivRef}>
        <Styled.Button onClick={() => handleDateRangePopoverOpen()}>
          {dayjs(filters.dateRange.from).format("MMM D, YYYY")} -{" "}
          {dayjs(filters.dateRange.to).format("MMM D, YYYY")}
        </Styled.Button>
      </div>
      <DataRadioButtons />
      {showSidebarCount && <SidebarCount />}
      {showEbolaRiskList && <EbolaRiskList />}
    </Styled.SidebarWrapper>
  );
};

const mapStateToProps = (state) => ({
  filters: state.filters,
  hasConfirmedProjectionsPopup: state.ui.hasConfirmedProjectionsPopup,
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
