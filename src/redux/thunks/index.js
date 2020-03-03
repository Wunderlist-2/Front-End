import {
  changeLoggedIn,
  setTodos,
  setRegisterSuccess,
  editTodoItem,
  setApiError,
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
    const { data } = await axiosWithBaseURL().put(`/api/todos/${todo.id}`, {
      title: todo.title,
      user_id: todo.user_id,
      due_date: todo.due_date,
      date_completed: todo.due_date,
      completed: todo.completed,
    })
    dispatch(editTodoItem(data.todo))
    dispatch(setApiError(null))
  } catch (e) {
    dispatch(setApiError(e))
  }
}
