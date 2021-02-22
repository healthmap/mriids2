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
`;

export const BlockDropshadow = styled.div`
  display: inline-block;
  padding: 1rem;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  background-color: #fff;
`;
