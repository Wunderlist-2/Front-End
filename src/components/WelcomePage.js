import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const WelcomePage = () => {
    return (
        <div className="container-margin">
            <h1>Welcome please log in or register if you havent allready</h1>
            <Link to='/signin'>
                <button type='submit'>Login</button>
            </Link>
            <Link to='/register'>
                <button type='submit'>Register</button>
            </Link>
        </div>
    )
}

export default WelcomePage;