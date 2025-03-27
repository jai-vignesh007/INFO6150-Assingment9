// src/components/ContactForm.js
import React, { useState } from 'react';
import {  TextField, Button, Typography, Box } from '@material-ui/core';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Box mt={4}>
        <Typography variant="h6">Thank you for contacting us!</Typography>
      </Box>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={2}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </Box>
      <Button type="submit" variant="contained" color="primary">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
