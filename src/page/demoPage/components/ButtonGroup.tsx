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
        <Button idName='increment_button' text='increment' clickFunction={increment} />
        <Button idName='decrement_button' text='decrement' clickFunction={decrement} />
    </Grid>
  );
};

export default ButtonGroup;