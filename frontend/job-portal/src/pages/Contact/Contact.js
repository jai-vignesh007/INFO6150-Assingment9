// src/pages/Contact/Contact.js
import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const Contact = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Box my={4}>
          <Typography variant="h3" gutterBottom>Contact</Typography>
          <Typography>Contact us for more information.</Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
