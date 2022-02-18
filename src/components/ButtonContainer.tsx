import React, { ReactElement, FC } from "react";

import Grid from '@mui/material/Grid';
import Button from './Button';

interface Props {
//   text: string,
//   clickFunction: Function,
//   style: string
}

let test = function(text: string): any {
    console.log('clicked --- ', text);
  };

const ButtonContainer: FC<Props> = ({}): ReactElement => {
  return (
    <Grid container>
        <Grid item>
        <Button text="test" clickFunction={test} style="dark" />
        </Grid>
    </Grid>
  );
};

export default ButtonContainer;