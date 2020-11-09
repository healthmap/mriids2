import styled from "styled-components";

export const MapContainer = styled.div`
  flex: none;
  padding-left: ${(props) => props.theme.sidebarWidth};
  height: 50rem; /* $risk-height */
  overflow: hidden;
`;
