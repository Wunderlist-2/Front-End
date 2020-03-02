import axios from 'axios'

import { changeLoggedIn } from "../slices"
import { setTodos } from "../slices"

export const login = values => dispatch => {
  axios
   .post('https://wunderlist-v2.herokuapp.com/api/users/login', values)
   .then(res => {
     dispatch(changeLoggedIn(res.loggedIn))
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