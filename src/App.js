import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Curriculum from './components/Curriculum/Curriculum'

function App() {
  return (
    <div className="App">
      <Route
        path='/'
        component={Navbar}
      />
      <Route
        exact path='/'
        component={Home}
      />
      <Route
        exact path='/curriculum'
        component={Curriculum}
      />
    </div>
  );
}

export default App;
