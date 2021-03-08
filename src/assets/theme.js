import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans",
  },
  overrides: {
    MuiSlider: {
      valueLabel: {
        backgroundColor: "#DBE3F5",
        width: "8rem",
        fontSize: "1.2rem",
        lineHeight: "1.5",
        padding: ".2rem",
        top: "-2.4rem",
        left: "calc(-50% - 31.5px)",
        borderRadius: "3px",
        "& *": {
          background: "transparent",
          color: "#222325",
          width: "auto",
          height: "auto",
        },
      },
    },
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
        color: "#222325",
        "&:hover": {
          background: "#F4F7FC",
        },
        "&[aria-selected='true']": {
          color: "#4D73CE",
          backgroundColor: "#fff",
          fontWeight: "600",
        },
        "&[data-focus='true']": {
          background: "#F4F7FC",
        },
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
