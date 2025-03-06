import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, Container, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity} from '../redux/actions';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleAddToCart = (item) => {
    if (item.available > 0) {
      dispatch(addToCart(item)); 
      dispatch(updateQuantity(item.id, 1)); 
    }
  };

  const cardItem = (item) => {
    return (
      <Grid item key={item.id} xs={12} sm={6} md={3}>
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Product Image */}
          <CardMedia
            component="img"
            sx={{
              height: 400,
              objectFit: 'cover',
            }}
            image={item.img}
            alt={item.title}
          />

          {/* Product Details */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ${item.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Available: {item.available}
            </Typography>
          </CardContent>

          {/* Add to Cart Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleAddToCart(item)}
              disabled={item.available === 0} 
            >
              Add to Cart
            </Button>
          </Box>
        </Card>
      </Grid>
    );
  };

  return (
    <Container sx={{ py: 20 }}>
      {/* Page Title */}
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography variant="h3" component="h1">
          Products
        </Typography>
        <hr />
      </Box>

      {/* Product Grid */}
      <Grid container spacing={3}>
        {products.map(cardItem)}
      </Grid>
    </Container>
  );
};

export default ProductList;