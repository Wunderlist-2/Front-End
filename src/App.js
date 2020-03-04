import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles.scss'
import WelcomePage from './components/WelcomePage'
import TodoList from './components/TodoList'
import Form from './components/Form'
import { PrivateRoute, SignInRoute } from './utils/authRoutes'
import { Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <SignInRoute exact path='/' component={WelcomePage} />
        <SignInRoute exact path='/signin' component={Form} />
        <SignInRoute exact path='/register' component={Form} />
        <Route exact path='/todolist' render={props =><TodoList {...props}/>}/>
      </div>
    </Router>
  )
}

export default App
