import "./App.css";
import ToDoList from "./components/ToDoList";
import { ThemeProvider } from "@mui/material/styles";
import { IndigoBlueTheme, purpleTheme } from "./theme/theme";
import MainLayout from "./layout/MainLayout";
import { TodosContext } from "./contexts/todosContext";
import { ToastProvider } from "./contexts/ToastContext";
import ToastNotification from "./components/layout/tools/ToastNotification";
import { useState } from "react";

//Others
import { v4 as uuid } from "uuid";

const tasksArr = [
  {
    id: uuid(),
    title: "Complete UI Design",
    details: "Design the main user interface for the application using Figma",
    isCompleted: true,
  },
  {
    id: uuid(),
    title: "Write Code",
    details: "Develop core components using React",
    isCompleted: true,
  },
  {
    id: uuid(),
    title: "Test Application",
    details: "Conduct comprehensive testing to ensure all features work",
    isCompleted: false,
  },
  {
    id: uuid(),
    title: "Code Review",
    details: "Review code with team and fix any bugs",
    isCompleted: false,
  },
  {
    id: uuid(),
    title: "Write Documentation",
    details: "Document all functions and components in the code",
    isCompleted: false,
  },
  {
    id: uuid(),
    title: "Deploy Application",
    details: "Upload application to server and publish for users",
    isCompleted: false,
  },
  {
    id: uuid(),
    title: "Collect Feedback",
    details: "Get user feedback and improve the application",
    isCompleted: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(tasksArr);
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
