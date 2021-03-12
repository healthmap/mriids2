import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import ProjectionBanner from "../ProjectionsBanner";
import * as Styled from "./styles";

const Header = ({ hasConfirmedProjectionsPopup }) => (
  <Styled.HeaderContainer>
    {hasConfirmedProjectionsPopup && <ProjectionBanner />}
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
  </Styled.HeaderContainer>
);

const mapStateToProps = (state) => ({
  hasConfirmedProjectionsPopup: state.ui.hasConfirmedProjectionsPopup,
});

export default connect(mapStateToProps)(Header);
