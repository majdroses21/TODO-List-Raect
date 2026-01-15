import { v4 as uuid } from "uuid";


export const tasksReduser = (currTasks, action) => {
    console.log('calling tasks reduser:', currTasks, action);
    const type = action.type;

    switch (type) {

       
        case 'added_task':
            {
                const newTask = {
                    id: uuid(),
                    title: action.payload.title,
                    details: action.payload.details,
                    isCompleted: false,
                };
                const updatedTasks = [...currTasks, newTask];
                localStorage.setItem("tasks", JSON.stringify(updatedTasks));
                return updatedTasks;
            }
        case 'deleted': {
            const updatedTasks = currTasks.filter((t) => t.id !== action.payload.id)
            localStorage.setItem("tasks", JSON.stringify(updatedTasks));

            return updatedTasks
        }
        case 'update': {
            const updatedTasks = currTasks.map((t) =>
                t.id === action.payload.id
                    ? { ...t, title: action.payload.title, details: action.payload.details }
                    : t
            );

            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            return updatedTasks;

        }
        case 'read': {
            const storageTasks = localStorage.getItem("tasks");
            if (
                storageTasks &&
                storageTasks !== "undefined" &&
                storageTasks !== "null"
            ) {
                return JSON.parse(storageTasks)
            } else {
                return []
            }
        }
       
        default:
            throw Error('Unknown Action => ' + type)
            break;
    }
}