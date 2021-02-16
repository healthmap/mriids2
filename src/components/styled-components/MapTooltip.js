import styled from "styled-components";
import ReactTooltip from "react-tooltip";

export const StyledTooltip = styled(ReactTooltip)`
  color: ${(props) => props.theme.textColor} !important;
  background-color: ${(props) => props.theme.background2} !important;
  opacity: 1 !important;
`;
