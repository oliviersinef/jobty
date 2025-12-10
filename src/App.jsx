import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Decouverte from './pages/decouverte';
import Connexion from './pages/connexion';
import Marketplace from './pages/marketplace';
import Portfolio from './pages/portfolio';
import Localisation from './pages/localisation';
import JobAlerte from './pages/jobAlerte';
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
        <Route path="/localisation" element={<Localisation />} />
        <Route path="/job-alerte" element={<JobAlerte />} />
      </Routes>
    </Router>
  );
}

export default App;