import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../constants/api';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const responce = await axios.get(`${API_URL}/categories/all`);
    return responce.data;
  },
);

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const responce = await axios.get(`${API_URL}/products/all`);
    return responce.data;
  },
);

export const fetchAddUser = createAsyncThunk(
  'usersForDiscount/fetchAddUser',
  async (userData) => {
    // const response = await axios.post(`${API_URL}/send`, userData);
    // return response.data;

    // Имитируем успешный ответ сервера
    console.log(userData);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return {
      status: 'OK',
      message: 'request processed',
    };
    
  },
);
