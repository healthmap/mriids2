import styled from "styled-components";

export const SnapshotMapContainer = styled.div`
  flex: none;
  position: relative;
  top: ${({ isProjectionsBannerDisplayed, theme: { bannerHeight } }) =>
    isProjectionsBannerDisplayed ? bannerHeight : 0};
  padding-left: ${(props) => props.theme.sidebarWidth};
  height: calc(100vh / 2);
  min-height: 40rem;
  overflow: hidden;
`;

export const EbolaRiskMapContainer = styled.div`
  flex: none;
  position: relative;
  top: ${(props) => props.theme.headerHeights.default};
  padding-left: ${(props) => props.theme.sidebarWidth};
  height: calc(100vh - 5.6rem);
  overflow: hidden;
`;
