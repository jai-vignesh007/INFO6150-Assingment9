import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

const CompanyCard = ({ company }) => {
  return (
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
  );
};

export default CompanyCard;
