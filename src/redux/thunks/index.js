import {
  changeLoggedIn,
  setTodos,
  setRegisterSuccess,
  setApiError,
  setUserId,
} from '../slices'
import { axiosWithBaseURL } from '../../utils/axios'

export const login = values => async dispatch => {
  try {
    const { data } = await axiosWithBaseURL().post('/users/login', values)
    dispatch(changeLoggedIn(data.isLoggedIn))
    dispatch(setUserId(data.id))
    dispatch(setTodos(data.todos))
  } catch (e) {
    dispatch(setApiError(e.response.data))
  }
}

export const register = values => async dispatch => {
  try {
    const { data } = await axiosWithBaseURL().post('/users/register', values)
    dispatch(changeLoggedIn(data.isLoggedIn))
    dispatch(setUserId(data.id))
    dispatch(setRegisterSuccess(data.username))
    dispatch(setApiError(null))
  } catch (e) {
    dispatch(setApiError(e.response.data))
  }
}

export const editTodo = ({ id, title, user_id }) => async dispatch => {
  try {
    const { data } = await axiosWithBaseURL().put(`/todos/${id}`, {
      title: title,
      user_id: user_id,
    })
    dispatch(setTodos(data.updated_list))
    dispatch(setApiError(null))
  } catch (e) {
    dispatch(setApiError(e.response.data))
  }
}

export const deleteTodo = id => async dispatch => {
  try {
    const { data } = await axiosWithBaseURL().delete(`/todos/${id}`)
    dispatch(setTodos(data.updated_list))
    dispatch(setApiError(null))
  } catch (e) {
    dispatch(setApiError(e.response.data))
  }
}

export const addTodo = (title, user_id) => async dispatch => {
  try {
    const { data } = await axiosWithBaseURL().post(`/todos`, {
      title,
      user_id,
    })
    dispatch(setTodos(data.updated_list))
    dispatch(setApiError(null))
  } catch (e) {
    dispatch(setApiError(e.response.data))
  }
}
