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
  padding: 0 0 0.8rem;
  margin: 0px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const TeamMemberContentWrapper = styled.div`
  margin: 0 1.6rem 2.4rem;
  background: #fff;
  flex-direction: column;
  display: flex;
  max-width: calc(50% - 3.2rem);
  ${media.mediumScreen`
    max-width: calc(33.333333% - 3.2rem);
  `}
`;

export const TeamMemberTextWrapper = styled.div`
  flex-direction: column;
  padding: 1.6rem;
  flex: 1;
`;

export const Test = styled.div`
  overflow-y: hidden;
`;
export const FullBio = styled.div`
  transition: all 0.25s ease-out;
  margin-top: -1000px;
  &.show-text {
    margin-top: 0;
  }
`;

export const ToggleButton = styled.button`
  display: block;
  cursor: pointer;
  transition: all 0.2s;
  border: 0;
  padding: 0;
  background-color: transparent;
  font-size: 1.2rem;
  line-height: 2;
  font-weight: 700;
  transition: all 0.25s;
  display: flex;
  align-items: center;
  padding-bottom: 1.6rem;
  margin-top: -1.6rem;
  margin-left: 1.6rem;
  img {
    width: 20px;
    margin-left: 1.6rem;
  }
  &.hide {
    display: none;
  }
`;
