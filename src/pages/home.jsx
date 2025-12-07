import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { COLORS } from '../styles/colors';
import logo from '../assets/logo.png';
import './home.css';

function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [placeholderText, setPlaceholderText] = useState('lieux, secteur d\'activité, ville, quartier...');

  // Animation du placeholder
  useEffect(() => {
    const placeholders = [
      'lieux, secteur d\'activité, ville, quartier...',
      'Plombier à Dakar',
      'Électricien à Abidjan',
      'Développeur à Lagos',
      'Menuisier à Douala',
      'Comptable à Accra'
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % placeholders.length;
      setPlaceholderText(placeholders[index]);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Ne rien faire si la recherche est vide
    if (!searchQuery.trim()) {
      return;
    }
    
    // Naviguer vers la marketplace avec le terme de recherche
    navigate(`/marketplace?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  // Gérer la touche Entrée
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className="home-container">
      {/* Section principale centrée */}
      <main className="main-content">
        <div className="search-section">
          {/* Logo Jobty */}
          <div className="logo-container">
            <img 
              src={logo} 
              alt="Jobty" 
              className="logo-image" 
            />
          </div>

          {/* Barre de recherche unique */}
          <form 
            className="search-form" 
            onSubmit={handleSearch}
            role="search"
          >
            <div className="search-bar">
              <input
                id="search-input"
                type="text"
                placeholder={placeholderText}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="search-input-unified"
                autoComplete="off"
                aria-label="Recherche"
              />

              <button 
                type="submit" 
                className="search-button"
                aria-label="Rechercher"
                disabled={!searchQuery.trim()}
              >
                <FiSearch className="search-button-icon" aria-hidden="true" />
              </button>
            </div>
          </form>

          {/* Boutons Découvrir et Connexion */}
          <div className="action-buttons">
            <button 
              className="action-btn discover-btn"
              onClick={() => navigate('/decouverte')}
            >
              Découvrir
            </button>
            <button 
              className="action-btn connexion-btn"
              onClick={() => navigate('/connexion')}
            >
              Connexion
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;