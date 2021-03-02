import styled from "styled-components";

export const BlockPadded = styled.div`
  padding: 1.2rem 1.2rem 3.2rem;
  font-size: 1.6rem;
  line-height: 1.5;
  border-radius: 3px;
  background-color: ${(props) => props.theme.background1};
  border: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 3.2rem;
  p {
    margin: 0;
  }
  ol {
    font-size: 1.4rem;
    line-height: 1.42857142;
    margin: 1.6rem 0 0 0;
    padding: 0;
    list-style-position: inside;
    li {
      margin: 0 0 0.4rem 0;
    }
  }
`;

export const BlockDropshadow = styled.div`
  display: inline-block;
  padding: 1.2rem;
  border-radius: 3px;
  background-color: #fff;
`;
