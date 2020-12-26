import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto",
    h1: {
      fontSize: 42,
      fontWeight: 400,
      letterSpacing: -1.2,
    },
    h2: { fontSize: 30, fontWeight: 400, letterSpacing: -0.6 },
    h3: {
      fontSize: 22,
      fontWeight: 400,
      letterSpacing: -0.4,
    },
    h4: {
      fontSize: 18,
      fontWeight: 500,
    },
    subtitle1: {
      lineHeight: 1.3,
      fontSize: 20,
      fontWeight: 700,
      textTransform: "uppercase",
      color: "rgb(0, 0, 0, 0.43)",
    },
    body1: {
      fontSize: 15,
      color: "#767676",
    },
    body2: {
      fontSize: 14,
      color: "#767676",
    },
    caption: {
      fontSize: 12,
      color: "#767676",
    },
  },
  palette: {
    text: {
      primary: "#141414",
      secondary: "#767676",
    },
    background: {},
    primary: {
      main: "#204394",
      contrastText: "#fff",
    },
    secondary: {
      main: "#56CAF4",
      contrastText: "#fff",
    },
    error: {
      main: "#ff0000",
    },
  },
});

export default theme;
