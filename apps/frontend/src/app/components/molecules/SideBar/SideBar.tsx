import { Box, Stack } from '@mui/material';

import { IconButton } from '../../atoms';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

export const SideBar = () => {
  return (
    <Stack>
      <Box sx={{ display: 'flex', flexDirection: 'column' }} width="300px">
        <IconButton
          buttonName={'Add Student'}
          buttonIcon={<PeopleAltOutlinedIcon />}
        />

        <IconButton
          buttonName={'Manage Students'}
          buttonIcon={<PeopleAltOutlinedIcon />}
        />

        <IconButton
          buttonName={'Logout'}
          buttonIcon={<PeopleAltOutlinedIcon />}
        />
      </Box>
    </Stack>
  );
};
