import React from 'react';
import { Grid } from '@material-ui/core';
import Nav from './components/static/nav/Nav';
import Footer from './components/static/footer/Footer';
import Home from './pages/home/Home'
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  );
}

export default App;
