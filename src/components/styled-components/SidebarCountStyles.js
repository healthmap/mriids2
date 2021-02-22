import styled from "styled-components";

export const SidebarCountParent = styled.div`
`;

export const SidebarCountLabel = styled.div`
  margin: 1.6rem 0 0.25rem;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 2;
  letter-spacing: 0.05rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.textLightColor};
`;

export const SidebarCountValue = styled.div`
  display: inline-block;
  font-size: 2.4em;
  font-weight: 700;
  line-height: 1;
`;
