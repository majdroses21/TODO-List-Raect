import "./assets/css/App.css";
import ToDoList from "./components/ToDoList";
import MainLayout from "./layout/MainLayout";
import { TasksProvider } from "./contexts/todosContext";
import { ToastProvider } from "./contexts/ToastContext";
import ToastNotification from "./components/layout/tools/ToastNotification";
import { CustomThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <CustomThemeProvider>
        <TasksProvider>
          <ToastProvider>
            <MainLayout>
              <ToDoList />
            </MainLayout>
            <ToastNotification />
          </ToastProvider>
        </TasksProvider>
      </CustomThemeProvider>
    </div>
  );
}

export default App;
