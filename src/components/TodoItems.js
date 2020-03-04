import React from 'react'

const TodoItems = ({ todo, editing, setEditing, setTodoEdit }) => {
  const handleClick = () => {
    setEditing(!editing)
    setTodoEdit(todo)
  }
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.completed}</p>
      <button type='button' onClick={handleClick}>
        Edit
      </button>
      <span className='delete' onClick={() => console.log('delete', todo)}>
        {' '}
        X{' '}
      </span>
    </div>
  )
}

export default TodoItems
