import axios from 'axios';

const API_BASE_URL = 'http://localhost:5132'; // Backend base URL

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Add a product to the cart
export const addToCart = async (product) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/cart`, product);
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

// Update the quantity of a product in the cart
export const updateCartQuantity = async (cartItemId, quantity) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/api/cart/update-quantity/${cartItemId}`, { quantity });
    return response.data;
  } catch (error) {
    console.error('Error updating cart quantity:', error);
    throw error;
  }
};

// Remove a product from the cart
export const removeFromCart = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/api/cart/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error removing from cart:', error);
    throw error;
  }
};

// Place an order
export const placeOrder = async (order) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/orders`, order);
    return response.data;
  } catch (error) {
    console.error('Error placing order:', error);
    throw error;
  }
};