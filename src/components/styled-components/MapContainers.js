import styled from "styled-components";

export const EbolaRiskMapContainer = styled.div`
  flex: none;
  position: relative;
  top: ${(props) => props.theme.headerHeights.default};
  padding-left: ${(props) => props.theme.sidebarWidth};
  height: calc(100vh - 5.6rem);
  overflow: hidden;
`;
