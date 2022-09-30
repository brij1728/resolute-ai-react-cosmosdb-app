import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { Student } from '@resolute-ai-react-cosmosdb-app/api-interfaces';

export const StudentListView = () => {
  // const updateStudent = () => {

  // }
  const [students, setStudents] = useState<Student[]>([]);

  const VISIBLE_FIELDS: Array<keyof Student> = [
    'firstName',
    'lastName',
    'class',
    'division',
  ];

  const cols = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'class', headerName: 'Class', flex: 1 },
    { field: 'rollNumber', headerName: 'Roll No.', flex: 1 },
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
      {/* <Grid item>
        <Box display="flex" p={1} flexGrow={1}>
          <Box p={1} alignItems="flex-start">
            Manage Students
          </Box>
          <Box
            p={1}
            alignItems="flex-end"
          >{`${new Date().toLocaleString()}`}</Box>
        </Box>
      </Grid> */}
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
