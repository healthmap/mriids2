import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: fixed;
  top: ${(props) => props.theme.headerHeight};
  left: 0;
  bottom: 0;
border-right: 1px solid ${(props) => props.theme.lightGray3};
  width: calc(${(props) => props.theme.sidebarWidth} - 3.2rem);
  padding: 2.4rem 1.6rem;
  background-color: ${(props) => props.theme.lightestGray};
  overflow: auto;
  z-index: 2; /* $z-index--sidebar make variable */
`;
