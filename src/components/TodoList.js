import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editTodo } from '../redux/thunks'
import TodoItems from './TodoItems'

const TodoList = () => {
  const { todos } = useSelector(state => state)
  const dispatch = useDispatch()

  const [editing, setEditing] = useState(false)
  const [todoEdit, setTodoEdit] = useState({})
  const [newTodo, setNewTodo] = useState({})
  return (
    <div>
      <p>List</p>
      {todos.map(todo => (
        <TodoItems
          key={todo.id}
          todo={todo}
          editing={editing}
          setEditing={setEditing}
          setTodoEdit={setTodoEdit}
        />
      ))}
      {editing && (
        <form
          onSubmit={e => {
            e.preventDefault()
            dispatch(editTodo(todoEdit))
          }}
        >
          <legend>edit Todos</legend>
          <label>
            Title:
            <input
              onChange={e =>
                setTodoEdit({ ...todoEdit, title: e.target.value })
              }
              value={setTodoEdit.title}
            />
          </label>
          <div className='button-row'>
            <button type='submit'>save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <form onSubmit={() => console.log('add', newTodo)}>
        <legend>add todo</legend>
        <label>
          Title:
          <input
            onChange={e => setNewTodo({ ...newTodo, title: e.target.value })}
            value={newTodo.title}
          />
        </label>
        <div className='button-row'>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default TodoList
