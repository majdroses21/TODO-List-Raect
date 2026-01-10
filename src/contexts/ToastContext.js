import { createContext, useState, useCallback, useContext } from 'react';

export const ToastContext = createContext();

/**
 * Custom hook to use Toast notifications
 * @returns {Object} - { showToast }
 */
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

/**
 * ToastProvider Component
 * Provides toast notification functionality to child components
 */
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  /**
   * Show a toast notification
   * @param {string} message - The message to display
   * @param {string} severity - The type of notification (success, error, warning, info)
   * @param {number} duration - Duration in milliseconds (default: 4000)
   */
  const showToast = useCallback((message, severity = 'success', duration = 4000) => {
    const id = Date.now();
    const newToast = { id, message, severity };

    setToasts((prev) => [...prev, newToast]);

    // Auto remove toast after duration
    const timer = setTimeout(() => {
      removeToast(id);
    }, duration);

    return { id, timer };
  }, []);

  /**
   * Remove a specific toast
   * @param {number} id - The ID of the toast to remove
   */
  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const value = {
    toasts,
    showToast,
    removeToast,
  };

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};
