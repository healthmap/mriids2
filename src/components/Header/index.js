import React from "react";
import * as Styled from "./styles";
import Logo from "../Logo";

const Header = () => {
  return (
    <Styled.HeaderWrapper>
      <Logo />
      <Styled.HeaderNavWrapper>
        <li className="is-active">
          <a href="">Outbreak</a>
        </li>
        <li>
          <a
            href="https://github.com/ISIDOrg/MRIIDS/wiki/Mapping-the-Risk-of-International-Infectious-Disease-Spread"
            rel="noopener noreferrer"
            target="_blank"
          >
            About
          </a>
        </li>
      </Styled.HeaderNavWrapper>
    </Styled.HeaderWrapper>
  );
};

export default Header;
