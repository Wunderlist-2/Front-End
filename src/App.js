import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles.scss'
import WelcomePage from './components/WelcomePage'
import TodoList from './components/TodoList'
import Form from './components/Form'
import { PrivateRoute, SignInRoute } from './utils/authRoutes'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <SignInRoute exact path='/' component={WelcomePage} />
        <SignInRoute exact path='/signin' component={Form} />
        <SignInRoute exact path='/register' component={Form} />
        <PrivateRoute exact path='/home' component={TodoList} />
      </div>
    </Router>
  )
}

export default App
