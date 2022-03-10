// import React from 'react';
import React, { ReactElement, FC } from "react";

import ButtonMUI from '@mui/material/Button';
import { style } from '../styling/styling';
import { isPropertySignature } from "typescript";

interface Props {
  idName: string
  text: string
  clickFunction: Function
  type?: string
}

const Button: FC<Props> = ({idName, text, clickFunction, type}): ReactElement => {



  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  // pass in individual style points from styles file //
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////



  let style = {}
  switch(type) {
    case 'disabled': {
        style = style.button.dark
        break;
    }
    default: {
       style = {backgroundColor: '#B1D0E0', border: "1px solid #406882"}
       break;
    }
 }
  return (
      <>
          <ButtonMUI id={idName} style={style} variant="contained" onClick={() => clickFunction('test')}>{text}</ButtonMUI>
      </>
  );
};

export default Button;
