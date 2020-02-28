import React from 'react';
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import LoginSignup from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Route exact path="/welcome" component={WelcomePage} />
      <Route exact path='/signin' render={props => <LoginSignup {...props} />} />
      <Route exact path='/register' render={props => <LoginSignup {...props} />} />
    </>
  )
}

export default App
