import styled from "styled-components";

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: ${(props) => props.theme.sidebarWidth};
  height: 28rem; /* $risk-height */
`;

export const ChartTitle = styled.h2`
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.2;
  margin-top: 3.2rem;
`;
