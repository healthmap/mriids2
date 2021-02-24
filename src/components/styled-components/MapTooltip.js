import styled from "styled-components";
import ReactTooltip from "react-tooltip";

export const StyledTooltip = styled(ReactTooltip)`
  && {
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.background1};
    opacity: 0.95 !important;
    border-radius: 3px;
  }
  &:after {
    border-top-color: ${(props) => props.theme.background1} !important;
  }
`;
