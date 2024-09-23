import { createTheme } from "@mui/material";


export const customTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#F9FAFA',
                },
            },
        },
    },
    typography: {
        fontFamily: "'Inter', 'Roboto', 'sans-serif'"
    }
});