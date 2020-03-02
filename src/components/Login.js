import React, { useState } from "react";
import axios from 'axios';
// import { useDispatch } from 'react-redux'
// import { login } from '../redux/thunks'
// import { changeLoggedIn } from "../redux/slices"

const Login = props => {
 
  const [status, setStatus] = useState({
    username: '',
    password: ''
  })

  // const dispatch = useDispatch()

  const handleChange = e => {
    setStatus({
      ...status,       
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('https://wunderlist-v2.herokuapp.com/api/users/login', status)
      .then(res=> {
        console.log(res)
        props.history.push("/todo")
      })
      .catch(err=>console.log(err))
  }

  // const handleSubmit = values => {
  //   dispatch(changeLoggedIn(true))
  //   dispatch(login(values))
  // }

   return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}><br/>
      <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="username"
            value={status.username}
            onChange={handleChange}
          />
       <label htmlFor="name">Password:</label>
          <input
            type="password"
            name="password"
            value={status.password}
            onChange={handleChange}
          />          
          <button type='submit'>Log in</button>           
        </form>
    </>
  );
};

export default Login;
