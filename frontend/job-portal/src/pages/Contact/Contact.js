// src/pages/Contact/Contact.js
import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

const Contact = () => (
  <>
    <NavBar />
    <Container>
      <Box my={4}>
        <Typography variant="h3" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          If you have any questions or need further information, please reach out using the form below.
        </Typography>
        <ContactForm />
      </Box>
    </Container>
    <Footer />
  </>
);

export default Contact;
