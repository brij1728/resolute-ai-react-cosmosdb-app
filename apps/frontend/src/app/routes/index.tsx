import { AddStudentPage, ManageStudentPage } from '../pages';
import { AppBar, SideBar } from '../components';
import { Box, CssBaseline, Grid } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';

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
