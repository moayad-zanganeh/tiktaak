import { Box } from '@mui/material';
import React from 'react';

function Musics() {
  return (
    <Box
      sx={{
        height: '80vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <iframe
        style={{
          borderRadius: '12px',
        }}
        src="https://open.spotify.com/embed/artist/7AJU2n7M6XW5j1fdqTdZgI?utm_source=generator&theme=0"
        width="100%"
        height="400"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Artist"
      ></iframe>
    </Box>
  );
}

export default Musics;
