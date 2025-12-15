import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';              // ✅ h minuscule
import Decouverte from './pages/decouverte.jsx';   // ✅ d minuscule
import Connexion from './pages/connexion.jsx';     // ✅ c minuscule
import Marketplace from './pages/marketplace.jsx'; // ✅ m minuscule
import Portfolio from './pages/portfolio.jsx';     // ✅ p minuscule
import Localisation from './pages/localisation.jsx'; // ✅ l minuscule
import JobAlerte from './pages/jobAlerte.jsx';     // ✅ j minuscule, A majuscule
import JobExperience from './pages/jobExperience.jsx'; // ✅ j minuscule, E majuscule
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
         <Route path="/job-experience" element={<JobExperience />} />
      </Routes>
    </Router>
  );
}

export default App;