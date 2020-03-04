import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';


const NewTodoForm = () => {
    const TodoValidation = Yup.object().shape({
        title: Yup.string()
          .required('Enter your todo item')
      })
    return (
        <>
        <Formik
        initialValues={{title: '', completed: false}}
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
        </>
    )
}

export default NewTodoForm;