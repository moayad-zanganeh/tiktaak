import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Twitter, YouTube, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <AppBar
      sx={{
        position: 'static',
        background: '#232323',
        boxShadow: 'none',
        mt: 4,
        py: 2,
        backgroundColor:"black"
      }}
    >
      <Toolbar sx={{ flexDirection: 'column', alignItems: 'center' }}>
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 'bold',
            letterSpacing: '8px',
            mb: 2,
            color:"gold"
          }}
        >
          TikTaak
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <IconButton sx={{ color: 'gray', '&:hover': { color: 'red' } }}>
            <YouTube />
          </IconButton>
          <IconButton sx={{ color: 'gray', '&:hover': { color: 'darkturquoise' } }}>
            <Twitter />
          </IconButton>
          <IconButton sx={{ color: 'gray', '&:hover': { color: '#e96274' } }}>
            <Instagram />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', gap: 6 }}>
          {['Sina Sae', 'Khashayar SR', 'Sina Mafie'].map((name, index) => (
            <Typography
              key={index}
              sx={{
                position: 'relative',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500',
                color: 'white',
                '&:hover': {
                  color: 'gold',
                },
                '&:hover::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: '-2px',
                  width: '100%',
                  height: '2px',
                  backgroundColor: 'gold',
                  transition: 'width 0.3s ease-in-out',
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: '-2px',
                  width: '0%',
                  height: '2px',
                  backgroundColor: 'gold',
                  transition: 'width 0.3s ease-in-out',
                },
              }}
            >
              {name}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
