// import React from 'react';
import React, { ReactElement, FC } from "react";
import {style} from '../styling/styling';

const Header: FC = (): ReactElement => {
  return (
      <>
          <h1 style={style.header}>Header</h1>
      </>
  );
};

export default Header;
