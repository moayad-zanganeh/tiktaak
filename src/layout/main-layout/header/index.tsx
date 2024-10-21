import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Twitter, YouTube, Instagram } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';

const useStyles = makeStyles(() => ({
  icon: {
    color: 'gray',
    '&:hover': {
      color: 'inherit',
    },
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar
      sx={{ position: 'static', background: '#232323', boxShadow: 'none' }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 0.8 }}>
          <IconButton
            sx={{
              color: 'gray',
              '&:hover': {
                color: 'red',
              },
            }}
          >
            <YouTube />
          </IconButton>
          <IconButton
            sx={{
              color: 'gray',
              '&:hover': {
                color: 'darkturquoise',
              },
            }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            sx={{
              color: 'gray',
              '&:hover': {
                color: '#e96274',
              },
            }}
          >
            <Instagram />
          </IconButton>
        </Box>
        <Typography
          sx={{
            flexGrow: 1,
            textAlign: 'right',
            fontSize: '24px',
            fontWeight: 'bold',
            letterSpacing: '8px',
          }}
        >
          TikTaak
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
