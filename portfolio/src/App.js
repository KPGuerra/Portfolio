import React from 'react'
import './App.css';
import { BrowserRouter} from 'react-router-dom'


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
