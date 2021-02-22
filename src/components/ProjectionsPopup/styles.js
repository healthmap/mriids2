import styled from "styled-components";
import Modal from "@material-ui/core/Modal";

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PopupContainer = styled.div`
  height: 40rem;
  width: 50rem;
  background-color: ${(props) => props.theme.background2};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const PopupTitle = styled.span`
  padding: 2rem 4rem;
  font-size: 2.5rem;
  font-weight: bold;
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
