import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
  palette: {
    primary: {
      main: "#1B3765",
      contrastText: "#fff",
    },
    secondary: {
      main: "#00B593",
      light: "#00B593",
      contrastText: "#fff",
    },
    action: {
      // hover: '#00B593',
      disabledBackground: "#C6C6C6",
      disabled: "black",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "40px",
          borderRadius: "10px",
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "#db3131",
          "&$error": {
            color: "#db3131",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
  },
});

export default theme;
