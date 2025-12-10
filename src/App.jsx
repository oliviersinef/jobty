import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Decouverte from './pages/Decouverte';
import Connexion from './pages/Connexion';
import Marketplace from './pages/Marketplace';
import Portfolio from './pages/Portfolio';
import Localisation from './pages/Localisation';
import JobAlerte from './pages/JobAlerte';
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