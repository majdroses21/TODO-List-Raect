import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" sx={{ fontWeight: 500 }}>
          © {new Date().getFullYear()} جميع الحقوق محفوظة
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;