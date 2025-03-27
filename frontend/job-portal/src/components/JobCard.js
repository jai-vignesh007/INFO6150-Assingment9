import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';

const JobCard = ({ job }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>{job.title}</Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          {job.description}
        </Typography>
        <Typography variant="subtitle2">
          Required Skills: {job.skills}
        </Typography>
        <Typography variant="subtitle2">
          Salary: {job.salary}
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          {job.lastUpdated}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" href={job.applyLink}>
          Apply Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default JobCard;
