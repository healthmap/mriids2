import styled from "styled-components";
import ReactTooltip from "react-tooltip";

export const StyledTooltip = styled(ReactTooltip)`
  && {
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.background2};
    opacity: 0.98 !important;
    border-radius: 3px;
  }
  &:after {
    border-top-color: ${(props) => props.theme.background2} !important;
  }
`;
