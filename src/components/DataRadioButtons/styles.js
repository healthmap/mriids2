import styled from "styled-components";

export const PopupContainer = styled.div`
  height: 40rem;
  width: 45rem;
  background-color: ${(props) => props.theme.background2};
`;

export const PopupButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
