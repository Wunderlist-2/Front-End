import React, { useState } from "react";
import axios from 'axios';

const Register = props => {
 
  const [status, setStatus] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setStatus({
      ...status,       
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('https://wunderlist-v2.herokuapp.com/api/users/register', status)
      .then(res=> {
        console.log(res)
        props.history.push("/login")
      })
      .catch(err=>console.log(err))
  }

  return (
    <>
      <h1>Register</h1>
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
          <button type='submit'>submit</button>           
        </form>
    </>
  );
};

export default Register;
