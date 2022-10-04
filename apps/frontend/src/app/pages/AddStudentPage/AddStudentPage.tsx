import { Box, Grid } from '@mui/material';
import { SideBar, StudentForm } from '../../components';

import React from 'react';
import { StudentRequest } from '@resolute-ai-react-cosmosdb-app/api-interfaces';

export const AddStudentPage = () => {
  const onStudentSave = async (values: StudentRequest) => {
    await fetch('/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
  };
  return (
    <Grid container xs={12} spacing={2} alignItems="stretch">
      <Grid item>
        <Box display="flex" p={1} flexGrow={1}>
          <Box p={1} alignItems="flex-start">
            Add Students
          </Box>
          <Box
            p={1}
            alignItems="flex-end"
          >{`${new Date().toLocaleString()}`}</Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <StudentForm onSave={onStudentSave} />;
      </Grid>
    </Grid>
  );
};
