import { configureStore } from '@reduxjs/toolkit';
// import apiReducer from './apiSlice';
import categoriesReducer from './slices/categoriesSlice';
import usersForDiscountReducer from './slices/usersForDiscountSlice';

const store = configureStore({
  reducer: {
    // api: apiReducer,
    // cart: cartReducer,
    categories: categoriesReducer,
    usersForDiscount: usersForDiscountReducer,
    // order: orderReducer,
    // productInform: productInformReducer,
    // product: productReducer,
    // sale: saleReducer,
  },
});
export default store;
