import styled from "styled-components";

export const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  color: ${(props) => props.theme.textColor};
`;
