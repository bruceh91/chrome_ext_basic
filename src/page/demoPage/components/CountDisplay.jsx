import React, { ReactElement, FC } from "react";

import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

const CountDisplay= ({count}) => {
  return (
        <Grid item>
          <Chip id="count" color="primary" label={`count = ${count}`} />
        </Grid>
  );
};

export default CountDisplay;