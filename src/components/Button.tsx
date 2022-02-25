// import React from 'react';
import React, { ReactElement, FC } from "react";

import ButtonMUI from '@mui/material/Button';
import { isPropertySignature } from "typescript";

interface Props {
  idName: string
  text: string
  clickFunction: Function
}

const Button: FC<Props> = ({idName, text, clickFunction}): ReactElement => {
  return (
      <>
          <ButtonMUI id={idName} variant="contained" onClick={() => clickFunction('test')}>{text}</ButtonMUI>
      </>
  );
};

export default Button;
