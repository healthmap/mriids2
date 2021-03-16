import styled from "styled-components";

export const LevelWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LevelColor = styled.div`
  flex: none;
  width: 2rem;
  height: 2rem;
  margin-right: 0.5em;
`;

export const LevelValue = styled.div`
  flex: 1;
  line-height: 1;
  color: ${(props) => props.theme.textLightColor};
  font-size: 1rem;
`;
