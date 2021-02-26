import styled from "styled-components";

export const DateRangeComponentContainer = styled.div`
  position: relative;
  padding-left: ${(props) => props.theme.sidebarWidth};
  top: ${({ projectionsBanner }) => (projectionsBanner ? "3.6rem" : 0)};
  padding-bottom: 4.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  .MuiSlider-root {
    color: ${(props) => props.theme.secondaryColor};
  }
`;

export const DateRangeSliderContainer = styled.div`
  position: relative;
  width: 80%;
  height: 2.8rem;
  flex-grow: 1;
`;

export const SliderDate = styled.p`
  font-size: 1.2rem;
  line-height: 2;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
  display: flex;
  flex-shrink: 0;
  margin: 0 3.2rem 0 1.6rem;
  &:first-child {
    margin: 0 1.6rem 0 3.2rem;
  }
`;
