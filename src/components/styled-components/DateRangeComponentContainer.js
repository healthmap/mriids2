import styled from "styled-components";

export const DateRangeComponentContainer = styled.div`
  padding-left: ${(props) => props.theme.sidebarWidth};
  padding-bottom: 4.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const DateRangeSliderContainer = styled.div`
  width: 80%;
`;

export const SliderDate = styled.p`
  font-size: 1.1rem;
`;
