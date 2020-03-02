import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const WelcomePage = props => (
  <div className='container-margin'>
    <h1>Welcome to Wunderlist 2</h1>
    <Link to='/signin'>
      <button type='button'>Login</button>
    </Link>
    <Link to='/register'>
      <button type='button'>Register</button>
    </Link>

    <p>Welcome these new users to the site:</p>
    {props.peopleArr.map((person, i) => {
      return (
        <ul key={i}>
          <li>{person.login.username}</li>
        </ul>
      )
    })}
  </div>
)

export default WelcomePage
