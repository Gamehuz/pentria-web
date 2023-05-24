import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  value: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.value.push(action.payload)
    },

    removeCart: (state, action) => {
      state.value.splice(action.payload, 1)
    },

    clearCart: (state, action) => {
      state.value = action.payload
    },

    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.user,
        };
      },
    },
  }
})

export const { addCart } = cartSlice.actions;
export const { removeCart } = cartSlice.actions;
export const { clearCart } = cartSlice.actions;
export const selectCart = (state) => state.cart.value;
export default cartSlice.reducer;