import React from "react";
import { NavLink } from "react-router-dom";
import * as Styled from "./styles";

const Logo = () => {
  return (
    <Styled.Logo>
      <NavLink exact to="/">
        <img src="/mriids.svg" alt="mriids" />
      </NavLink>
    </Styled.Logo>
  );
};

export default Logo;
