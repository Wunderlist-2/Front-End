import React from 'react';
import { Route, } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';

const App = () => {
  return (
    <>
      {/* TODO: Make this a route, remember wrap in browser router */}
      <WelcomePage />
    </>
  )
}

export default App
