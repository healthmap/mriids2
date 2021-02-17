import styled from "styled-components";

export const Button = styled.button`
  font-size: 1.4rem;
  line-height: 2;
  padding: 0.9rem 1.2rem;
  width: 100%;
  text-align: left;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.borderColor};
  cursor: pointer;
  user-select: none;
  outline: none;
  &:focus {
    background: #fff;
    border: 1px solid ${(props) => props.theme.secondaryColor};
  }
  &:hover {
    border: 1px solid #fff;
    box-shadow: 0 0 0 4px ${(props) => props.theme.secondaryColorTint};
  }

  &:active {
    background-color: #fff;
    user-select: none;
  }
  &:disabled {
    cursor: auto;
    opacity: 0.65;
  }
`;

export const ButtonIcon = styled.button`
  position: relative;
  padding: 0 0.5em;
  text-decoration: none;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  user-select: none;
  outline: none;
  &:focus,
  &.focus {
    text-decoration: none;
    outline: 0;
  }
  &:active,
  &.is-active {
    background-color: #ececec;
    background-image: none;
    outline: 0;
    user-select: none;
  }
  &:disabled {
    cursor: auto;
    opacity: 0.65;
  }
`;

export const ButtonLink = styled.button`
  position: relative;
  padding: 0.2em 1em;
  color: #000;
  text-decoration: none;
  background-color: #fff;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  user-select: none;
  outline: none;
  &:focus,
  &.focus {
    text-decoration: none;
    outline: 0;
  }
  &:active,
  &.is-active {
    background-color: #ececec;
    background-image: none;
    outline: 0;
    user-select: none;
  }
  &:disabled {
    cursor: auto;
    opacity: 0.65;
  }
`;
