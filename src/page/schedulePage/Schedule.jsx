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



const SchedulePage = (props) => {

  const test = function(text){
    console.log('test = ', text);
  };

  let btnStyle = {...style.button.light, ...style.button.thin, paddingTop: '5px'}
  let gridItemStyle = style.grid.item.weekGrid

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      alignItems="flex-start"
      rowSpacing={.5}
      >
      <Grid item style={gridItemStyle}>
        <Button idName='schedule_button' text='Monday: ' style={{...btnStyle, paddingLeft: '51px'}}/>
      </Grid>
      <Grid item style={gridItemStyle}>
        <Button idName='schedule_button' text='Tuesday: ' style={{...btnStyle, paddingLeft: '45px'}}/>
      </Grid>
      <Grid item style={gridItemStyle}>
        <Button idName='schedule_button' text='Wednesday: ' style={{...btnStyle}}/>
      </Grid>
      <Grid item style={gridItemStyle}>
        <Button idName='schedule_button' text='Thursday: ' style={{...btnStyle, paddingLeft: '31px'}}/>
      </Grid>
      <Grid item style={gridItemStyle}>
        <Button idName='schedule_button' text='Friday: ' style={{...btnStyle, paddingLeft: '60px'}}/>
      </Grid>
      <Grid item style={gridItemStyle}>
        <Button idName='schedule_button' text='Saturday: ' style={{...btnStyle, paddingLeft: '30px'}}/>
      </Grid>
      <Grid item style={gridItemStyle}>
        <Button idName='schedule_button' text='Sunday: ' style={{...btnStyle, paddingLeft: '51px'}}/>
      </Grid>
    </Grid>
  );
};

export default SchedulePage;