import styled from "styled-components";

export const MapLegendWrapperRisk = styled.div`
  position: absolute;
  width: 9rem;
  left: 2rem;
  bottom: 7rem;
  > div {
    width: 100%;
    height: 100%;
  }
`;

export const MapLegendWrapperSnapshot = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  bottom: 7rem;
  width: 9rem;
  overflow: hidden;
  > div {
    width: 100%;
    height: 100%;
  }
`;

export const MapLegendItemsWrapper = styled.div`
  height: calc(100% - 7rem);
  overflow: auto;
`;
