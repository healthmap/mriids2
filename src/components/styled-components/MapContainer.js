import styled from "styled-components";

export const MapContainer = styled.div`
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
  height: 85rem; /* $risk-height */
  overflow: hidden;
`;
