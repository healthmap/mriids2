import styled from "styled-components";
import { DateRangePicker } from "react-date-range";

export const StyledDateRangePicker = styled(DateRangePicker)`
  .rdrStaticRangeLabel {
    color: ${(props) => props.theme.textColor};
  }
`;
