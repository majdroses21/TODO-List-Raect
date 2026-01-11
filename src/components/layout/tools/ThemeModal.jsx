// src/components/ThemeModal.jsx
import * as React from "react";
import { useContext } from "react";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";
import { ThemeContext } from "../../../contexts/ThemeContext";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default ({ open, onClose }) => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    onClose();
  };

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
          <Typography 
            id="spring-modal-title" 
            variant="h5" 
            component="h2"
            sx={{ mb: 3, textAlign: 'center', fontWeight: 'bold' }}
          >
           Choose Theme 👨🏻‍🎨🎨🖼️
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', gap: 2 }}>
            {/* Purple Theme */}
            <Box
              onClick={() => handleThemeChange('purple')}
              sx={{
                cursor: 'pointer',
                textAlign: 'center',
                position: 'relative',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}>
                Purple Theme
              </Typography>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: 2,
                  bgcolor: "#9c27b0",
                  border: currentTheme === 'purple' ? '3px solid #4caf50' : '3px solid transparent',
                  position: 'relative',
                  transition: 'all 0.3s',
                  '&:hover': {
                    bgcolor: "#7b1fa2",
                  },
                }}
              >
                {currentTheme === 'purple' && (
                  <CheckCircleIcon
                    sx={{
                      position: 'absolute',
                      top: -10,
                      right: -10,
                      color: '#4caf50',
                      fontSize: 30,
                      bgcolor: 'white',
                      borderRadius: '50%',
                    }}
                  />
                )}
              </Box>
            </Box>

            {/* Indigo Blue Theme */}
            <Box
              onClick={() => handleThemeChange('indigo')}
              sx={{
                cursor: 'pointer',
                textAlign: 'center',
                position: 'relative',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}>
                Indigo Blue
              </Typography>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: 2,
                  bgcolor: "#3f50b5",
                  border: currentTheme === 'indigo' ? '3px solid #4caf50' : '3px solid transparent',
                  position: 'relative',
                  transition: 'all 0.3s',
                  '&:hover': {
                    bgcolor: "#002884",
                  },
                }}
              >
                {currentTheme === 'indigo' && (
                  <CheckCircleIcon
                    sx={{
                      position: 'absolute',
                      top: -10,
                      right: -10,
                      color: '#4caf50',
                      fontSize: 30,
                      bgcolor: 'white',
                      borderRadius: '50%',
                    }}
                  />
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};