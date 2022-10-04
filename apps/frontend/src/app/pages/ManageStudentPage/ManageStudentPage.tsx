import { Grid } from '@mui/material';
import { StudentListView } from '../../components';

export const ManageStudentPage = () => {
  return (
    <Grid container direction="column" xs={12} spacing={2} alignItems="stretch">
      <Grid item xs={10} spacing={2}>
        <StudentListView />;
      </Grid>
    </Grid>
  );
};
