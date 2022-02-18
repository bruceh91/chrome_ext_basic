import React, { ReactElement, FC } from "react";

import Grid from '@mui/material/Grid';
import Button from '../components/Button';

interface Props {
//   text: string,
//   clickFunction: Function,
//   style: string
}

let test1 = function(text: string): any {
console.log('clicked 1 --- ', text);
};

let test2 = function(text: string): any {
console.log('clicked 2 --- ', text);
};

const HomePage: FC<Props> = ({}): ReactElement => {
  return (
    <Grid container>
        <Grid item>
            <Button text="test1" clickFunction={test1} style="dark" />
            <Button text="test2" clickFunction={test2} style="dark" />
        </Grid>
    </Grid>
  );
};

export default HomePage;