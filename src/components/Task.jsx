import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
//btn icon
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

//Context Imports
import { TodosContext } from "../contexts/todosContext";
import { useToast } from "../contexts/ToastContext";
import { useContext } from "react";
export default ({ todo, onDelete, onEdit }) => {
  const theme = useTheme();
  const useColor = theme.palette;
  const { showToast } = useToast();
  //Css Styles
  const buttonStyle = {
    // Main Styles
    backgroundColor: useColor.primary.contrastText,
    color: useColor.primary.main,
    transition: "all 0.3s ease-in-out",
    // on Hover
    "&:hover": {
      backgroundColor: "#cfcfcf",
      boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
      transform: "translateY(-2px)",
      transition: "all 0.3s ease-in-out",
    },

    // Click Effect
    "&:active": {
      transform: "translateY(0)",
      boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
    },
  };
  const { tasks, setTasks } = useContext(TodosContext);
  // Event Handelars

  const handelCheckClick = () => {
    const UpdetedTask = tasks.map((t) => {
      if (t.id === todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTasks((tasks) => [...UpdetedTask]);
    localStorage.setItem('tasks', JSON.stringify(UpdetedTask))
    const message = todo.isCompleted ? "Task marked as pending" : "Task marked as completed";
    showToast(message, "info");
  };
  // ===== Event Handelars =====
  return (
    <>
      <Card
        sx={{
          minWidth: 275,
          backgroundColor: useColor.primary.main,
          color: useColor.primary.contrastText,
          mt: 2,
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={8}>
              <Typography
                variant="h5"
                sx={{ textAlign: "left", marginLeft: 1 }}
              >
                {todo.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{ textAlign: "left", marginLeft: 1 }}
              >
                {todo.details}
              </Typography>
            </Grid>
            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {/* Check Button */}
              <IconButton
                onClick={handelCheckClick}
                size="medium"
                sx={{
                  ...buttonStyle,
                  color: todo.isCompleted ? "#fff" : useColor.primary.main,
                  backgroundColor: todo.isCompleted
                    ? useColor.primary.main
                    : "#fff",
                  border: todo.isCompleted ? `2px solid #fff` : "none",
                }}
              >
                <CheckIcon />
              </IconButton>
              {/* ===== Check Button ===== */}
              <IconButton
                size="medium"
                sx={buttonStyle}
                onClick={() => onEdit && onEdit(todo)}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                size="medium"
                sx={buttonStyle}
                onClick={() => onDelete && onDelete(todo)}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
