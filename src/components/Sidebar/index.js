import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeCountryFilter } from "../../actions/filters";
import Select from "../Select";
import * as Styled from "./styles";
import {
  SelectCountryWrapper,
  SelectOutbreakWrapper,
} from "../styled-components/SelectWrappers";

const Sidebar = (props) => {
  const changeCountry = (selectedValue) => {
    props.changeCountryFilter(selectedValue.target.value);
  };
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
        />
      </SelectOutbreakWrapper>
    </Styled.SidebarWrapper>
  );
};

const mapStateToProps = (state) => ({ filters: state.filters });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeCountryFilter,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
