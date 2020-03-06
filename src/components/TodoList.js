import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editTodo, deleteTodo } from '../redux/thunks'
import NewTodoForm from './NewTodoForm'
import EditTodoForm from '../components/EditForm';

const TodoList = ({ id }) => {
  const { todos } = useSelector(state => state)
  const dispatch = useDispatch()
  
  
  const [searchTerm, setSearchTerm] = useState("");  
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = todos.filter(todo => (
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    ))
     setSearchResults(results);
   }, [searchTerm]);

   const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  

const [editing, setEditing] = useState(false);
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
    dispatch(deleteTodo(todos.id));
  };

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
          <div className='todo-container'>
          <div className='todo-item'>
            <div>{todo.title}</div>
            <p>{todo.completed}</p>
            <button type='button' >Edit</button>
            <button type='button' >Delete</button>
          </>
            <div><label className='date-to-complete'>Date to be completed:<input type='date'></input></label></div>
            <label className='completed-label'>Completed<input type='checkbox'></input></label>
            <div className='btn-container'>
            <button type='button' className='btn-edit' onClick = {()=> (
              editing && <EditTodoForm id={id}/> )} >Edit</button>
            <button type='button' className='btn-delete' onClick={handleDelete} >Delete</button>
            </div>
          </div>
          </div>

        )
      })}
    </div>
  )
}

export default TodoList
