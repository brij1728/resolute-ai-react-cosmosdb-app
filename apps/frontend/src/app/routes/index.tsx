import { AddStudentPage, ManageStudentPage } from '../pages';
import { AppBar, SideBar } from '../components';
import { Box, CssBaseline } from '@mui/material';
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
        <AppBar />
        <SideBar />
        <Routes>
          <Route path="/addStudent" element={<AddStudentPage />} />
          <Route path="/manageStudent" element={<ManageStudentPage />} />

          <Route path="*" element={<Navigate to="/addStudent" replace />} />
        </Routes>
      </Box>
    </>
  );
};
