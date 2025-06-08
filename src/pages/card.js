import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { midAngle } from '@nivo/core';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({a,b}) {
  return (

    <Card sx={{  background: 'linear-gradient(135deg, #2E7D32 0%, #424242 100%)',
        minHeight: '10vh',
        padding: '0',
        fontFamily: 'Oswald',
        maxWidth: 680,
          margin: '40px auto 0 auto',
          background: 'white',
          borderRadius: 18,
          boxShadow: '0 6px 24px rgba(44, 62, 80, 0.08)',
          padding: '36px 32px 24px 32px',
          border: '5px dashed #2E7D32',
          position: 'relative',}}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 24 }}>
            {a}
          {/* “Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.” */}
        </Typography>
        
        <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 16 }}>{b}</Typography>
      
      </CardContent>
     
     
    </Card>

  );
}
