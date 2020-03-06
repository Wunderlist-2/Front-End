import React from 'react'
import { Formik, Form, Field } from 'formik'
import './index.css'
import { useDispatch } from 'react-redux'
import { editTodo } from '../redux/thunks'

const EditTodoForm = ({ todo, setEditing }) => {
  const dispatch = useDispatch()
  console.log(setEditing)
  return (
    <div className='container'>
      <Formik
        initialValues={{ title: todo.title }}
        onSubmit={({ title }) => {
          dispatch(editTodo({ ...todo, title }))
          setEditing({
            isEditing: false,
            id: null,
          })
        }}
      >
        <Form>
          <Field type='text' name='title' placeholder='Enter a Todo Item' />
          <button type='submit'>Edit Item</button>
        </Form>
      </Formik>
    </div>
  )
}

export default EditTodoForm
