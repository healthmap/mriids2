import styled from "styled-components";
import FormLabel from "@material-ui/core/FormLabel";

export const DataRadioButtonsContainer = styled.div`
  display: block;
  margin-top: 2rem;
`;

export const StyledFormLabel = styled(FormLabel)`
  && {
    margin: 0 1.2rem 0;
    font-size: 1.2rem;
    line-height: 2;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    display: block;
    font-weight: 700;
    color: ${(props) => props.theme.textColor};
  }
`;
