import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
//

import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
//btn icon
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default () => {
  const theme = useTheme();
  const useColor = theme.palette;
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
                sx={{ textAlign: "left", marginLeft: 1}}
              >
                Learn React
              </Typography>
              <Typography
                variant="h6"
                sx={{ textAlign: "left", marginLeft: 1 }}
              >
                Lorem ipsum dolor sit amet.
              </Typography>
            </Grid>
            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <IconButton size="medium" sx={buttonStyle}>
                <CheckIcon />
              </IconButton>
              <IconButton size="medium" sx={buttonStyle}>
                <EditIcon />
              </IconButton>
              <IconButton size="medium" sx={buttonStyle}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
