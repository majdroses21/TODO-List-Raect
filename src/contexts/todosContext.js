import { createContext, useReducer, useContext } from "react";
import { tasksReduser } from "../reducers/tasksReducer";

export const TodosContext = createContext([]);
export const DispachContext = createContext([]);

export const TasksProvider = ({ children }) => {
    const [tasks, tasksDispach] = useReducer(tasksReduser, []);
    return (
        <TodosContext.Provider value={ tasks }>
            <DispachContext.Provider value={ tasksDispach }>
                {children}
            </DispachContext.Provider>
        </TodosContext.Provider>
    );
};

export const useTasks = () => {
    return useContext(TodosContext);
}
export const useDispach = () => {
    return useContext(DispachContext);
}

export default TasksProvider
