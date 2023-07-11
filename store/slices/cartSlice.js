import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  value: [],
  tickets: []
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

    addTickets: (state, action) => {
      if (state.tickets.length === 0) {
        state.tickets.push(action.payload)
      } else if (state.tickets[0].activityId === action.payload.activityId) {
        const ticketIndex = state.tickets.findIndex(item => item.activityId === action.payload.activityId)
        state.tickets[ticketIndex] = action.payload
      } else {
        return
      }
    },

    removeCart: (state, action) => {
      state.value.splice(action.payload, 1)
    },

    addDate: (state, action) => {
      const ticketIndex = state.tickets.findIndex(item => item.activityId === action.payload.activityId)
      state.tickets[ticketIndex].date = action.payload.date
    },

    addStartTime: (state, action) => {
      const ticketIndex = state.tickets.findIndex(item => item.activityId === action.payload.activityId)
      state.tickets[ticketIndex].startTime = action.payload.time
    },

    addEndTime: (state, action) => {
      const ticketIndex = state.tickets.findIndex(item => item.activityId === action.payload.activityId)
      state.tickets[ticketIndex].endTime = action.payload.time
    },

    updateDuration: (state, action) => {
      const ticketIndex = state.tickets.findIndex(item => item.activityId === action.payload.activityId)
      state.tickets[ticketIndex].duration = action.payload.durationVal
    },

    updateTotal: (state, action) => {
      const ticketIndex = state.tickets.findIndex(item => item.activityId === action.payload.activityId)
      state.tickets[ticketIndex].total = action.payload.total
    },

    setCount: (state, action) => {
      const ticketIndex = state.tickets.findIndex(item => item.activityId === action.payload.activityId)
      state.tickets[ticketIndex].count = action.payload.count
      state.value[action.payload.index].count = action.payload.count
    },
    
    clearCart: (state, action) => {
      state.value = action.payload
    },

    clearTickets: (state, action) => {
      state.tickets = action.payload
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
export const { addTickets } = cartSlice.actions;
export const { removeCart } = cartSlice.actions;
export const { clearCart } = cartSlice.actions;
export const { clearTickets } = cartSlice.actions;
export const { addDate } = cartSlice.actions;
export const { addStartTime } = cartSlice.actions;
export const { addEndTime } = cartSlice.actions;
export const { updateTotal } = cartSlice.actions;
export const { updateDuration } = cartSlice.actions;
export const { setCount } = cartSlice.actions;
export const selectCart = (state) => state.cart.value;
export const selectTickets = (state) => state.cart.tickets
export default cartSlice.reducer;