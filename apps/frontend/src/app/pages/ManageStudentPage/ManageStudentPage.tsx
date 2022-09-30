import { SideBar, StudentListView } from '../../components';

import { Grid } from '@mui/material';
import React from 'react';

export const ManageStudentPage = () => {
  return (
    <Grid container direction="column" xs={12} spacing={2} alignItems="stretch">
      <Grid item>
        <SideBar />
      </Grid>
      <Grid item xs={10} spacing={2}>
        <StudentListView />;
      </Grid>
    </Grid>
  );
};
