import axios from 'axios'

import { changeLoggedIn, setTodos } from "../slices"

export const login = values => dispatch => {
  axios
   .post('https://wunderlist-v2.herokuapp.com/api/users/login', values)
   .then(res => {
     dispatch(changeLoggedIn(res.isLoggedIn))
   })
   .catch(err => console.log(err))
}

export const register = values => dispatch => {
  axios
    .post('https://wunderlist-v2.herokuapp.com/api/users/register', values)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export const getTodo = () => dispatch => {
  axios
    .post('https://wunderlist-v2.herokuapp.com/api/todos')
    .then(res => {
      dispatch(setTodos(res.date))
    })
    .catch(err => console.log(err))
}

export const updateTodo = (id, value) => dispatch => {
  axios
    .put(`https://wunderlist-v2.herokuapp.com/api/todos/${id}`, value)
    .then(res => {
      setEditing(false)
      setTodoEdit(initialTodos)
    })
    .catch((err) => console.log(err));
}

export const deleteTodo = id => dispatch => {
  axios
    .delete(`https://wunderlist-v2.herokuapp.com/api/todos${id}`)
    .then(res => setTodoEdit(initialTodos))
    .catch(err => console.log(err));
}

export const addTodo = newTodo => dispatch => {
  e.preventDefault();
  axios
     .post(`https://wunderlist-v2.herokuapp.com/api/todos`, newTodo)
     .then(res => {
      setNewTodo(initialTodos);
     })
     .catch(err => console.log(err))
}