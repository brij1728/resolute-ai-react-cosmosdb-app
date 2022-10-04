import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import { IconButton } from '../../atoms';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { useNavigate } from 'react-router-dom';

export const SideBar = ({ width = 200 }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{ width, padding: 1, height: '100%', borderRight: 1, marginRight: 1 }}
    >
      <List>
        <ListItem
          sx={{ cursor: 'pointer' }}
          onClick={() => navigate('/addStudent')}
        >
          <ListItemIcon>
            <PeopleAltOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Add Student" />
        </ListItem>
        <ListItem onClick={() => navigate('/manageStudent')}>
          <ListItemIcon>
            <BallotOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Manage Students" />
        </ListItem>
        <ListItem onClick={() => navigate('/logout')}>
          <ListItemIcon>
            <LogoutOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Box>
  );
};
