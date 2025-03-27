// src/components/AboutContent.js
import React from 'react';
import { Box, Typography, Container } from '@material-ui/core';

const AboutContent = () => (
  <Container>
    <Box my={4}>
      <Typography variant="h4" gutterBottom>
        Our Story
      </Typography>
      <Typography variant="body1" paragraph>
        We started our journey with a mission to connect talented professionals with top companies. Our portal is designed to streamline the job search process while offering personalized career resources.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Our Mission
      </Typography>
      <Typography variant="body1" paragraph>
        To empower job seekers and employers by providing a user-friendly, efficient platform that bridges the gap between opportunity and talent.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Our Vision
      </Typography>
      <Typography variant="body1" paragraph>
        We envision a world where every professional finds the perfect career match and every company thrives with the right talent.
      </Typography>
    </Box>
  </Container>
);

export default AboutContent;
