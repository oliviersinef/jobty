import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Decouverte from './pages/decouverte';
import Connexion from './pages/connexion';
import Marketplace from './pages/marketplace'; // 🆕 Ajout
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decouverte" element={<Decouverte />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/marketplace" element={<Marketplace />} /> {/* 🆕 */}
      </Routes>
    </Router>
  );
}

export default App;