import styled from "styled-components";
import Autocomplete from "@material-ui/lab/Autocomplete";

export const StyledAutocomplete = styled(Autocomplete)`
  .MuiInputBase-root {
    background-color: #fff;
    font-size: 1.4rem;
    padding: 1.2rem !important;
  }
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: #fff;
    box-shadow: 0 0 0 4px ${(props) => props.theme.secondaryColorTint};
  }
  .Mui-focused .MuiOutlinedInput-notchedOutline {
    border: 1px solid ${(props) => props.theme.secondaryColor} !important;
    box-shadow: 0 0 0 0;
  }
  .MuiAutocomplete-input {
    padding: 0px !important;
    height: 2.4rem;
  }
  .MuiSvgIcon-root {
    font-size: 2rem;
  }
  .MuiAutocomplete-endAdornment {
    top: calc(50% - 12px);
  }
`;
