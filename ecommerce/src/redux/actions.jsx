import {
  fetchProducts as fetchProductsAPI,
  addToCart as addToCartAPI,
  updateCartQuantity as updateCartQuantityAPI,
  removeFromCart as removeFromCartAPI,
  placeOrder as placeOrderAPI,
} from '../api';

export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product,
  });
  
  export const updateQuantity = (productId, quantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { productId, quantity },
  });

  export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId, 
  });

  export const clearCart = () => ({
    type: 'CLEAR_CART', 
  });