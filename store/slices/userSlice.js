import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  value: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to add comment
    setUser: (state, action) => {
      state.value = action.payload
    },

    // Special reducer for hydrating the state
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.user,
        };
      },
    },
  },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state) => state.user.value;
export default userSlice.reducer;