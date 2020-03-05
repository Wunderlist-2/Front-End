import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import './index.css'


const NewTodoForm = () => {
    const TodoValidation = Yup.object().shape({
        title: Yup.string()
          .required('Enter your todo item')
      })
    return (
        <div>
            <section>
              <h1 className='todo-header'>Add a todo item</h1>
        <Formik
        initialValues={{title: '', completed: false}}
        validationSchema={TodoValidation}
        onSubmit={(values, {resetForm}) => {
          console.log(values)
          resetForm();
        }

        }
        >
            <Form>
              <ErrorMessage className='error' name='title'/>
              <Field type='text' name='title' placeholder='Enter a Todo Item'/>
              <button className='btn-add' type='submit'>Add Item</button>
            </Form>

        </Formik>
        </section>
        </div>
    )
}

export default NewTodoForm;