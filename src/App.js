import React, { Component }  from 'react';

import { ThemeProvider } from '@mui/material/styles';
import theme from './styling/materialUI/theme';

import { RecoilRoot } from 'recoil';

import Routes from './Routes'

function App() {
  return (
    <RecoilRoot>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </RecoilRoot>
  );
}

export default App;
