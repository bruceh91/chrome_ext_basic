import React, { ReactElement, FC } from "react";

import {style} from './styling/styling';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Header from './components/Header';
import Paper from '@mui/material/Paper';

import DemoPage from './page/demoPage/DemoPage';
import HomePage from './page/homePage/Home';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


const routeState = atom({
  key: 'route', // unique ID (with respect to other atoms/selectors)
  default: 'demo', // default value (aka initial value)
});

const Routes= ({}) => {
    const [route, setRoute] = useRecoilState(routeState);

  return (
    <Box sx={style.outerBox}>
        <Header />
        <Paper sx={style.innerBox}>
            {route === 'home' ? <HomePage /> : null}
            {route === 'demo' ? <DemoPage /> : null}
        </Paper>
    </Box>
  );
};

export default Routes;