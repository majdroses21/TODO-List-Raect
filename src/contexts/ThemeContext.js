import { createContext, useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { IndigoBlueTheme, purpleTheme } from '../theme/theme';

export const ThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const savedTheme = localStorage.getItem('selectedTheme');
        return savedTheme || 'purple';
    });

    // Save if Changed
    useEffect(() => {
        localStorage.setItem('selectedTheme', currentTheme);
    }, [currentTheme]);

    const theme = currentTheme === 'purple' ? purpleTheme : IndigoBlueTheme;

    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};