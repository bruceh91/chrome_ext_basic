import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import {
  Palette as MuiPallete,
  PaletteOptions as MuiPaletteOptions,
} from '@mui/material/styles/createPalette';

// declare module '@mui/material/styles' {
//   interface Theme {
//     status: {
//       danger: string;
//     }
//   }
//   interface Palette extends MuiPallete {
//     darkBG: {main: string}
//   }
//   interface PaletteOptions extends MuiPaletteOptions {
//     darkBG?: {main: string};
//   }
//   // allow configuration using `createTheme`
//   // interface ThemeOptions {
//   //   status?: {
//   //     danger?: string;
//   //   };
//   // }
// }

const theme = createTheme({
  palette: {
    primary: {
      main: '#6998AB',
      light: '#B1D0E0',
      dark: '#406882',
      contrastText: '#406882',
    },
    secondary: {
      main: '#1A374D',
    },
    background: {
      paper: '#6998AB',
      default: '#406882',
    },
    text: {
      primary: '#406882',
      secondary: '#B1D0E0',
      disabled: '#1A374D',
    },
    divider: '#1A374D',
  },
  typography: {
    button: {
      fontWeight: 800,
      fontSize: '1.5rem',
    },
    fontSize: 15,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
  },
  /* @ts-ignore */
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
  },
  shape: {
    borderRadius: 5,
  },
})
export default theme