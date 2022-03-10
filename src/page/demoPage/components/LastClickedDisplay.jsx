import React, { ReactElement, FC } from "react";

import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

const LastClickedDisplay = ({lastClicked}) => {
  return (
        <Grid item>
          <Chip id="lastClicked" variant="outlined" label={lastClicked} />
        </Grid>
  );
};

export default LastClickedDisplay;