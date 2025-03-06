import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Grid, TextField, Box } from '@mui/material';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    console.log('Removing product with ID:', productId); 
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity(productId, quantity));
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container sx={{ mt: 20, mb: 10 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6">Your cart is empty.</Typography>
      ) : (
        <>
          <Grid container spacing={4}>
            {cart.map((item) => (
              <Grid item xs={12} key={item.id}>
                <Box sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ddd', pb: 2 }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: '100px', height: '100px', marginRight: '20px' }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body1">${item.price}</Typography>
                    <TextField
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      inputProps={{ min: 1 }}
                      sx={{ width: '80px', mr: 2 }}
                    />
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </Button>
                  </Box>
                  <Typography variant="h6">
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 4, textAlign: 'right' }}>
            <Typography variant="h5">
              Cart Total: ${calculateTotal().toFixed(2)}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/order-confirmation"
              sx={{ mt: 2 }}
            >
              Place your Order
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};

export default Cart;