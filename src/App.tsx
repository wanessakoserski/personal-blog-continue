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
import CadastroPost from './components/postagem/cadastrar/Cadastro';
import CadastroTema from './components/tema/cadastrar/Cadastro';
import DeletarPostagem from './components/postagem/deletar/Deletar';
import DeletarTema from './components/tema/deletar/Deletar';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './store/store';
import 'react-toastify/dist/ReactToastify.css';
import ListaUsuario from './components/usuario/listausuario/ListaUsuario';

function App() {
  return(

    <Provider store={store}>

      <ToastContainer />

      <Router>
        <Nav />
          <div className='main'>
            <Routes>
              <Route path="/" element={ <Login /> } />
              <Route path="/home" element={ <Home /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/cadastro" element={ <Cadastro /> } />
              <Route path="/temas" element={ <ListaTema /> } />
              <Route path="/posts" element={ <ListaPostagem /> } />
              <Route path="/usuarios" element={ <ListaUsuario /> } />
              <Route path="/formularioPost" element={ <CadastroPost /> } />
              <Route path="/formularioPost/:id" element={ <CadastroPost /> } />
              <Route path="/formularioTema" element={<CadastroTema />} />
              <Route path="/formularioTema/:id" element={<CadastroTema />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
            </Routes>
          </div>
        <Footer />
      </Router>

    </Provider>
    )
}

export default App;
