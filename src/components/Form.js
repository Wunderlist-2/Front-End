import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validationSchema } from '../utils/validationSchema'
import './index.css'
import { useHistory, useRouteMatch } from 'react-router'
import { useDispatch } from 'react-redux'
import { login, register } from '../redux/thunks'

const LoginSignup = () => {
  const { path } = useRouteMatch()
  const { goBack, push } = useHistory()
  const dispatch = useDispatch()

  return (
    <div className='form-container'>
      <section>
        {path === '/signin' ? (
          <h1>Sign in below</h1>
        ) : (
          <h1>New user? Register below.</h1>
        )}

        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            path === '/signin'
              ? dispatch(login(values))
              : dispatch(register(values))
            resetForm()
            push('/home')
          }}
        >
          <Form>
            <ErrorMessage className='error' name='username' />
            <Field type='text' name='username' placeholder='Username' />
            <ErrorMessage className='error' name='password' />
            <Field type='password' name='password' placeholder='Password' />
            <div className='btn-div'>
              <button className='btn' type='submit'>
                Submit
              </button>
              <button className='btn' type='button' onClick={() => goBack()}>
                Back
              </button>
            </div>
          </Form>
        </Formik>
      </section>
    </div>
  )
}

export default LoginSignup
