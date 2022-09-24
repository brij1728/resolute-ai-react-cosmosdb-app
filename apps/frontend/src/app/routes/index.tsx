import { AddStudentPage, ManageStudentPage } from '../pages';
import { AppBar, SideBar } from '../components';
import { Box, CssBaseline } from '@mui/material';
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
        <AppBar />
        <SideBar />
        <StudentForm />
        <Routes>
          <Route path="/addStudent" element={<AddStudentPage />} />
          <Route path="/manageStudent" element={<ManageStudentPage />} />

          <Route path="*" element={<Navigate to="/addStudent" replace />} />
        </Routes>
      </Box>
    </>
  );
};
