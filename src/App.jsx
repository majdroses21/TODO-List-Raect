import "./App.css";
import ToDoList from "./components/ToDoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
//Colors need to use in my App
import { purple, blueGrey } from "@mui/material/colors";
//theeme one
const IndigoBlueTheme = createTheme({
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
});
//another theme
const purpleTheme = createTheme({
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
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={IndigoBlueTheme}>
        <ThemeProvider theme={purpleTheme}>
          <ToDoList />
        </ThemeProvider>
        <Checkbox defaultChecked />
        <ThemeProvider theme={IndigoBlueTheme}>
          <Checkbox defaultChecked />
        </ThemeProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
