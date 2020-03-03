import React, { useState } from "react";
import axios from 'axios';

const initialTodos = {
  user_id: 1, 
  title: "Take out trash", 
  due_date: null, 
  date_completed: null, 
  completed: "false" 
};

const TodoList = ({ todos }) => {
  const [editing, setEditing] = useState(false);
  const [todoEdit, setTodoEdit] = useState(initialTodos);
  const [newTodo, setNewTodo]  = useState(initialTodos);

  const editTodos = todo => {
    setEditing(true);
    setTodoEdit(todo);
  };

  const saveEdit = e => {
    e.preventDefault();
    axios
      .put(`https://wunderlist-v2.herokuapp.com/api/todos/${todoEdit.id}`, todoEdit)
      .then(res => {
        setEditing(false)
        setTodoEdit(initialTodos)
      })
      .catch((err) => console.log(err));
  };

  const deleteTodos = todos => {
    axios
      .delete(`https://wunderlist-v2.herokuapp.com/api/todos${todos.id}`, todos)
      .then(res => setTodoEdit(initialTodos))
      .catch(err => console.log(err));
  };
 
  const addTodos = e => {
    e.preventDefault();
    axios
       .post(`https://wunderlist-v2.herokuapp.com/api/todos`, newTodo)
       .then(res => {
        setNewTodo(initialTodos);
       })
       .catch(err => console.log(err))
  }
 
  return (
    <div>
      <p>List</p>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={() => editTodos(todo)}>
            <span>
              <span className="delete" onClick={e => {
                    e.preventDefault();
                    deleteTodos(todo)
                  }
                }>
                  x
              </span>{" "}
              {todo.id}
            </span>
            
          </li>
        ))}
      </ul>      
      {editing && (
        <form onSubmit={saveEdit}>
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
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <form onSubmit={addTodos}>
        <legend>add todo</legend>
        <label>
          Title:
          <input
            onChange={e =>
              setNewTodo({ ...newTodo, title: e.target.value })
            }
            value={newTodo.title}
          />
        </label>
        <div className="button-row">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default TodoList;