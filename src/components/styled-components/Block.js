import styled from "styled-components";

export const BlockPadded = styled.div`
  margin-top: 2rem;
  padding: 1.3rem;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.background2};
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const BlockDropshadow = styled.div`
  display: inline-block;
  padding: 1rem;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  background-color: #fff;
`;
