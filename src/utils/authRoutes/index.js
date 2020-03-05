import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useSelector(state => state)
  return (
    <Route
      {...rest}
      render={() => {
        if (isLoggedIn) {
          return <Component />
        } else {
          return <Redirect to='/' />
        }
      }}
    />
  )
}

export const SignInRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useSelector(state => state)
  return (
    <Route
      {...rest}
      render={() => {
        if (isLoggedIn) {
          return <Redirect to='/home' />
        } else {
          return <Component />
        }
      }}
    />
  )
}
