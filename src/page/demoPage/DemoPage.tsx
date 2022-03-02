import React, { ReactElement, FC } from "react";
import Grid from '@mui/material/Grid';

import Count from './components/countDisplay';
import LastClicked from './components/LastClickedDisplay';
import ButtonGroup from './components/ButtonGroup';


import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


const countState = atom({
  key: 'count', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

const lastClickedState = atom({
  key: 'lastClicked', // unique ID (with respect to other atoms/selectors)
  default: 'none', // default value (aka initial value)
});

interface Props {
//   text: string,
//   clickFunction: Function,
//   style: string
}

const DemoPage: FC<Props> = ({}): ReactElement => {

  const [count, setCount] = useRecoilState(countState);
  const [lastClicked, setLastClicked] = useRecoilState(lastClickedState);

  const increment = function(text: string): any {
    console.log('increment');
    setCount(count+1);
    setLastClicked('increment');
    };

  const decrement = function(text: string): any {
    console.log('decrement');
    setCount(count-1);
    setLastClicked('decrement');
    };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      spacing={3}
      >
        <Count count={count}/>
        <LastClicked lastClicked={lastClicked} />
        <ButtonGroup increment={increment} decrement={decrement} />
    </Grid>
  );
};

export default DemoPage;