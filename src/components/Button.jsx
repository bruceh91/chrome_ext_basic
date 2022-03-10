// import React from 'react';
import React, { ReactElement, FC } from "react";

import ButtonMUI from '@mui/material/Button';
import { style } from '../styling/styling';

const Button = ({idName, text, clickFunction, style}) => {



  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  // pass in individual style points from styles file //
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////



  // let btnStyle = {}
  // console.log('idName = ', idName);
  // console.log('type = ', type);
  // if (type) {
  //   switch(type) {
  //     case 'disabled': {
  //         btnStyle = style.button.dark
  //         break;
  //     }
  //     default: {
  //         btnStyle = style.button.light
  //         break;
  //     }
  //  }
  // }

//  console.log('btnStyle = ', btnStyle);
  return (
      <>
          <ButtonMUI id={idName} style={style} variant="contained" onClick={() => clickFunction('test')}>{text}</ButtonMUI>
      </>
  );
};

export default Button;
