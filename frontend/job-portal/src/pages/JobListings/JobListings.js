// src/pages/JobListings/JobListings.js
import React from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import jobPosts from '../../data/jobPosts';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import JobCard from '../../components/JobCard';

const JobListings = () => (
  <>
    <NavBar />
    <Container>
      <Box my={4}>
        <Typography variant="h3" gutterBottom>
          Job Listings
        </Typography>
        <Grid container spacing={3}>
          {jobPosts.map((job) => (
            <Grid item xs={12} sm={6} md={4} key={job.id}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
    <Footer />
  </>
);

export default JobListings;
