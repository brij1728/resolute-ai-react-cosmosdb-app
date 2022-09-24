import { AddStudentPage, ManageStudentPage } from '../pages';
import { AppBar, SideBar } from '../components';
import { Box, CssBaseline, Grid } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';

import { StudentForm } from '../components/organism/StudentForm';

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
          <Grid container direction="column" xs={12} spacing={2}>
            <Grid item xs={4}>
              <SideBar />
            </Grid>
            <Grid item xs={8} spacing={2}>
              <StudentForm />
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
