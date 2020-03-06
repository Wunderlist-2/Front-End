import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './index.css'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../redux/thunks'

const NewTodoForm = () => {
  const { user_id } = useSelector(state => state)
  const dispatch = useDispatch()
  const TodoValidation = Yup.object().shape({
    title: Yup.string().required('Enter your todo item'),
  })
  return (
    <div>
      <section>
        <h1 className='todo-header'>Add a todo item</h1>
        <Formik
          initialValues={{ title: '' }}
          validationSchema={TodoValidation}
          onSubmit={(values, { resetForm }) => {
            dispatch(addTodo(values, user_id))
            resetForm()
          }}
        >
          <Form>
            <ErrorMessage className='error' name='title' />
            <Field type='text' name='title' placeholder='Enter a Todo Item' />
            <button className='btn-add' type='submit'>
              Add Item
            </button>
          </Form>
        </Formik>
      </section>
    </div>
  )
}

export default NewTodoForm
