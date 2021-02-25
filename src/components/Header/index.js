import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import ProjectionBanner from "../ProjectionsBanner";
import { HeaderContainer, HeaderNavWrapper, HeaderWrapper } from "./styles";

const Header = () => (
  <HeaderContainer>
    <ProjectionBanner />
    <HeaderWrapper>
      <Logo />
      <HeaderNavWrapper>
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
      </HeaderNavWrapper>
    </HeaderWrapper>
  </HeaderContainer>
);

export default Header;
