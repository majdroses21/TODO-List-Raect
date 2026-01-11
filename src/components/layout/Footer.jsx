import { Box, Container, Typography } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//Styless Css Style & SX
const footerStyles = {
  py: 4,
  px: 2,
  mt: "auto",
  backgroundColor: "primary.main",
  color: "primary.contrastText",
};
const socialMediaBox = {
  display: "flex",
  justifyContent: "center",
  mb: 3,
};
const ulStyless = {
  display: "flex",
  gap: 3,
  listStyle: "none",
  padding: 0,
  margin: 0,
  alignItems: "center",
};
const liStyless = {
  display: "flex",
  alignItems: "center",
  gap: 0.5,
  color: "inherit",
  textDecoration: "none",
  transition: "all 0.3s ease",
  "&:hover": {
    opacity: 0.7,
    transform: "translateY(-2px)",
  },
};
const copyrightsStyless = {
  fontWeight: 500,
  fontSize: "0.9rem",
};
function Footer() {
  return (
    <Box component="footer" sx={footerStyles}>
      <Container maxWidth="lg">
        {/* Social Media*/}
        <Box sx={socialMediaBox}>
          <Box component="ul" sx={ulStyless}>
            <li>
              <Box
                component="a"
                href="https://facebook.com/majdDev21"
                target="_blank"
                rel="noopener noreferrer"
                sx={liStyless}
              >
                <FacebookOutlinedIcon />
                <span>Facebook</span>
              </Box>
            </li>

            <li>
              <Box
                component="a"
                href="https://www.linkedin.com/in/majdroses21"
                target="_blank"
                rel="noopener noreferrer"
                sx={liStyless}
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </Box>
            </li>

            <li>
              <Box
                component="a"
                href="https://t.me/majdroses21"
                target="_blank"
                rel="noopener noreferrer"
                sx={liStyless}
              >
                <TelegramIcon />
                <span>Telegram</span>
              </Box>
            </li>
          </Box>
        </Box>

        {/* Copyrights */}
        <Typography variant="body1" align="center" sx={copyrightsStyless}>
          All Copyrights are Saved © {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;