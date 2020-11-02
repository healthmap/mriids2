import React from "react";
import Select from "../Select";
import * as Styled from "./styles";
import {
  SelectCountryWrapper,
  SelectOutbreakWrapper,
} from "../styled-components/SelectWrappers";

const Sidebar = () => {
  return (
    <Styled.SidebarWrapper>
      <SelectCountryWrapper>
        <Select
          name="location"
          type="location"
          options={["All", "Guinea", "Liberia", "Sierra Leone"]}
        />
      </SelectCountryWrapper>
      <SelectOutbreakWrapper>
        <Select
          name="outbreak"
          type="outbreak"
          options={["Ebola Outbreak", "COVID 19"]}
        />
      </SelectOutbreakWrapper>
    </Styled.SidebarWrapper>
  );
};

export default Sidebar;
