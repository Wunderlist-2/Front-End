import { createSlice } from '@reduxjs/toolkit'

export const rootSlice = createSlice({
  name: 'todoReducer',
  initialState: {
    isLoggedIn: false,
    user_id: null,
    apiError: null,
    registerSuccess: null,
    todos: [],
  },
  reducers: {
    changeLoggedIn(state, action) {
      state.isLoggedIn = action.payload
    },
    setTodos(state, action) {
      state.todos = action.payload
    },
    setApiError(state, action) {
      state.apiError = action.payload
    },
    setRegisterSuccess(state, action) {
      state.registerSuccess = action.payload
    },
    setUserId(state, action) {
      state.user_id = action.payload
    },
  },
})

export const {
  changeLoggedIn,
  setTodos,
  setApiError,
  setRegisterSuccess,
  setUserId,
} = rootSlice.actions

export default rootSlice.reducer
