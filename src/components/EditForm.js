import React from 'react';
import {Formik, Form, Field} from 'formik';

const EditTodoForm = () => {
    return (
        <>
            <Formik
        initialValues={{title: '', completed: false}}
        onSubmit={(values, {resetForm}) => {
          todos.push(values)
          resetForm();
        }

        }
        >
            <Form>
              <Field type='text' name='title' placeholder='Enter a Todo Item'/>
              <button type='button'>Edit Item</button>
            </Form>

        </Formik>
        </>
    )
}

export default EditTodoForm;