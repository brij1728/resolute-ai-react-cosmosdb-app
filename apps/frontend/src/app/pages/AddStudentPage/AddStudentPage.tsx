import { SideBar, StudentForm } from '../../components';

import { Grid } from '@mui/material';
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
    <Grid container direction="column" xs={12} spacing={2} alignItems="stretch">
      <Grid item>
        <SideBar />
      </Grid>
      <Grid item xs={10} spacing={2}>
        <StudentForm onSave={onStudentSave} />;
      </Grid>
    </Grid>
  );
};
