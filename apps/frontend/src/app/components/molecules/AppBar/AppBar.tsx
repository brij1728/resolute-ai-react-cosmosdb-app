import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';

import { IconButton } from '../../atoms';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export const AppBar = () => {
  return (
    <MuiAppBar
      position="static"
      sx={{
        paddingLeft: '40px',
        paddingRight: '40px',
        backgroundColor: 'white',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          sx={{
            flexGrow: '1',
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontWeight: 700,
            color: '#584A4A',
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          LOGO
        </Typography>
        <Typography sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            buttonName={'brijesh'}
            buttonIcon={<PersonOutlineOutlinedIcon />}
          />
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};
