import { Box, Stack } from '@mui/material';

import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import { IconButton } from '../../atoms';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { useNavigate } from 'react-router-dom';

export const SideBar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ paddingLeft: 3, paddingTop: 5, paddingRight: 3 }}>
      <Stack>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <IconButton
            buttonName={'Add Student'}
            buttonIcon={<PeopleAltOutlinedIcon />}
            onClick={() => navigate('/addStudent')}
          />

          <IconButton
            buttonName={'Manage Students'}
            buttonIcon={<BallotOutlinedIcon />}
            onClick={() => navigate('/manageStudent')}
          />

          <IconButton
            buttonName={'Logout'}
            buttonIcon={<LogoutOutlinedIcon />}
            onClick={() => navigate('/logout')}
          />
        </Box>
      </Stack>
    </Box>
  );
};
