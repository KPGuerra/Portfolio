import React from 'react'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'


import Home from './Components/HomePage/Home.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Routes from './Components/Navbar/Routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar> </Navbar>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
