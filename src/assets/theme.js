import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans",
  },
  overrides: {
    MuiSelect: {
      select: {
        padding: ".9rem 0",
      },
      icon: {
        right: ".9rem",
        top: "calc(50% - 10px)",
        fontSize: "20px",
      },
    },
    MuiMenu: {
      paper: {
        borderRadius: "3px",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
      },
    },
    MuiAutocomplete: {
      paper: {
        fontSize: "1.4rem",
        lineHeight: "2",
        borderRadius: "3px",
      },
      option: {
        padding: ".2rem 1.2rem !important",
      },
    },
    MuiInput: {
      underline: {
        "&&&&:after": {
          borderBottom: "0px",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: "3px",
      },
    },
  },
});

export default theme;
