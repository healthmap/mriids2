import React from "react";
import { connect } from "react-redux";
import Select from "../Select";
import * as Styled from "./styles";
import {
  SelectCountryWrapper,
  SelectOutbreakWrapper,
} from "../styled-components/SelectWrappers";

const Sidebar = (props) => {
  return (
    <Styled.SidebarWrapper>
      <SelectCountryWrapper>
        <Select
          name="location"
          type="location"
          options={["All", "Guinea", "Liberia", "Sierra Leone"]}
          value={props.filters.country}
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

export default connect(mapStateToProps)(Sidebar);
