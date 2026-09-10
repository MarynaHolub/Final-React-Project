import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './slices/categoriesSlice';
import productsReducer from './slices/productsSlice';
import usersForDiscountReducer from './slices/usersForDiscountSlice';
import cartReducer from './slices/cartSlice';
import orderReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    usersForDiscount: usersForDiscountReducer,
    products: productsReducer,
    order: orderReducer,
    cart: cartReducer,

  },
});
export default store;
