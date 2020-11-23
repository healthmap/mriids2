import { css } from "styled-components";

export const media = {
  handheld: (...args) => css`
    @media (max-width: 580px) {
      ${css(...args)}
    }
  `,
  smallScreen: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  mediumScreen: (...args) => css`
    @media (min-width: 1024px) {
      ${css(...args)}
    }
  `,
  largeScreen: (...args) => css`
    @media (min-width: 1280px) {
      ${css(...args)}
    }
  `,
};
