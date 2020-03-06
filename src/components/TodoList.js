import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editTodo } from '../redux/thunks'
import NewTodoForm from './NewTodoForm'

const TodoList = () => {
  const { todos } = useSelector(state => state)
  const dispatch = useDispatch()

  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const results = todos.filter(todo =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm, todos])

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className='form-container'>
      <NewTodoForm />

      <form>
        <input
          className='searchForm'
          id='name'
          type='text'
          name='textfield'
          placeholder='Search'
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      {searchResults.map(todo => {
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
