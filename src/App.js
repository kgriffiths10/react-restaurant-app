import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter


import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Specials from './components/Specials';

function App() {
  return (
    <Router>
      <Nav />
      <Main />
      <Specials />
      <Footer />
    </Router>
  );
}

export default App;
