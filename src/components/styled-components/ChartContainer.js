import styled from "styled-components";

export const ChartContainer = styled.div`
  flex: none;
  padding-left: ${(props) => props.theme.sidebarWidth}; 
  height: 28rem; /* $risk-height */
  overflow: hidden;
`;
