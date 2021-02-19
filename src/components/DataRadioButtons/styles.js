import styled from "styled-components";

export const PopupContainer = styled.div`
  height: 40rem;
  width: 45rem;
  background-color: ${(props) => props.theme.background2};
  display: flex;
  flex-direction: column;
`;

export const PopupTitle = styled.h1`
  padding-top: 1.5rem;
  text-align: center;
`;

export const PopupTextSection = styled.div`
  padding: 1rem 4rem;
  font-size: 1.4rem;
`;

export const PopupButtonsContainer = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
