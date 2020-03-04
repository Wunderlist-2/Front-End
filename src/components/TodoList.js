import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editTodo } from '../redux/thunks'
import TodoItems from './TodoItems'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const TodoList = () => {
  const { todos } = useSelector(state => state)
  const dispatch = useDispatch()

  const TodoValidation = Yup.object().shape({
    title: Yup.string()
      .required('Enter your todo item')
  })

  return (
    <div>
      <Formik
        initialValues={{title: '', due_date: null, date_completed: null, completed: false}}
        validationSchema={TodoValidation}
        onSubmit={(values, {resetForm}) => {
          todos.push(values)
          resetForm();
        }

        }
        >
            <Form>
              <ErrorMessage name='title'/>
              <Field type='text' name='title' placeholder='Enter a Todo Item'/>
              <button type='submit'>Add Item</button>
            </Form>

        </Formik>
        {todos.map(todo => {
          return (
            <>
              <div>{todo.title}</div>
            </>
          )
        })}
    </div>
  )
}

export default TodoList
