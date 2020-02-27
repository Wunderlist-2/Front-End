import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';

const SignIn = (props) => {
    return (
        <>
            <Formik
                initialValues={{ user_name: "", email: "", password: "" }}
                onSubmit={(values, tools, ) => {
                    console.log(tools);
                    tools.resetForm()
                    tools.setSubmitting(false)

                }}>
                {/* {({isSubmitting})} => ( */}

                <Form>
                    <Field type="text" name="user_name" placeholder="Pick username" />
                    <Field type="email" name="email" placeholder="Email address" />
                    <Field type="password" name="password" placeholder="Pick password" />
                    <button type="submit">Submit</button>
                </Form>
                {/* ) */}
                {/* disabled={isSubmitting} */}
            </Formik>
        </>
    )
}

export default SignIn;