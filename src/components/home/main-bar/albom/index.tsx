import Musics from '@/components/music';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Albom = () => {
  return (
    <Box sx={{ my: 9, padding: '2%', backgroundColor: 'black' }}>
      <Typography
        sx={{
          flexGrow: 1,
          textAlign: 'center',
          fontSize: '24px',
          fontWeight: 'bold',
          letterSpacing: '8px',
          color: 'white',
        }}
      >
        TRACK
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 3,
        }}
      >
        <Card
          sx={{
            position: 'relative',
            width: '40%',
            height: '400px',
            borderRadius: '15px',
            overflow: 'hidden',
            cursor: 'pointer',
            my: 8,
            '&:hover .overlay': {
              opacity: 1,
            },
          }}
        >
          <CardMedia
            component="img"
            image="/images/tiktaak.jpg"
            alt="tik taak"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'inherit',
            }}
          />
        </Card>
        <Musics />
      </Box>
    </Box>
  );
};
export default Albom;
