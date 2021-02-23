import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  > div:first-of-type {
    background-color: ${(props) => props.theme.backgroundModal} !important;
  }
`;

export const PopupContainer = styled.div`
  width: 38.4rem;
  padding: 4.8rem;
  border-radius: 3px;
  background-color: ${(props) => props.theme.background1};
  box-shadow: 0 0 6px ${(props) => props.theme.backgroundModal};
  display: flex;
  flex-direction: column;
`;

export const PopupTitle = styled.h3`
  padding: 0;
  margin: 0 0 1.6rem;
  font-size: 2.4rem;
  line-height: 1.33333333;
  font-weight: bold;
`;

export const PopupTextSection = styled.div`
  font-size: 1.6rem;
  line-height: 1.5;
  margin: 0 0 1.6rem 0;
`;

export const PopupButtonsContainer = styled.div`
  display: flex;
  margin: 0.8rem 0 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledButton = styled(Button)`
  && {
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 600;
    padding: 1.2rem 2.4rem;
    text-transform: none;
    border-radius: 3px;
    box-shadow: 0 0 0 0;
    background: ${(props) => props.theme.borderLightColor};
    color: ${(props) => props.theme.textColor};
    &.MuiButton-containedPrimary {
      background: ${(props) => props.theme.secondaryColor};
      color: #fff;
      &:focus,
      &:hover {
        background: ${(props) => props.theme.secondaryColorFocus};
      }
    }
    &:focus,
    &:hover {
      box-shadow: 0 0 0 0;
      background: ${(props) => props.theme.background3};
    }
  }
`;
