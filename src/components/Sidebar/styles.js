import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: fixed;
  top: ${({ isProjectionsBannerDisplayed, theme: { headerHeights } }) =>
    isProjectionsBannerDisplayed
      ? headerHeights.withBanner
      : headerHeights.default};
  left: 0;
  bottom: 0;
  border-right: 1px solid ${(props) => props.theme.borderLightColor};
  width: calc(${(props) => props.theme.sidebarWidth} - 3.2rem);
  padding: 0.8rem 1.6rem 2.4rem;
  background-color: ${(props) => props.theme.background2};
  overflow: auto;
  z-index: 2; /* $z-index--sidebar make variable */
`;
