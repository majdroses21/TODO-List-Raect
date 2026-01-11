import "./assets/css/App.css";
import ToDoList from "./components/ToDoList";
import { ThemeProvider } from "@mui/material/styles";
import { IndigoBlueTheme, purpleTheme } from "./theme/theme";
import MainLayout from "./layout/MainLayout";
import { TodosContext } from "./contexts/todosContext";
import { ToastProvider } from "./contexts/ToastContext";
import ToastNotification from "./components/layout/tools/ToastNotification";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <ThemeProvider theme={purpleTheme}>
        <ToastProvider>
          <TodosContext.Provider value={{tasks,setTasks}}>
            <MainLayout>
              <ToDoList />
            </MainLayout>
            <ToastNotification />
          </TodosContext.Provider>
        </ToastProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
