import axios from 'axios';
import { BASE_URL, API_KEY } from '../config.js';

export const getCurrencyData = async (baseCurrency = "") => {
  try {
    const response = await axios.get(`${BASE_URL}/latest`, {
      params: { base_currency: baseCurrency },
      headers: {
        'apikey': API_KEY,
      },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch currency data');
  }
};
