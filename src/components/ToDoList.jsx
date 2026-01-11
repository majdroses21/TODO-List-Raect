//Imports
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useContext, useState, useEffect } from "react";
import Task from "./Task";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { TodosContext } from "../contexts/todosContext";
import DeleteModal from "./layout/tools/DeleteModal";
import AddEditTaskModal from "./layout/tools/AddEditTaskModal";
import { useToast } from "../contexts/ToastContext";
//Others
import { v4 as uuid } from "uuid";

export default () => {
  //
  const { tasks, setTasks } = useContext(TodosContext);
  const { showToast } = useToast();
  const [formTask, setFormTask] = useState({
    title: "",
    details: "",
  });
  // Modal States
  const [selectedTask, setSelectedTask] = useState(null);
  const [openDeleteModal, setOpenDeleteDialog] = useState(false);
  const [openAddEditDialog, setOpenAddEditDialog] = useState(false);
  const [modalType, setModalType] = useState("add"); // TODO: Try set null later

  // Toggle Buttons Handler
  const [alignment, setAlignment] = useState("all");
  const handleChange = (event, newAlignment) => {
    // setAlignment(newAlignment);
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  //Get All Tasks From Local Storeg if local Storeg hav key defyned a "tasks"
  useEffect(() => {
    console.log("Calling the useEffect");
    // const storageTasks = JSON.parse(localStorage.getItem('tasks'));
    const storageTasks = localStorage.getItem("tasks");
    if (
      storageTasks &&
      storageTasks !== "undefined" &&
      storageTasks !== "null"
    ) {
      setTasks(JSON.parse(storageTasks)); //ToDoList.jsx:51:1
    } else {
      setTasks([]);
    }
  }, []);

  // Methods
  // Delete Handlers
  const handleDeleteClick = (task) => {
    setSelectedTask(task);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteDialog(false);
    setSelectedTask(null);
  };

  const confirmDelete = () => {
    if (!selectedTask) return handleCloseDeleteModal();
    // Yaroob Code
    // const updatedTasks = tasks.filter((t) => {
    //   if (t.id == selectedTask.id) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    //   return t.id != selectedTask.id
    // })
    // setTasks(updatedTasks);

    // Copilot AI Code
    setTasks((prev) => prev.filter((t) => t.id !== selectedTask.id));
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks.filter((t) => t.id !== selectedTask.id))
    );
    showToast("Task deleted successfully", "success");
    handleCloseDeleteModal();
  };
  // ===== Delete Handlers =====

  // Add/Edit Handlers
  const handleAddClick = () => {
    setModalType("add");
    setSelectedTask(null);
    setFormTask({ title: "", details: "" });
    setOpenAddEditDialog(true);
  };

  const handleEditClick = (task) => {
    setModalType("edit");
    setSelectedTask(task);
    setFormTask({ title: task.title, details: task.details });
    setOpenAddEditDialog(true);
  };

  const handleCloseAddEditModal = () => {
    setOpenAddEditDialog(false);
    setSelectedTask(null);
  };

  const confirmAddTask = () => {
    const newTask = {
      id: uuid(),
      title: formTask.title,
      details: formTask.details,
      isCompleted: false,
    };
    // setTasks([...tasks, newTask]);
    // setTasks(prev => [...prev, newTask]);
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setFormTask({ title: "", details: "" });
    showToast("Task added successfully", "success");
    handleCloseAddEditModal();
  };

  const confirmEditTask = () => {
    let updatedTasks;

    setTasks((prev) => {
      updatedTasks = prev.map((t) =>
        t.id === selectedTask.id
          ? { ...t, title: formTask.title, details: formTask.details }
          : t
      );
      return updatedTasks;
    });
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    // Reset form & close
    setFormTask({ title: "", details: "" });
    showToast("Task updated successfully", "success");
    handleCloseAddEditModal();
  };
  // ===== Add/Edit Handlers =====

  // Filter Tasks
  //TODO
  // ===== Filter Tasks =====
  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h3">My Tasks</Typography>
          <Divider />
          {/* Fillter Btons */}
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{ marginTop: 2 }}
          >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="to_do">To Do</ToggleButton>
            <ToggleButton value="completed">Done</ToggleButton>
          </ToggleButtonGroup>
          {/* ===/ Fillter Btons /==== */}
          {/* === Task ==== */}
          {tasks.length === 0 ? (
            <Typography variant="h6" sx={{ marginTop: 2 }}>
              No Tasks Available
            </Typography>
          ) : (
            tasks.map((task) => {
              return (
                <Task
                  todo={task}
                  key={task.id}
                  onDelete={() => handleDeleteClick(task)}
                  onEdit={() => handleEditClick(task)}
                />
              );
            })
          )}
          {}
          {/* ===/ Task /==== */}
          {/* Add Task */}
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Button
                variant="contained"
                style={{ width: "100%", height: "100%" }}
                onClick={handleAddClick}
              >
                add task
              </Button>
            </Grid>
          </Grid>
          {/* ===== Add Task ===== */}
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      {/* Delete Dialog */}
      <DeleteModal
        open={openDeleteModal}
        handleClose={handleCloseDeleteModal}
        handleConfirm={confirmDelete}
        task={selectedTask}
      />
      {/* ===== Delete Dialog ===== */}
      {/* Add/Edit Dialog */}
      <AddEditTaskModal
        type={modalType}
        open={openAddEditDialog}
        handleClose={handleCloseAddEditModal}
        handleConfirm={modalType === "add" ? confirmAddTask : confirmEditTask}
        formTask={formTask}
        setFormTask={setFormTask}
      />
      {/* ===== Add/Edit Dialog ===== */}
    </Container>
  );
};
