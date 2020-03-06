import React from 'react'
import { Link } from 'react-router-dom'
import MockPeopleData from './MockPeopleData'
import './index.css'


const WelcomePage = () => (
  <div className='container'>
    <h1>Welcome to Wunderlist 2</h1>
    <Link to='/signin'>
      <button className='welcome-btn' type='button'>
        Login
      </button>
    </Link>
    <Link to='/register'>
      <button className='welcome-btn' type='button'>
        Register
      </button>
    </Link>
    <MockPeopleData/>
  </div>
)

export default WelcomePage
