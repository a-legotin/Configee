import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      black: '#000',
      white: '#fff',
    },
    background: {
      default: '#121212',
      paper: '#424242',
    },
    primary: {
      light: '#1976d2',
      main: '#339a96',
      dark: '#2a7776',
      contrastText: '#fff',
    },
    secondary: {
      light: '#1976d2',
      main: '#215457',
      dark: '#2a7776',
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#fff',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
  },
});

export default lightTheme;
