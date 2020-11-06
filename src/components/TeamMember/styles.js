import styled from "styled-components";
import { media } from "../../assets/style-utils";

export const Title = styled.h2`
  font-size: 2rem;
  margin: 1.6rem 0 0.4rem;
  font-weight: 600;
`;

export const SubTitle = styled.p`
  font-weight: 600;
  font-size: 1.6rem;
  color: #666;
  margin: 0 0 1.6rem;
  line-height: 1.5;
`;

export const Body = styled.p`
  font-size: 1.6rem;
  line-height: 1.75;
  margin: 0 0 1.6rem;
`;

export const Image = styled.img`
  width: 100%;
`;

export const TeamMemberContentWrapper = styled.div`
  padding: 0 1.6rem 2.4rem;
  flex-direction: column;
  max-width: calc(50% - 3.2rem);
  ${media.mediumScreen`
    max-width: calc(33.333333% - 3.2rem);
  `}
`;

export const TeamMemberTextWrapper = styled.div`
  flex-direction: column;
  background: #fff;
  padding: 1.6rem;
`;
