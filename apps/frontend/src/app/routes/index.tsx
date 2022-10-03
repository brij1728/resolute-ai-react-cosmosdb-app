import { AddStudentPage, ManageStudentPage, ViewStudentPage } from '../pages';
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
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Box
            sx={{
              flexShrink: 1,
              height: '100%',
            }}
          >
            <SideBar />
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              overflow: 'auto',
            }}
          >
            <Routes>
              <Route path="/addStudent" element={<AddStudentPage />} />
              <Route path="/manageStudent" element={<ManageStudentPage />} />
              <Route path="/student/:id" element={<ViewStudentPage />} />
              <Route
                path="*"
                element={<Navigate to="/manageStudent" replace />}
              />
            </Routes>
          </Box>
        </Box>
      </Box>
    </>
  );
};
