import styled from "styled-components";

export const IconNavWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 1em;
  & + ul {
    border-left: 1px solid #ccc;
  }
  li {
    display: flex;
    align-items: center;
    margin: 0 0.25em;
    padding: 0.5em;
    border-radius: 50%;
    &:hover {
      background-color: #ececec;
    }
  }
`;
