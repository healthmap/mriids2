import styled from "styled-components";
import { media } from "../../assets/style-utils";

export const PageWrapper = styled.div`
  margin-top: ${(props) => props.theme.headerHeight};
`;

export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 6.4rem auto;
  padding: 0 3.2rem;
`;

export const SectionWrapperLight = styled.div`
  background: ${(props) => props.theme.background3};
  overflow: auto;
`;

export const Title = styled.h2`
  font-size: 4.8rem;
  font-weight: 700;
  margin: 0 0 3.2rem;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 3.2rem;
  line-height: 1.5;
  font-weight: 700;
  margin: 0 auto 3.2rem;
  ${media.mediumScreen`
    max-width: calc(8 / 12 * 100%);
  `}
  &:after {
    content: "";
    display: block;
    width: 10rem;
    padding-top: 0.4rem;
    border-bottom: 0.4rem solid ${(props) => props.theme.primaryColor};
  }
`;

export const BodyLarge = styled.p`
  font-size: 1.8rem;
  line-height: 1.7777777;
  margin: 0 auto;
  ${media.smallScreen`
  font-size: 2.4rem;
  line-height: 1.6666666666666666;
  `}
  ${media.mediumScreen`
    max-width: calc(8 / 12 * 100%);
  `}
`;

export const Body = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.75;
  margin: 2.4rem auto;
  ${media.mediumScreen`
    max-width: calc(8 / 12 * 100%);
  `}
`;
export const ExternalLink = styled.a`
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  display: flex;
  margin-bottom: -2.4rem;
  img {
    margin-left: 0.8rem;
  }
`;
