import styled from "styled-components";

export const MapPopupContainer = styled.div`
  width: 20rem;
`;

export const MapPopupTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-weight: 700;
  font-size: 1.4rem;
  margin-top: 0.8rem;
  line-height: 1.4285714;
`;

export const MapPopupCountSection = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin: 1.6rem 0;
    font-size: 1.4rem;
    line-height: 1.4285714;
  }
`;

export const MapPopupSummary = styled.p`
  margin: 0 0 0.8rem;
  font-size: 1.2rem;
  line-height: 1.66666666;
  color: ${(props) => props.theme.textLightColor};
`;

export const Label = styled.p`
  text-transform: uppercase;
  color: ${(props) => props.theme.textLightColor};
  font-weight: 700;
  letter-spacing: 0.05rem;
  font-size: 1.2rem !important;
  line-height: 2;
`;
