import React, { ReactElement, FC } from "react";

import {style} from './styling/styling';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Header from './components/Header';

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
  default: 'd', // default value (aka initial value)
});

interface Props {
    //   text: string,
    //   clickFunction: Function,
    //   style: string
    }

const Routes: FC<Props> = ({}): ReactElement => {
    const [route, setRoute] = useRecoilState(routeState);

  return (
    <Box sx={style.outerBox}>
        <Header />
        <Box sx={style.innerBox}>
            {route === 'home' ? <HomePage /> : <DemoPage />}
        </Box>
    </Box>
  );
};

export default Routes;