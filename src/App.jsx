import "./App.css";
import ToDoList from "./components/ToDoList";
import Checkbox from "@mui/material/Checkbox";
import { ThemeProvider } from "@mui/material/styles";
import { IndigoBlueTheme,purpleTheme } from "./theme/theme";


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
