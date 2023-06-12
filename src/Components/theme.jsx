import { createTheme, responsiveFontSizes } from '@mui/material';
import { grey, red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#000000',
    },
    danger: {
      main: red['A400']
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: 'secondary',
      },
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: grey['100'],
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
