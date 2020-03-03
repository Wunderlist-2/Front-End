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
            .required('Username is required'),
        password: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Password is required'),
    })

    return (
        <div className='container'>
            {path === '/signin' ? (
                <h1>Sign in below</h1>
            ) : (
                    <h1>New user? Register below.</h1>
                )}

            <Formik
                initialValues={{ user_name: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, tools) => {
                    // the object we need is in values
                    // need ternary to dispatch to correct api endpoint if using the same form
                    path === '/signin' ? console.log(values) : console.log(values)
                    tools.resetForm()
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        {errors.user_name && touched.user_name && (
                            <span>{errors.user_name}</span>
                        )}
                        <Field type='text' name='user_name' placeholder='Username' />
                        {errors.password && touched.password && (
                            <span>{errors.password}</span>
                        )}
                        <Field type='password' name='password' placeholder='Password' />
                        <button className='btn' type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>

            <button className='btn' type='button' onClick={() => history.goBack()}>
                Back
      </button>
        </div>
    )
}

export default LoginSignup