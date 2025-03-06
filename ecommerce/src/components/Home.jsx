import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box
        sx={{
            backgroundImage: `url('/assets/images/products/background.webp')`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            height: '100vh', 
            width: '100vw', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'black',
        }}
        >
      
      <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
        Welcome to Our Store
      </Typography>

     
      <Typography variant="h5" component="h2" sx={{ mb: 4 }}>
        Discover the best products at amazing prices
      </Typography>

      
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/products"
        sx={{
          fontSize: '1.2rem',
          padding: '12px 24px',
          borderRadius: '8px',
          backgroundColor: '#1976d2', 
          '&:hover': {
            backgroundColor: '#1565c0', 
          },
        }}
      >
        Shop Now
      </Button>
    </Box>
  );
};

export default Home;