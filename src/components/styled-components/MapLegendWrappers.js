import styled from "styled-components";

export const MapLegendWrapperRisk = styled.div`
  position: absolute;
  padding-left: ${(props) => props.theme.sidebarWidth};
  width: 9rem;
  left: 2rem;
  bottom: 3.2rem;
  > div {
    width: 100%;
  }
`;

export const MapLegendWrapperSnapshot = styled.div`
  position: absolute;
  padding-left: ${(props) => props.theme.sidebarWidth};
  left: 2rem;
  bottom: 3.2rem;
  width: 9rem;
  > div {
    width: 100%;
  }
`;

export const MapLegendItemsWrapper = styled.div`
  height: calc(100% - 7rem);
  overflow: auto;
`;
