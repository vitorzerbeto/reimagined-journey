import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#b42626',
    },
    secondary: {
      main: '#19857b',
    },
    text: {
      primary: '#111',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Roboto;',
    h1: {
      fontFamily: 'Festive, cursive;',
      fontSize: '3em',
      color: '#b42626',
    },
  },
});

export default theme;
