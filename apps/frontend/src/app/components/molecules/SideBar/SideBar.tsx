import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

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
        <ListItem>
          <IconButton
            buttonName={'Manage Students'}
            buttonIcon={<BallotOutlinedIcon />}
            onClick={() => navigate('/manageStudent')}
          />
        </ListItem>
        <ListItem>
          <IconButton
            buttonName={'Logout'}
            buttonIcon={<LogoutOutlinedIcon />}
            onClick={() => navigate('/logout')}
          />
        </ListItem>
      </List>
    </Box>
  );
};
