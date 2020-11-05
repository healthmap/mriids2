import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import * as Styled from "./styles";
import Logo from "../Logo";

const Header = () => {
  return (
    <Styled.HeaderWrapper>
      <Logo />
      <Styled.HeaderNavWrapper>
        <li>
          <NavLink activeClassName="is-active" exact to="/">
            Outbreak
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" exact to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="is-active" exact to="/team">
            Team
          </NavLink>
        </li>
      </Styled.HeaderNavWrapper>
    </Styled.HeaderWrapper>
  );
};

export default Header;
