import { createSlice } from '@reduxjs/toolkit'

export const rootSlice = createSlice({
  name: 'todoReducer',
  initialState: {
    isLoggedIn: false,
    todos: []
  },
  reducers: {
    changeLoggedIn(state, action) {
      state.isloggedIn = action.payload
    },
    setTodos(state, action) {
      state.todos = action.payload
    },
  },
})

// export const selectCount = state => state.counter
export const { changeLoggedIn, setTodos } = rootSlice.actions

// export default counterSlice.reducer
export default rootSlice.reducer