import styled from "styled-components";

export const CovidProjectionsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: ${(props) => props.theme.sidebarWidth};
  height: calc(100vh - 7.6rem);
`;

export const ChartContainer = styled.div`
  height: calc((100vh / 2) - 7.6rem);
  min-height: 32rem;
  width: 100%;
`;

export const ChartTitle = styled.h2`
  position: relative;
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.2;
  margin-top: 3.2rem;
`;
