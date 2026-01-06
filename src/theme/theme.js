import { createTheme } from "@mui/material/styles";
import { purple, blueGrey } from "@mui/material/colors";

// Indigo Blue Theme
export const IndigoBlueTheme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: '"Emilys Candy", cursive',
  },
});

// purple Theme
export const purpleTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
      light: purple[100],
      dark: purple[700],
      contrastText: "#ffffff",
    },
    secondary: {
      main: blueGrey[500],
      light: blueGrey[100],
      dark: blueGrey[700],
      contrastText: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Pacifico", cursive',
  },
});