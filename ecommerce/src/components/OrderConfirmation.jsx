import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/actions'; // Import the clearCart action
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <Container sx={{ mt: 20, mb: 10, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Order Confirmation
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Thank you for your order! Your items will be shipped soon.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        sx={{ mt: 2 }}
      >
        Continue Shopping
      </Button>
    </Container>
  );
};

export default OrderConfirmation;