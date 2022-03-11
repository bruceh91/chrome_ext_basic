// import React from 'react';
import React, { ReactElement, FC } from "react";

import ButtonMUI from '@mui/material/Button';
import { style } from '../styling/styling';

const Button = ({idName, text, clickFunction, style}) => {
  return (
      <>
          <ButtonMUI id={idName} style={style} variant="contained" onClick={clickFunction}>{text}</ButtonMUI>
      </>
  );
};

export default Button;
