import {
  changeLoggedIn,
  setTodos,
  setRegisterSuccess,
  setApiError,
  editTodoItem,
  deleteTodoItem
} from '../slices'
import { axiosWithBaseURL } from '../../utils/axios'

export const login = values => async dispatch => {
  try {
    const { data } = await axiosWithBaseURL().post('/users/login', values)
    dispatch(changeLoggedIn(data.isLoggedIn))
    dispatch(setTodos(data.todos))
  } catch (e) {
    dispatch(setApiError(e))
  }
}

export const register = values => async dispatch => {
  try {
    const { data } = await axiosWithBaseURL().post('/users/register', values)
    dispatch(changeLoggedIn(data.isLoggedIn))
    dispatch(setRegisterSuccess(data.user))
    dispatch(setApiError(null))
  } catch (e) {
    dispatch(setApiError(e))
  }
}

export const editTodo = todo => async dispatch => {
  try {
    const { data } = await axiosWithBaseURL().put(`/todos/${todo.id}`, {
      title: todo.title,
      user_id: todo.user_id,
    })
    dispatch(setTodos(data.updated_list))
    dispatch(setApiError(null))
  } catch (e) {
    dispatch(setApiError(e))
  }
}

export const deleteTodo = todo => async dispatch => {
  try {
    const { data } = await axiosWithBaseURL().delete(`/api/todos/${todo.id}`) 
    dispatch(deleteTodoItem(data.todo))
    dispatch(setApiError(null))
  } catch (e) {
    dispatch(setApiError(e))
  }
}

export const addTodo = newTodo => async dispatch => {
  try {
    const { data } = await axiosWithBaseURL().post(`/api/todos`, newTodo) 
    dispatch(setTodos(data.todo));
    dispatch(setApiError(null))
  } catch (e) {
    dispatch(setApiError(e))
  }
}