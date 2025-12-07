import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Decouverte from './pages/Decouverte';  // ✅ Majuscule ici
import Connexion from './pages/Connexion';
import Marketplace from './pages/Marketplace';
import Portfolio from './pages/portfolio';

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