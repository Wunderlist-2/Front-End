import React, { useState, useEffect } from 'react';
import axios from 'axios';

import TodoList from './TodoList';
import TodoItems from './TodoItems';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    axios
      .post('https://wunderlist-v2.herokuapp.com/api/todos')
      .then(res => {
        setTodos(res.data.todos)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
     <TodoList todos={todos} />
     <TodoItems todos={todos} />
    </>
  )
}

export default TodoPage;