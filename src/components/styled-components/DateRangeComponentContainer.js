import styled from "styled-components";

export const DateRangeComponentContainer = styled.div`
  padding-left: ${(props) => props.theme.sidebarWidth};
  padding-bottom: 4.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DateRangeSliderContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
