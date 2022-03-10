import React, { ReactElement, FC } from "react";

import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

const DemoPage= ({count}) => {
  return (
        <Grid item>
          <Chip color="primary" label={count} />
        </Grid>
  );
};

export default DemoPage;