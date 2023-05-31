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
      if (state.value.length === 0) {
        state.value.push(action.payload)
      } else if (state.value[0].spaceId === action.payload.spaceId) {
        state.value.push(action.payload)
      } else {
        return
      }
    },

    removeCart: (state, action) => {
      state.value.splice(action.payload, 1)
    },

    addDate: (state, action) => {
      state.value[action.payload.index].date = action.payload.date
    },
    addTime: (state, action) => {
      state.value[action.payload.index].time = action.payload.time
    },

    setCount: (state, action) => {
      state.value[action.payload.index].count = action.payload.count
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
export const { addDate } = cartSlice.actions;
export const { addTime } = cartSlice.actions;
export const { setCount } = cartSlice.actions;
export const selectCart = (state) => state.cart.value;
export default cartSlice.reducer;