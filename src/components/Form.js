import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import './index.css'
import { useHistory, useRouteMatch } from 'react-router'

const LoginSignup = () => {
  const { path } = useRouteMatch()
  const history = useHistory()

  const validationSchema = Yup.object().shape({
    user_name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  })

  return (
    <div className='container-margin'>
      {path === '/signin' ? (
        <h1>Sign in below</h1>
      ) : (
        <h1>New user? Register below.</h1>
      )}

      <Formik
        initialValues={{ user_name: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, tools) => {
          console.log(values) // the object we need is in values
          tools.resetForm()
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {errors.user_name && touched.user_name ? (
              <div>{errors.user_name}</div>
            ) : null}
            <Field type='text' name='user_name' placeholder='Username' />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <Field type='password' name='password' placeholder='Password' />
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>

      <button type='button' onClick={() => history.goBack()}>
        Back
      </button>
    </div>
  )
}

export default LoginSignup
