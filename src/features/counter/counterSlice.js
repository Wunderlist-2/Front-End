// Redux Toolkit allows us to 'mutate' the state. It doesn't actually
// mutate the state because it uses the immer library, which detects
// changes to a "draft state" and produces a brand new immutable state
// based off those changes

import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state) {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload.amount
    },
  },
})

export const selectCount = state => state.counter.value
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
