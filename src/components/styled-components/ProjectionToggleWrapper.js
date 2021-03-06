import styled from "styled-components";

export const ProjectionToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 140px;
  margin-left: 1em;
  padding: 0.5rem;
  text-transform: uppercase;
  font-size: 0.9em;
  font-weight: bold;
  background-color: #f0f0f0;
  border-radius: 3px;
  transition: all 0.3s ease;
  &.is-active {
    background-color: #f8ae32;
  }
`;
