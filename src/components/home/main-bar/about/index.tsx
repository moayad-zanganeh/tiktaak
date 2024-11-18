import { Box, Typography } from '@mui/material';
import React from 'react';

function About() {
  return (
    <Box sx={{ width: '100%', color: 'white' }}>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          animation: 'fadeIn 0.3s ease',
          mr: '5%',
        }}
      >
        Tik Taak: A Legendary Iranian Rap Group
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 2,
          animation: 'fadeIn 0.3s ease',
          mr: '5%',
        }}
      >
        Tik Taak was one of the most iconic Iranian rap and hip-hop groups,
        known for its distinctive style and unforgettable music. This group
        gained widespread popularity during the 2010s, with members bringing
        unique talents and energy to the table. Among its notable members were{' '}
        <strong>Khashayar SR</strong>,<strong>Sina Sae</strong> , and{' '}
        <strong>Sina Mafi</strong>, each contributing to the group’s legacy in a
        remarkable way.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          animation: 'fadeIn 0.3s ease',
          mr: '5%',
        }}
      >
        Khashayar SR{' '}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 2,
          animation: 'fadeIn 0.3s ease',
          mr: '5%',
        }}
      >
        Khashayar SR was one of the most prominent members of Tik Taak. His
        unique voice, clever lyrics, and charismatic stage presence helped
        establish the group’s reputation. As a producer and performer, he played
        a key role in creating Tik Taak's distinctive sound, blending rhythmic
        beats with impactful storytelling.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          animation: 'fadeIn 0.3s ease',
          mr: '5%',
        }}
      >
        Sina Sae{' '}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 2,
          animation: 'fadeIn 0.3s ease',
          mr: '5%',
        }}
      >
        Sina Sae stood out for his poetic lyrics and deep understanding of
        rhythm and flow. His verses often explored social themes, personal
        struggles, and life in modern Iran, connecting with fans on a profound
        level. Even outside Tik Taak, Sina Sae’s individual projects have shown
        his versatility as a rapper and songwriter.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          width: '10%',
          color: 'white',
          fontWeight: 'bold',
          mb: 2,
          animation: 'fadeIn 0.3s ease',
          mr: '5%',
        }}
      >
        Sina Mafi{' '}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          animation: 'fadeIn 0.3s ease',
          mr: '5%',
        }}
      >
        Sina Mafi brought his own style and charisma to Tik Taak’s lineup. His
        smooth delivery and memorable performances added depth to the group’s
        tracks. Fans admired his ability to bring energy and emotion to every
        song, making him a standout member of the group.
      </Typography>
    </Box>
  );
}

export default About;
