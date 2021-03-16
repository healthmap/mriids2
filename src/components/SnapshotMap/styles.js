import styled from "styled-components";
import ReactTooltip from "react-tooltip";

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

export const StyledTooltip = styled(ReactTooltip)`
  && {
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.background1};
    opacity: 0.95 !important;
    border-radius: 3px;
  }
  &:after {
    border-top-color: ${(props) => props.theme.background1} !important;
  }
`;
