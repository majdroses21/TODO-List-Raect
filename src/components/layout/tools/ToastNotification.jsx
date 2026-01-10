import { useToast } from '../../../contexts/ToastContext';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

/**
 * ToastNotification Component
 * Displays all active toast notifications using MUI Snackbar and Alert
 */
export default function ToastNotification() {
  const { toasts, removeToast } = useToast();

  const handleClose = (id) => {
    removeToast(id);
  };

  return (
    <Stack spacing={2} sx={{ position: 'fixed', top: 20, right: 20, zIndex: 9999 }}>
      {toasts.map((toast) => (
        <Snackbar
          key={toast.id}
          open={true}
          autoHideDuration={4000}
          onClose={() => handleClose(toast.id)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert
            onClose={() => handleClose(toast.id)}
            severity={toast.severity}
            variant="filled"
            sx={{
              width: '100%',
              fontWeight: 500,
              fontSize: '0.95rem',
            }}
          >
            {toast.message}
          </Alert>
        </Snackbar>
      ))}
    </Stack>
  );
}
