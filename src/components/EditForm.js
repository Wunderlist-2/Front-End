import React from 'react'
import { Formik, Form, Field } from 'formik'
import './index.css'
import { useSelector, useDispatch } from 'react-redux';
import { editTodo } from '../redux/thunks';

const EditTodoForm = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <section>
        <Formik
          initialValues={{ title: '', completed: false }}
          onSubmit={(values, { resetForm }) => {
            console.log(values)
            dispatch(editTodo(values, id))
            resetForm()
          }}
        >
          <Form>
            <Field type='text' name='title' placeholder='Enter a Todo Item' />
            <button type='button'>Edit Item</button>
          </Form>
        </Formik>
      </section>
    </div>
  )
}

export default EditTodoForm
