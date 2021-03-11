import styled from "styled-components";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Tooltip from "@material-ui/core/Tooltip";

export const DataRadioButtonsContainer = styled.div`
  display: block;
  padding-bottom: 2rem;
  border-bottom: 1px solid #ccc;
`;

export const FormLabelIconWrapper = styled.div`
  display: flex;
  align-items: center;
  label {
    margin-right: 0.8rem;
  }
  .svg-icon path {
    fill: ${(props) => props.theme.textLightColor};
  }
`;

export const StyledTooltip = styled((props) => (
  <Tooltip
    classes={{ popper: props.className, tooltip: "tooltip" }}
    {...props}
  />
))`
  & .tooltip {
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.background1};
    font-size: 1.2rem;
    line-height: 1.66666666;
    padding: 1.6rem;
    margin: 0.8rem 0;
    border-radius: 3px;
    box-shadow: 1px 1px 6px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const StyledRadioGroup = styled(RadioGroup)`
  margin-left: 1.2rem;
`;

export const StyledRadio = styled(Radio)`
  .MuiSvgIcon-root {
    width: 2rem;
    height: 2rem;
    color: ${(props) => props.theme.secondaryColor};
  }
  &.MuiIconButton-colorSecondary:hover,
  &.MuiRadio-colorSecondary.Mui-checked:hover {
    background-color: ${(props) => props.theme.secondaryColorTint};
  }
  &.MuiRadio-colorSecondary.Mui-checked {
    color: ${(props) => props.theme.secondaryColorTint};
  }
  &.MuiRadio-root {
    color: ${(props) => props.theme.secondaryColorTintDark};
  }
  && {
    padding: 6px;
  }
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
  .MuiTypography-body1 {
    font-size: 1.4rem;
    line-height: 2;
    font-weight: 600;
    margin-left: 0.2rem;
  }
`;
