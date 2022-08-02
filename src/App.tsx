import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/static/nav/Nav';
import Footer from './components/static/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import './App.css';

function App() {
  return(
    <Router>
      <Nav />
        <div style={{ height: 'calc(100vh - 150px)' }}>
          <Routes> 
            <Route path="/home" element={ <Home /> } />
            <Route path="/" element={ <Login /> } />
            <Route path='/cadastro' element={ <Cadastro /> } />
          </Routes>
        </div>
      <Footer />
    </Router>
    )
}

export default App;
