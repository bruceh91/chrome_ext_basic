import React, { Component }  from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styling/materialUI/theme';
import Box from '@mui/material/Box';
import {style} from './styling/styling';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import Header from './components/Header';
// import ButtonGrid from './components/ButtonGrid';
import DemoPage from './page/demoPage/DemoPage';

// const StoreContext = React.createContext({});

class App extends Component {
  state = { name: 'Spyna' }
  render() {
    return (
      // <StoreContext.Provider value={this.state}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Box sx={style.outerBox}>
            <Header />
            <Box sx={style.innerBox}>
              <DemoPage />
            </Box>
          </Box>
        </ThemeProvider>
      </RecoilRoot>
      // </StoreContext.Provider>
    );
  }
}

export default App;
