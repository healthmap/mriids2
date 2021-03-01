import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import ProjectionBanner from "../ProjectionsBanner";
import { HeaderContainer, HeaderNavWrapper, HeaderWrapper } from "./styles";

const Header = ({ hasConfirmedProjectionsPopup }) => (
  <HeaderContainer>
    {hasConfirmedProjectionsPopup && <ProjectionBanner />}
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

const mapStateToProps = (state) => ({
  hasConfirmedProjectionsPopup: state.ui.hasConfirmedProjectionsPopup,
});

export default connect(mapStateToProps)(Header);
