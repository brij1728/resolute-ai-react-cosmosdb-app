import { Box, Button, Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Student } from '@resolute-ai-react-cosmosdb-app/api-interfaces';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useNavigate } from 'react-router-dom';

export const StudentListView = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const navigate = useNavigate();

  const cols: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'class', headerName: 'Class', flex: 1 },
    { field: 'rollNumber', headerName: 'Roll No.', flex: 1 },
    {
      field: 'action',
      headerName: 'Edit/ View/ Delete',
      sortable: false,
      width: 200,
      renderCell: (params) => {
        const student = params.row as Student;
        const onClick = () => {
          return alert(JSON.stringify(student, null, 4));
        };

        return (
          <Box>
            <Button onClick={() => navigate(`/student/view/${student.id}`)}>
              <VisibilityOutlinedIcon />
            </Button>
            <Button onClick={() => navigate(`/student/edit/${student.id}`)}>
              <BorderColorOutlinedIcon />
            </Button>
            <Button onClick={onClick}>
              <DeleteOutlinedIcon />
            </Button>
          </Box>
        );
      },
    },
  ];

  const rowData = students.map((student) => {
    return {
      name: `${student?.firstName} ${student?.middleName} ${student?.lastName}`,
      class: `${student?.class}-${student?.division}`,
      rollNumber: `${student?.rollNumber}`,
      id: `${student?.id}`,
    };
  });

  console.log(rowData);

  useEffect(() => {
    fetch('/api/students')
      .then((response) => response.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <Grid container>
      <Grid container alignItems="center" justify-content="space-around">
        <Grid>Manage Students</Grid>
        <Grid>{`${new Date().toLocaleString()}`}</Grid>
      </Grid>
      <Box sx={{ width: '100%' }}>
        <DataGrid autoHeight columns={cols} rows={rowData}></DataGrid>
      </Box>
    </Grid>
  );
};
