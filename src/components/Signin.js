import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const SignIn = (props) => {
    return (
        <>
            <Formik
                initialValues={{ user_name: "", email: "", password: "" }}
                validate={values => {
                    const errors = {};
                    if (!values.user_name) {
                        errors.user_name = "You must enter a user name";
                    }
                    else if (!values.email) {
                        errors.email = "You must enter an email address";
                    }
                    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    else if (!values.password) {
                        errors.password = 'You must enter a password';
                    }
                    return errors;
                }}
                onSubmit={(values, tools, ) => {
                    console.log(values);
                    tools.resetForm()
                }}>
                <Form>
                    <ErrorMessage name="user_name" component="div" />
                    <Field type="text" name="user_name" placeholder="Pick username" />

                    <ErrorMessage name="email" component="div" />
                    <Field type="email" name="email" placeholder="Email address" />

                    <ErrorMessage name="password" component="div" />
                    <Field type="password" name="password" placeholder="Pick password" />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
}

export default SignIn;