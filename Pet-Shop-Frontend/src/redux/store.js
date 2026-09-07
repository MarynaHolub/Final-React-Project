import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categoriesSlice';
import productsReducer from './slices/productsSlice'
import usersForDiscountReducer from './slices/usersForDiscountSlice';
// import apiReducer from './apiSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    usersForDiscount: usersForDiscountReducer,
    products: productsReducer,
    // order: orderReducer,
    // productInform: productInformReducer,
    // api: apiReducer,
    // cart: cartReducer,    
    // sale: saleReducer,
  },
});
export default store;
