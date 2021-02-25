import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 3; /* $z-index--header */
`;

export const HeaderNavWrapper = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  line-height: 2;
  li {
    display: flex;
    a,
    a:visited,
    a:hover,
    a:focus,
    a:active {
      align-items: center;
      display: flex;
      padding: 0 2.4rem;
      margin: 0 1.2rem;
      color: ${(props) => props.theme.textLightColor};
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
      &.is-active {
        background-color: ${(props) => props.theme.borderLightColor};
        color: ${(props) => props.theme.textColor};
      }
    }
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  flex: none;
  width: 100%;
  background: ${(props) => props.theme.background1};
  height: calc(${(props) => props.theme.headerHeight} - 1px);
  border-bottom: 1px solid ${(props) => props.theme.borderLightColor};
  > div {
    display: flex;
  }
`;
