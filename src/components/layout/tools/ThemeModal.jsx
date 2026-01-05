import * as React from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default ({ open, onClose }) => {
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          TransitionComponent: Fade,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="spring-modal-title" variant="h6" component="h2">
            Change Theme
          </Typography>
          <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <Button
              variant="contained"
              style={{ all: "unset", cursor: "pointer" }}
            >
              purple Theme
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 1,
                  bgcolor: "#9c27b0",
                  "&:hover": {
                    bgcolor: "#7b1fa2",
                  },
                }}
              />
            </Button>
            <Button
              variant="contained"
              style={{ all: "unset", cursor: "pointer" }}
            >
              Indigo Blue Theme
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 1,
                  bgcolor: "#3f50b5",
                  "&:hover": {
                    bgcolor: "#002884",
                  },
                }}
              />
            </Button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};
