import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Decouverte from './pages/Decouverte'; // ✅ Majuscule
import Connexion from './pages/connexion';
import Marketplace from './pages/marketplace';
import Portfolio from './pages/portfolio'; // ✅ Vérifiez aussi celui-ci

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