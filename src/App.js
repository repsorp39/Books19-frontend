import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ReadBook from './pages/ReadBook';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}></Route>  
        <Route path='/collection' Component={Collection}></Route>
        <Route path='/read/:bookid' Component={ReadBook}> </Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/register' Component={Register}></Route>
      </Routes>
    </Router>
  );
};

export default App;  