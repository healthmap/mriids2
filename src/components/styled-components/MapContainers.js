import styled from "styled-components";

export const SnapshotMapContainer = styled.div`
  flex: none;
  position: relative;
  padding-left: ${(props) => props.theme.sidebarWidth};
  height: 50rem; /* $risk-height */
  overflow: hidden;
`;

export const EbolaRiskMapContainer = styled.div`
  flex: none;
  position: relative;
  padding-left: ${(props) => props.theme.sidebarWidth};
  height: calc(100vh - 5.6rem); 
  overflow: hidden;
`;
