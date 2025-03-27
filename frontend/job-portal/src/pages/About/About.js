import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const About = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Box my={4}>
          <Typography variant="h3" gutterBottom>About</Typography>
          <Typography>Learn more about our company and mission.</Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default About;
