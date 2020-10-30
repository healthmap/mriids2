import React from "react";
import Select from "../Select";
import * as Styled from "./styles";
import { SelectSearchWrapper } from "../styled-components/SelectWrappers";

const Sidebar = () => {
  return (
    <Styled.SidebarWrapper>
      <SelectSearchWrapper>
        <Select
          name="location"
          type="location"
          options={["All", "Guinea", "Liberia", "Sierra Leone"]}
        />
      </SelectSearchWrapper>
    </Styled.SidebarWrapper>
  );
};

export default Sidebar;
