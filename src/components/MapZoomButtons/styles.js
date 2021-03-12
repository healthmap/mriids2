import styled from "styled-components";

export const ZoomButtons = styled.div`
  position: absolute;
  right: 10px;
  bottom: 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  background-color: #fff;
  overflow: hidden;
`;

export const ZoomButton = styled.button`
  display: block;
  padding: 0.8em;
  color: #000;
  font-size: 16px;
  line-height: 0.8;
  text-decoration: none;
  text-align: center;
  background-color: #fff;
  border: 0;
  cursor: pointer;
  user-select: none;
  outline: none;
  &:focus {
    text-decoration: none;
    outline: 0;
  }
  &:active {
    background-image: none;
    outline: 0;
    user-select: none;
  }
  &:last-child {
    border-top: 1px solid #ececec;
  }
`;
