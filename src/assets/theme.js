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
        right: "1.2rem",
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
  },
});

export default theme;
