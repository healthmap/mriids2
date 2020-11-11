import styled from "styled-components";

export const ToggleButtonStyled = styled.button`
  min-width: 5rem;
  padding: 0.4rem 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid #000;
  border-top: 0;
  transition: background-color 0.3s ease;
  &:first-child {
    border-bottom-left-radius: 0.3rem;
  }
  &:last-child {
    border-bottom-right-radius: 0.3rem;
  }
  &:hover,
  &:focus {
    background-color: #ececec;
  }
  &.is-active {
    color: #fff;
    background-color: #000;
  }
`;
