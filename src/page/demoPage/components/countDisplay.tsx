import React, { ReactElement, FC } from "react";

import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

interface Props {
  count: number
}

const CountDisplay: FC<Props> = ({count}): ReactElement => {
  return (
        <Grid item>
          <Chip color="primary" label={count} />
        </Grid>
  );
};

export default CountDisplay;