import { AddStudentPage, ManageStudentPage } from '../pages';
import { AppBar, SideBar } from '../components';
import { Box, CssBaseline, Grid } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';

import { StudentForm } from '../components/organism/StudentForm';
import { StudentRequest } from '@resolute-ai-react-cosmosdb-app/api-interfaces';

export const RouteComponent = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          overflow: 'hidden',
          width: '100%',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <AppBar />
          </Grid>
          <Grid
            container
            direction="column"
            xs={12}
            spacing={2}
            alignItems="stretch"
          >
            <Grid item>
              <SideBar />
            </Grid>
            <Grid item xs={10} spacing={2}>
              <AddStudentPage />
            </Grid>
          </Grid>
        </Grid>

        <Routes>
          <Route path="/addStudent" element={<AddStudentPage />} />
          <Route path="/manageStudent" element={<ManageStudentPage />} />

          <Route path="*" element={<Navigate to="/addStudent" replace />} />
        </Routes>
      </Box>
    </>
  );
};
