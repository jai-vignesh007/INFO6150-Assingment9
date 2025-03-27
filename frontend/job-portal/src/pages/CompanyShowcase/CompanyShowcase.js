// src/pages/CompanyShowcase/CompanyShowcase.js
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const companies = [
  { id: 1, name: 'TechCorp', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Innovate Inc.', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Creative Solutions', image: 'https://via.placeholder.com/150' },
];

const CompanyShowcase = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Box my={4}>
          <Typography variant="h3" gutterBottom>Company Showcase</Typography>
          <Grid container spacing={3}>
            {companies.map((company) => (
              <Grid item xs={12} sm={6} md={4} key={company.id}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={company.name}
                    height="150"
                    image={company.image}
                    title={company.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{company.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default CompanyShowcase;
