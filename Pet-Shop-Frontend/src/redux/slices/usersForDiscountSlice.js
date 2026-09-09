import { createSlice } from '@reduxjs/toolkit';
import { fetchAddUser } from '../thunks/thunks';

const initialState = {
  usersForDiscountList: [],
  status: false,
  error: null,
};

const usersForDiscountSlice = createSlice({
  name: 'usersForDiscount',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchAddUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })

      .addCase(fetchAddUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.usersForDiscountList.push(action.payload);
      })

      .addCase(fetchAddUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default usersForDiscountSlice.reducer;

