import { Box, Stack } from '@mui/material';

import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import { IconButton } from '../../atoms';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

export const SideBar = () => {
  return (
    <Box sx={{ paddingLeft: 3, paddingTop: 5, paddingRight: 3 }}>
      <Stack>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <IconButton
            buttonName={'Add Student'}
            buttonIcon={<PeopleAltOutlinedIcon />}
          />

          <IconButton
            buttonName={'Manage Students'}
            buttonIcon={<BallotOutlinedIcon />}
          />

          <IconButton
            buttonName={'Logout'}
            buttonIcon={<LogoutOutlinedIcon />}
          />
        </Box>
      </Stack>
    </Box>
  );
};
