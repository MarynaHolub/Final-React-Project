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
    await new Promise((resolve) => setTimeout(resolve, 1000));
// Имитируем успешный ответ сервера
    return {
      status: 'OK',
      message: 'request processed',
      userData,
    };
  },
);



export const fetchCreateOrder = createAsyncThunk(
  'orders/fetchCreateOrder',
  async (orderData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      status: 'OK',
      message: 'order created successfully',
      orderData,
    };
  },
);