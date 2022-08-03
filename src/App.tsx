import React from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/static/nav/Nav';
import Footer from './components/static/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import './App.css';
import ListaTema from './components/tema/listatema/ListaTema';
import ListaPostagem from './components/postagem/listapostagem/ListaPostagem';

function App() {
  return(
    <Router>
      <Nav />
        <div style={{ height: 'calc(100vh - 150px)' }}>
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/home" element={ <Home /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/cadastro" element={ <Cadastro /> } />
            <Route path="/temas" element={ <ListaTema /> } />
            <Route path="/posts" element={ <ListaPostagem /> } />
          </Routes>
        </div>
      <Footer />
    </Router>
    )
}

export default App;
