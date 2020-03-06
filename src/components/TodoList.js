import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from '../redux/thunks'
import NewTodoForm from './NewTodoForm'
import EditTodoForm from '../components/EditForm'

const TodoList = () => {
  const { todos } = useSelector(state => state)
  const dispatch = useDispatch()

  const [editing, setEditing] = useState({ isEditing: false, id: null })
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
  const handleDelete = id => {
    dispatch(deleteTodo(id))
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
            <div key={todo.id} className='todo-container'>
              <div className='todo-item'>
                <div>{todo.title}</div>
                <label className='date-to-complete'>
                  Date to be completed:<input type='date'></input>
                </label>
                <div>
                  <label className='completed-label'>
                    Completed<input type='checkbox'></input>
                  </label>
                </div>
                <div className='btn-container'>
                  <button
                    type='button'
                    className='btn-edit'
                    onClick={() =>
                      setEditing({
                        ...editing,
                        isEditing: !editing.isEditing,
                        id: todo.id,
                      })
                    }
                  >
                    Edit
                  </button>
                  <button
                    type='button'
                    className='btn-delete'
                    onClick={() => handleDelete(todo.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            {editing.isEditing && editing.id === todo.id && (
              <EditTodoForm todo={todo} />
            )}
          </>
        )
      })}
    </div>
  )
}

export default TodoList
