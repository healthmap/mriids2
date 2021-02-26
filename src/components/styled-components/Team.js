import styled from "styled-components";
import { media } from "../../assets/style-utils";
export const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 6.4rem auto;
  padding: 0 3.2rem;
`;

export const FirstPageContainer = styled.div`
  margin-top: ${(props) => props.theme.headerHeights.default};
`;

export const SecondPageContainer = styled.div`
  background: ${(props) => props.theme.background3};
`;

export const TeamMemberWrapper = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  margin: 0 -1.6rem;
`;

export const Title = styled.h2`
  font-size: 4.8rem;
  font-weight: 700;
  text-align: center;
  margin: 0 auto 3.2rem;
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
