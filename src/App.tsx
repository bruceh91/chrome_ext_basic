import React, { Component }  from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styling/materialUI/theme';
import Box from '@mui/material/Box';
import {style} from './styling/styling';

import Header from './components/Header';
// import ButtonGrid from './components/ButtonGrid';
import HomePage from './page/HomePage';

// const StoreContext = React.createContext({});

class App extends Component {
  state = { name: 'Spyna' }
  render() {
    return (
      // <StoreContext.Provider value={this.state}>
        <ThemeProvider theme={theme}>
          <Box sx={style.outerBox}>
            <Header />
            <Box sx={style.innerBox}>
              <HomePage />
            </Box>
          </Box>
        </ThemeProvider>
      // </StoreContext.Provider>
    );
  }
}

export default App;
