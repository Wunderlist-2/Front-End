import { createSlice } from '@reduxjs/toolkit'

export const rootSlice = createSlice({
  name: 'todoReducer',
  initialState: {
    isLoggedIn: false,
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
    editTodoItem(state, action) {
      state.todos.find(
        todo => todo.id === action.payload.id && (todo = action.payload)
      )
    },
  },
})

export const {
  changeLoggedIn,
  setTodos,
  setApiError,
  setRegisterSuccess,
  editTodoItem,
} = rootSlice.actions

export default rootSlice.reducer
