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
      light: '#B1D0E0',
      main: '#6998AB',
      dark: '#406882'
    },
  },
})
export default theme