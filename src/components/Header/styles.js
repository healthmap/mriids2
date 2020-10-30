import styled from "styled-components";

export const HeaderNavWrapper = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  li {
    display: flex;
    align-items: center;
    margin: 0;
    a,
    a:visited,
    a:hover,
    a:focus,
    a:active {
      display: inline-block;
      padding: 0 2rem;
      color: #000;
      font-weight: bold;
      text-transform: uppercase;
      text-decoration: none;
    }
    &.is-active {
      background-color: #d4d4d4; /* $light-gray */
    }
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex: none;
  width: 100%;
  height: 4.5rem; /* $header-height */
  box-shadow: 0 10px 12px -8px rgba(0, 0, 0, 0.1); /* $box-shadow--bottom */
  z-index: 3; /* $z-index--header */
  > div {
    display: flex;
  }
`;
