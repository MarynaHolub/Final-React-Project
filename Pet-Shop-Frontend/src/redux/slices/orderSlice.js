
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: null,
  status: 'idle',
  error: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    createOrder: (state, action) => {
      state.order = action.payload;
    },

    clearOrder: (state) => {
      state.order = null;
      state.status = 'idle';
      state.error = null;
    },
  },
});

export const { createOrder, clearOrder } = orderSlice.actions;

export default orderSlice.reducer;
