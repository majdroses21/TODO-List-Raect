import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Task from "./Task";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { TodosContext } from "../contexts/todosContext";
import { useContext } from "react";
import DeleteModal from "./layout/tools/DeleteModal";
//Others
import { v4 as uuid } from "uuid";

export default () => {
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const { tasks, setTasks } = useContext(TodosContext);
  const [taskTitle, setTaskTitle] = useState("");
  const handelAddTask = () => {
    const newTask = {
      id: uuid(),
      title: taskTitle,
      details: "",
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setTaskTitle("");
  };
  // Modal state for delete dialog (lifted here so Task remains pure)
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const handleDeleteClick = (task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };
  const handleClose = () => {
    setModalOpen(false);
    setSelectedTask(null);
  };
  const confirmDelete = () => {
    if (!selectedTask) return handleClose();
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
    handleClose();
  };
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
                />
              );
            })
          )}
          {}
          {/* ===/ Task /==== */}
          {/* Add Task */}
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid size={8}>
              <TextField
                id="standard-basic"
                label="Add Task"
                variant="standard"
                style={{ width: "100%" }}
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
              />
            </Grid>
            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <Button
                variant="contained"
                style={{ width: "100%", height: "100%" }}
                onClick={handelAddTask}
              >
                add
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
        open={modalOpen}
        handleClose={handleClose}
        handleConfirm={confirmDelete}
        task={selectedTask}
      />
      {/* ===== Delete Dialog ===== */}
    </Container>
  );
};
