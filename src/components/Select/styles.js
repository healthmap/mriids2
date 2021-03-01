import styled from "styled-components";
import MuiSelect from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";

export const StyledMuiSelect = styled(MuiSelect)`
  && {
    background-color: #fff;
    font-size: 1.4rem;
    line-height: 2;
    padding: 0 1.2rem;
    display: block;
    border-radius: 3px;
    border: 1px solid ${(props) => props.theme.borderColor};
    &&:hover {
      border: 1px solid #fff;
      box-shadow: 0 0 0 4px ${(props) => props.theme.secondaryColorTint};
    }
    &&.Mui-focused {
      border: 1px solid ${(props) => props.theme.secondaryColor};
    }
    &&:hover:before,
    &:before {
      border: 0px;
    }
    .MuiSelect-select:focus {
      background-color: transparent;
    }
  }
`;
export const StyledListSubheader = styled(ListSubheader)`
  && {
    margin: 1.6rem 0 0;
    font-size: 1.2rem;
    line-height: 2;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    font-weight: 700;
    color: ${(props) => props.theme.textLightColor};
    &:first-child {
      margin: 0.8rem 0 0;
    }
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  && {
    font-size: 1.4rem;
    line-height: 2;
    padding: 0.2rem 1.6rem;
    color: ${(props) => props.theme.textColor};
    &:hover {
      background: ${(props) => props.theme.background3};
    }
    &.Mui-selected {
      background: #fff;
      color: ${(props) => props.theme.secondaryColor};
      font-weight: 600;
      &:hover {
        background: ${(props) => props.theme.background3};
      }
    }
  }
`;
