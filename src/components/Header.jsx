// import React from 'react';
import React, { ReactElement, FC } from "react";
import {style} from '../styling/styling';
import headerLogo from '../headerLogo.png'

const Header = () => {
  return (
      <>
        <h1 style={style.header}><img src={headerLogo} className="App-logo" alt="logo" /></h1>
      </>
  );
};

export default Header;
