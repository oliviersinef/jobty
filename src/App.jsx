import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';              // ✅ h minuscule
import Decouverte from './pages/decouverte.jsx';
import Connexion from './pages/connexion.jsx';
import Marketplace from './pages/marketplace.jsx';
import Portfolio from './pages/portfolio.jsx';
import Localisation from './pages/localisation.jsx';
import JobAlerte from './pages/jobAlerte.jsx';
import JobExperience from './pages/jobExperience.jsx';
import CollaborationSpace from './pages/collaborationSpace.jsx';
import DashboardFreelance from './pages/dashboardFreelance.jsx';
import ProfilFreelance from "./pages/ProfilFreelance.jsx";
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
        <Route path="/collaboration/:freelanceId" element={<CollaborationSpace />} />
        <Route path="/dashboard-freelance" element={<DashboardFreelance />} />
        <Route path="/profil-freelance/" element={<ProfilFreelance />} />
      </Routes>
    </Router>
  );
}

export default App;