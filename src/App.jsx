import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';           // H majuscule
import Decouverte from './pages/Decouverte';  // D majuscule
import Connexion from './pages/Connexion';    // C majuscule
import Marketplace from './pages/Marketplace'; // M majuscule
import Portfolio from './pages/Portfolio';     // P majuscule
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decouverte" element={<Decouverte />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;