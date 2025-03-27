import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Box my={4}>
          <Typography variant="h3" gutterBottom>Home</Typography>
          <Typography>Welcome to the Job Portal!</Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
