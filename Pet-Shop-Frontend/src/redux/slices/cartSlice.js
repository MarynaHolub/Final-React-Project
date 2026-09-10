import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, count } = action.payload;

      const existing = state.cartList.find(
        (item) => item.product.id === product.id,
      );

      if (existing) {
        existing.count += count;
      } else {
        state.cartList.push({
          product,
          count,
        });
      }
    },

    increaseQuantity: (state, action) => {
      const productId = action.payload;

      const item = state.cartList.find(
        (item) => item.product.id === productId,
      );

      if (item) {
        item.count += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const productId = action.payload;

      const item = state.cartList.find(
        (item) => item.product.id === productId,
      );

      if (item) {
        if (item.count > 1) {
          item.count -= 1;
        } else {
          state.cartList = state.cartList.filter(
            (item) => item.product.id !== productId,
          );
        }
      }
    },

    removeFromCart: (state, action) => {
      const productId = action.payload;

      state.cartList = state.cartList.filter(
        (item) => item.product.id !== productId,
      );
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;