// src/pages/Home/Home.js
import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';

const Home = () => (
  <>
    <NavBar />
    <HeroSection />
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Latest News & Updates
        </Typography>
        <Typography variant="body1" paragraph>
          Stay updated with the latest trends in the job market. Our portal offers insights, resources, and success stories to help you navigate your career path.
        </Typography>
      </Box>
    </Container>
    <Footer />
  </>
);

export default Home;
