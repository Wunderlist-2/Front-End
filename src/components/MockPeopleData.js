import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css'

const MockPeopleData = () => {
    //store dummy data into state
    const [peopleArr, setPeople] = useState([])

    useEffect(() => {
        axios
        .get('https://randomuser.me/api/?results=4')
        .then(res => setPeople(res.data.results))
    }, [])
    return (
        <div className='peopleArray'>
            <h1>Join these people in using our popular app:</h1>
            {peopleArr.map(people => {
                return (
                <li>{people.login.username}</li>
                )
            })}
        </div>
    )
}

export default MockPeopleData;