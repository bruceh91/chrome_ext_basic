import React, { ReactElement, FC } from "react";

import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

interface Props {
    lastClicked: string
}

const LastClickedDisplay: FC<Props> = ({lastClicked}): ReactElement => {
  return (
        <Grid item>
          <Chip color="primary" variant="outlined" label={lastClicked} />
        </Grid>
  );
};

export default LastClickedDisplay;