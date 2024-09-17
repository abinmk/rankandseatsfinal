import axios from 'axios';

const API_URL = 'http://localhost:5000/api/wishlist';

export const addToWishlist = async (username, itemId) => {
  try {
    await axios.post(`${API_URL}/add`, { username, itemId });
  } catch (error) {
    console.error('Error adding to wishlist:', error);
  }
};

export const removeFromWishlist = async (username, itemId) => {
  try {
    await axios.post(`${API_URL}/remove`, { username, itemId });
  } catch (error) {
    console.error('Error removing from wishlist:', error);
  }
};

export const getWishlist = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    return [];
  }
};