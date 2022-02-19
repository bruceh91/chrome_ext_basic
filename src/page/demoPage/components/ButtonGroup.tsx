import React, { ReactElement, FC } from "react";

import Grid from '@mui/material/Grid';
import Button from '../../../components/Button';


interface Props {
    increment: Function,
    decrement: Function
}

const ButtonGroup: FC<Props> = ({increment, decrement}): ReactElement => {
  return (
    <Grid item>
        <Button text='increment' clickFunction={increment} style="dark" />
        <Button text='decrement' clickFunction={decrement} style="dark" />
    </Grid>
  );
};

export default ButtonGroup;