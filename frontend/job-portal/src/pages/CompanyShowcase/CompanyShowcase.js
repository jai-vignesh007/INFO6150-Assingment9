import React, { useEffect, useState } from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import axios from '../../api/axiosInstance';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import CompanyCard from '../../components/CompanyCard';

const CompanyShowcase = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get('/companies')
      .then(res => setCompanies(res.data))
      .catch(err => console.error('Failed to fetch companies:', err));
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <Box my={4}>
          <Typography variant="h4" gutterBottom>
            Company Showcase
          </Typography>
          <Grid container spacing={3}>
            {companies.map((company) => (
              <Grid item xs={12} sm={6} md={4} key={company._id}>
                <CompanyCard company={company} />
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
