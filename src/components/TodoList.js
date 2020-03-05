import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editTodo } from '../redux/thunks'
import NewTodoForm from './NewTodoForm'

const TodoList = () => {
  const { todos } = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div className='form-container'>
      <NewTodoForm/>
      
        {todos.map(todo => {
          return (
            <>
              <div>{todo.title}</div>
              <p>{todo.completed}</p>
              <button type='button'>Edit</button>
              <button type='button'>Delete</button>
            </>
          )
        })}
    </div>
  )
}

export default TodoList
