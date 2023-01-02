import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    common: {
      white: '#fff',
    },
    action: {
      active: '#215457',
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
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
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
    },
  },
});

export default lightTheme;
