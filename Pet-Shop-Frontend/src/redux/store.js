import { configureStore } from '@reduxjs/toolkit';
// import apiReducer from './apiSlice';
import categoriesReducer from './slices/categoriesSlice';


const store = configureStore({
    reducer: {
        // api: apiReducer,
        // cart: cartReducer,
        categories: categoriesReducer,
        // order: orderReducer,
        // productInform: productInformReducer,
        // product: productReducer,
        // sale: saleReducer,
    }
})
export default store