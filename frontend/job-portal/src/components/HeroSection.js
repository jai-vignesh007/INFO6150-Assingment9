// src/components/HeroSection.js
import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';

const HeroSection = () => {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      minHeight="60vh" 
      bgcolor="#e0f7fa" 
      p={4}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to the Job Portal
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        Find your dream job or discover top talent!
      </Typography>
      <Button variant="contained" color="primary" href="/job-listings">
        Explore Jobs
      </Button>
    </Box>
  );
};

export default HeroSection;
