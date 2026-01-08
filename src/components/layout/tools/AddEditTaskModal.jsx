import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function AddEditTaskModal({
  type = "add",
  open,
  handleClose,
  handleConfirm,
  formTask,
  setFormTask
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleConfirm();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {type == "add" ? "Add a new task" : "Edit task"}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} id="task_form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="taskTitle"
              name="taskTitle"
              label="Task Title"
              type="text"
              fullWidth
              variant="standard"
              value={formTask.title || ""}
              onChange={(e) => {
                setFormTask({...formTask, title: e.target.value})
              }}
            />
            <TextField
              margin="dense"
              id="taskDeatels"
              name="taskDeatels"
              label="Task Deatels"
              type="text"
              fullWidth
              variant="standard"
              value={formTask.details || ""}
              onChange={(e) => {
                setFormTask({...formTask, details: e.target.value})
            }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="task_form">
            {type == "add" ? "Add" : "Edit"} Task
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
