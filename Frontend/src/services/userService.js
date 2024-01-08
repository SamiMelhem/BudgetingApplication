import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // URL of your Flask app

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Error during user registration:', error);
    throw error;
  }
};