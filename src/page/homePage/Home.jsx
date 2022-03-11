import React, { ReactElement, FC } from "react";
import Grid from '@mui/material/Grid';

import Button from '../../components/Button';

import { style } from "../../styling/styling";

import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { getThemeProps } from "@mui/system";



const HomePage = (props) => {

  const test = function(text){
    console.log('test = ', text);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      rowSpacing={1.5}
      >
      <Grid item style={style.grid.item.fullWidth}>
        <Button idName='schedule_button' text='Schedule' clickFunction={() => props.switchView('schedule')} style={style.button.light}/>
      </Grid>
      <Grid item style={style.grid.item.fullWidth}>
        <Button idName='lists_button' text='Lists' clickFunction={test} style={style.button.light} />
      </Grid>
      <Grid item style={style.grid.item.fullWidth}>
        <Button idName='account_button' text='Account' clickFunction={test} style={style.button.light}/>
      </Grid>
      <Grid item style={style.grid.item.fullWidth}>
        <Button idName='total_focus_button' text='Total Focus' clickFunction={test} style={style.button.light} />
      </Grid>
    </Grid>
  );
};

export default HomePage;