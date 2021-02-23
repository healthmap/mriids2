import styled from "styled-components";

export const DateRangeComponentContainer = styled.div`
  padding-left: ${(props) => props.theme.sidebarWidth};
  padding-bottom: 4.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  .MuiSlider-root {
    color: ${(props) => props.theme.secondaryColor};
  }
`;

export const DateRangeSliderContainer = styled.div`
  width: 80%;
  display: flex;
`;

export const SliderDate = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.textColor};
  margin: 0;
`;
