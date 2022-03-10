import React, { ReactElement, FC } from "react";

import Grid from '@mui/material/Grid';

import { style } from "../../../styling/styling";

import Button from '../../../components/Button';

const ButtonGroup = ({increment, decrement}) => {
  return (
    <Grid item>
        <Button idName='increment_button' text='increment' clickFunction={increment} style={style.button.light}/>
        <Button idName='decrement_button' text='decrement' clickFunction={decrement} style={style.button.dark} />
    </Grid>
  );
};

export default ButtonGroup;