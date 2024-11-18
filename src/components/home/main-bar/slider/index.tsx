import React from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';

const images = [
  {
    src: '/images/Sina-Sae.jpg',
    text: 'Sina Sae',
  },
  {
    src: '/images/khashayar-sr.jpg',
    text: 'Khashayar SR',
  },
  {
    src: '/images/Sina-Mafee.jpg',
    text: 'Sina Mafee',
  },
];

const ImageHoverEffect = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 3,
        my: 10,
      }}
    >
      {images.map((image, index) => (
        <Card
          key={index}
          sx={{
            position: 'relative',
            width: '30%',
            height: '420px',
            borderRadius: '15px',
            overflow: 'hidden',
            cursor: 'pointer',
            '&:hover .overlay': {
              opacity: 1,
            },
          }}
        >
          <CardMedia
            component="img"
            image={image.src}
            alt={image.text}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'inherit',
            }}
          />
          <CardContent
            className="overlay"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              opacity: 0,
              transition: 'opacity 0.3s ease',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                animation: 'fadeIn 0.3s ease',
              }}
            >
              {image.text}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ImageHoverEffect;
