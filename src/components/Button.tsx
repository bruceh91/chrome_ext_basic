// import React from 'react';
import React, { ReactElement, FC } from "react";

import ButtonMUI from '@mui/material/Button';
import { isPropertySignature } from "typescript";

interface Props {
  text: string,
  clickFunction: Function,
  style: string
}

const Button: FC<Props> = ({text, clickFunction, style}): ReactElement => {
  return (
      <>
          <ButtonMUI variant="contained" onClick={() => clickFunction('test')}>{text}</ButtonMUI>
      </>
  );
};

export default Button;
