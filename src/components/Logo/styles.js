import Styled from "styled-components";

export const Logo = Styled.span`
  display: flex;
  width: ${(props) => props.theme.sidebarWidth};
  justify-content: center;
  align-items: center;
  img {
    width: auto;
    height: 2.4rem;
  }`;
