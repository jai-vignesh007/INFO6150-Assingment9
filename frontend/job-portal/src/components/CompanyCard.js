import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const CompanyCard = ({ company }) => {
  const imageUrl = `http://localhost:3000${company.imagePath}`; 

  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={company.name}
        style={{ objectFit: 'contain', padding: '10px' }}
      />
      <CardContent>
        <Typography variant="h6" align="center">
          {company.name}
        </Typography>
      </CardContent>
    </Card>
  );
};


export default CompanyCard;
