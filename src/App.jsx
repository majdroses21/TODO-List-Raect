import "./App.css";
import ToDoList from "./components/ToDoList";
import Checkbox from "@mui/material/Checkbox";
import { ThemeProvider } from "@mui/material/styles";
import { IndigoBlueTheme, purpleTheme } from "./theme/theme";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={IndigoBlueTheme}>
        <MainLayout>
          <ThemeProvider theme={purpleTheme}>
            <ToDoList />
          </ThemeProvider>
          <Checkbox defaultChecked />
          <ThemeProvider theme={IndigoBlueTheme}>
            <Checkbox defaultChecked />
          </ThemeProvider>
        </MainLayout>
      </ThemeProvider>
    </div>
  );
}

export default App;
