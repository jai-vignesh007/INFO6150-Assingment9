// src/pages/JobListings/JobListings.js
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@material-ui/core';
import jobPosts from '../../data/jobPosts';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

const JobListings = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Box my={4}>
          <Typography variant="h3" gutterBottom>Job Listings</Typography>
          <Grid container spacing={3}>
            {jobPosts.map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>{job.title}</Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {job.description}
                    </Typography>
                    <Typography variant="subtitle2">
                      Required Skills: {job.skills}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Salary: {job.salary}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      {job.lastUpdated}
                    </Typography>
                    <Button variant="contained" color="primary" href={job.applyLink}>
                      Apply Now
                    </Button>
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

export default JobListings;
