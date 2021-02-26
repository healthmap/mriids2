import styled from "styled-components";

export const ChartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: ${({ projectionsBanner, theme: { bannerHeight } }) =>
    projectionsBanner ? bannerHeight : 0};
  padding-left: ${(props) => props.theme.sidebarWidth};
  height: calc((100vh / 2) - 7.6rem);
  min-height: 32rem;
`;

export const ChartTitle = styled.h2`
  position: relative;
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.2;
  margin-top: 3.2rem;
`;
