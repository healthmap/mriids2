import styled from "styled-components";

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${(props) => props.theme.sidebarWidth};
  height: 28rem; /* $risk-height */
  overflow: hidden;
`;
