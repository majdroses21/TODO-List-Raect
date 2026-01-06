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
export default () => {
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
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
          <Task />
          {/* ===/ Task /==== */}
          {/* Add Task */}
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid size={8}>
              <TextField
                id="standard-basic"
                label="Add Task"
                variant="standard"
                style={{ width: "100%" }}
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
              >
                Contained
              </Button>
            </Grid>
          </Grid>
          {/* ===== Add Task ===== */}
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
};
