import "./assets/css/App.css";
import ToDoList from "./components/ToDoList";
import MainLayout from "./layout/MainLayout";
import { TodosContext } from "./contexts/todosContext";
import { ToastProvider } from "./contexts/ToastContext";
import ToastNotification from "./components/layout/tools/ToastNotification";
import { useState } from "react";
import { CustomThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <CustomThemeProvider>
        <ToastProvider>
          <TodosContext.Provider value={{tasks,setTasks}}>
            <MainLayout>
              <ToDoList />
            </MainLayout>
            <ToastNotification />
          </TodosContext.Provider>
        </ToastProvider>
      </CustomThemeProvider>
    </div>
  );
}

export default App;
