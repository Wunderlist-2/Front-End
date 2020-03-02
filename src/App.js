import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.scss";
import Login from "./components/Login";
import Register from "./components/Register";
import TodoPage from './components/TodoPage';

const App = () => {
  return (
    <Router>
      <div className="App">
               
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path='/todo' component={TodoPage} />
       </div>
    </Router>
  );
}

export default App
