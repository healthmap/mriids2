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

export const Button = styled.button`
  font-size: 1.4rem;
  line-height: 2;
  padding: 0.9rem 1.2rem;
  width: 100%;
  text-align: left;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.borderColor};
  cursor: pointer;
  user-select: none;
  outline: none;
  &:focus {
    background: #fff;
    border: 1px solid ${(props) => props.theme.secondaryColor};
  }
  &:hover {
    border: 1px solid #fff;
    box-shadow: 0 0 0 4px ${(props) => props.theme.secondaryColorTint};
  }

  &:active {
    background-color: #fff;
    user-select: none;
  }
  &:disabled {
    cursor: auto;
    opacity: 0.65;
  }
`;
