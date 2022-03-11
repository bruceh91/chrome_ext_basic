import React, { ReactElement, FC } from "react";

import {style} from './styling/styling';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Header from './components/Header';
import Paper from '@mui/material/Paper';

import DemoPage from './page/demoPage/DemoPage';
import HomePage from './page/homePage/Home';
import SchedulePage from './page/schedulePage/Schedule';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


const routeState = atom({
  key: 'route', // unique ID (with respect to other atoms/selectors)
  default: 'home', // default value (aka initial value)
});

const Routes= ({}) => {
  const [route, setRoute] = useRecoilState(routeState);

  const switchView = (route) => {
    console.log('hit inside switch view')
    setRoute(route)
  }

  return (
    <Box sx={style.outerBox}>
        <Header />
        <Paper sx={style.innerBox}>
            {route === 'demo' ? <DemoPage switchView={switchView} /> : null}
            {route === 'home' ? <HomePage switchView={switchView} /> : null}
            {route === 'schedule' ? <SchedulePage switchView={switchView} /> : null}
        </Paper>
    </Box>
  );
};

export default Routes;