import styled from "styled-components";

export const MapLegendWrapperRisk = styled.div`
  position: absolute;
  padding-left: ${(props) => props.theme.sidebarWidth};
  left: 2rem;
  bottom: 3.2rem;
`;

export const MapLegendTitle = styled.h3`
  text-transform: capitalize;
  margin: 0 0 0.8rem;
  font-size: 1.2rem;
`;

export const MapLegendWrapperSnapshot = styled.div`
  position: absolute;
  padding-left: ${(props) => props.theme.sidebarWidth};
  left: 2rem;
  bottom: 3.2rem;
`;

export const MapLegendItemsWrapper = styled.div`
  height: calc(100% - 7rem);
  overflow: auto;
`;
