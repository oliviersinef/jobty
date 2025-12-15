import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Decouverte from './pages/Decouverte.jsx';  // ✅ D majuscule
import Connexion from './pages/Connexion.jsx';    // ✅ C majuscule
import Marketplace from './pages/Marketplace.jsx'; // ✅ M majuscule
import Portfolio from './pages/Portfolio.jsx';     // ✅ P majuscule
import Localisation from './pages/Localisation.jsx'; // ✅ L majuscule
import JobAlerte from './pages/JobAlerte.jsx';     // ✅ J et A majuscules
import JobExperience from './pages/JobExperience.jsx'; // ✅ J et E majuscules
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