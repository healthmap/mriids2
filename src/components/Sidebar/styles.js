import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.theme.headerHeight};
  left: 0;
  bottom: 0;
  width: calc(${(props) => props.theme.sidebarWidth} - 3.2rem);
  padding: .8rem 1.6rem 2.4rem;
  background-color: ${(props) => props.theme.lightestGray};
  overflow: auto;
  z-index: 2; /* $z-index--sidebar make variable */
`;

