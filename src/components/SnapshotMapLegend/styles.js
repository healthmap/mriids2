import styled from "styled-components";

export const MapLegendTitle = styled.h3`
  margin: 0 0 0.8rem;
  font-size: 1.2rem;
`;

export const MapLegendWrapper = styled.div`
  position: absolute;
  padding-left: ${(props) => props.theme.sidebarWidth};
  left: 2rem;
  bottom: 3.2rem;
  max-width: 12rem;
`;

export const MapLegendItemsWrapper = styled.div`
  height: calc(100% - 7rem);
  overflow: auto;
`;
