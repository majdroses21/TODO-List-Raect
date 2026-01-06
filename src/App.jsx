import "./App.css";
import ToDoList from "./components/ToDoList";
import { ThemeProvider } from "@mui/material/styles";
import { IndigoBlueTheme, purpleTheme } from "./theme/theme";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={purpleTheme}>
        <MainLayout>
          <ToDoList />
        </MainLayout>
      </ThemeProvider>
    </div>
  );
}

export default App;
