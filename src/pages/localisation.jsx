import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiSearch, 
  FiMapPin, 
  FiPhone,
  FiClock,
  FiX,
  FiMenu,
  FiStar,
  FiNavigation,
  FiChevronDown,
  FiUser,
  FiFilter,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiHeart,
  FiShare2
} from 'react-icons/fi';
import { 
  FaHospital, 
  FaUtensils, 
  FaCar, 
  FaGasPump,
  FaHotel,
  FaShoppingCart,
  FaUniversity,
  FaPills,
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp 
} from 'react-icons/fa';
import { COLORS } from '../styles/colors';
import logo from '../assets/logo.png';
import './localisation.css';

function Localisation() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const suggestionsRef = useRef(null);

  // Catégories de lieux
  const categories = [
    { id: 'tous', nom: 'Tous', icon: FiMapPin, color: COLORS.primary },
    { id: 'pharmacie', nom: 'Pharmacies', icon: FaPills, color: '#28a745' },
    { id: 'sante', nom: 'Centres de santé', icon: FaHospital, color: '#dc3545' },
    { id: 'restaurant', nom: 'Restaurants', icon: FaUtensils, color: '#fd7e14' },
    { id: 'garage', nom: 'Garages', icon: FaCar, color: '#6c757d' },
    { id: 'station', nom: 'Stations-service', icon: FaGasPump, color: '#17a2b8' },
    { id: 'hotel', nom: 'Hôtels', icon: FaHotel, color: '#6852A3' },
    { id: 'supermarche', nom: 'Supermarchés', icon: FaShoppingCart, color: '#ffc107' },
    { id: 'banque', nom: 'Banques', icon: FaUniversity, color: '#343a40' }
  ];

  // Données mockées des lieux
  const lieux = [
    {
      id: 1,
      nom: 'Pharmacie du Plateau',
      categorie: 'pharmacie',
      adresse: 'Avenue Franchet d\'Esperey, Plateau',
      ville: 'Abidjan',
      pays: 'Côte d\'Ivoire',
      telephone: '+225 27 20 21 34 56',
      horaires: '7h00 - 22h00',
      ouvert24h: false,
      note: 4.5,
      avis: 128,
      image: 'https://images.unsplash.com/photo-1586015555751-63c29b4f4c0b?w=400',
      services: ['Médicaments', 'Parapharmacie', 'Conseil santé', 'Livraison'],
      lat: 5.3197,
      lng: -4.0219,
      distance: 0.5
    },
    {
      id: 2,
      nom: 'Clinique Sainte Marie',
      categorie: 'sante',
      adresse: 'Boulevard de Marseille, Marcory',
      ville: 'Abidjan',
      pays: 'Côte d\'Ivoire',
      telephone: '+225 27 21 25 67 89',
      horaires: '24h/24',
      ouvert24h: true,
      note: 4.8,
      avis: 256,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400',
      services: ['Urgences', 'Consultations', 'Radiologie', 'Laboratoire', 'Maternité'],
      lat: 5.3089,
      lng: -3.9836,
      distance: 1.2
    },
    {
      id: 3,
      nom: 'Restaurant Le Baobab',
      categorie: 'restaurant',
      adresse: 'Rue des Jardins, Zone 4',
      ville: 'Abidjan',
      pays: 'Côte d\'Ivoire',
      telephone: '+225 07 89 12 34 56',
      horaires: '11h00 - 23h00',
      ouvert24h: false,
      note: 4.3,
      avis: 89,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
      services: ['Cuisine africaine', 'Terrasse', 'Climatisation', 'WiFi gratuit', 'Parking'],
      lat: 5.3256,
      lng: -4.0089,
      distance: 0.8
    },
    {
      id: 4,
      nom: 'Garage Auto Plus',
      categorie: 'garage',
      adresse: 'Avenue de l\'Industrie, Yopougon',
      ville: 'Abidjan',
      pays: 'Côte d\'Ivoire',
      telephone: '+225 05 45 67 89 01',
      horaires: '7h30 - 18h30',
      ouvert24h: false,
      note: 4.0,
      avis: 67,
      image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400',
      services: ['Mécanique générale', 'Électricité auto', 'Climatisation', 'Vidange', 'Pneus'],
      lat: 5.3589,
      lng: -4.0678,
      distance: 3.5
    },
    {
      id: 5,
      nom: 'Station Total Cocody',
      categorie: 'station',
      adresse: 'Boulevard de France, Cocody',
      ville: 'Abidjan',
      pays: 'Côte d\'Ivoire',
      telephone: '+225 27 22 44 55 66',
      horaires: '24h/24',
      ouvert24h: true,
      note: 4.2,
      avis: 45,
      image: 'https://images.unsplash.com/photo-1565620731358-e8c038abc8d1?w=400',
      services: ['Carburant', 'Boutique', 'Lavage auto', 'Gonflage', 'Restauration rapide'],
      lat: 5.3456,
      lng: -3.9923,
      distance: 1.8
    },
    {
      id: 6,
      nom: 'Hôtel Ivoire Sofitel',
      categorie: 'hotel',
      adresse: 'Boulevard Hassan II, Cocody',
      ville: 'Abidjan',
      pays: 'Côte d\'Ivoire',
      telephone: '+225 27 22 48 26 26',
      horaires: '24h/24',
      ouvert24h: true,
      note: 4.9,
      avis: 512,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400',
      services: ['Chambres de luxe', 'Piscine', 'Restaurant', 'Spa', 'Salle de conférence', 'Casino'],
      lat: 5.3312,
      lng: -3.9745,
      distance: 2.1
    },
    {
      id: 7,
      nom: 'Carrefour Market Plateau',
      categorie: 'supermarche',
      adresse: 'Avenue Terrasson de Fougères, Plateau',
      ville: 'Abidjan',
      pays: 'Côte d\'Ivoire',
      telephone: '+225 27 20 31 32 33',
      horaires: '8h00 - 21h00',
      ouvert24h: false,
      note: 4.1,
      avis: 178,
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400',
      services: ['Alimentation', 'Produits frais', 'Électroménager', 'Livraison', 'Parking gratuit'],
      lat: 5.3178,
      lng: -4.0198,
      distance: 0.3
    },
    {
      id: 8,
      nom: 'Banque Atlantique',
      categorie: 'banque',
      adresse: 'Avenue Noguès, Plateau',
      ville: 'Abidjan',
      pays: 'Côte d\'Ivoire',
      telephone: '+225 27 20 25 25 25',
      horaires: '8h00 - 16h30',
      ouvert24h: false,
      note: 3.9,
      avis: 92,
      image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=400',
      services: ['Comptes bancaires', 'Crédits', 'Transferts', 'GAB 24h/24', 'Assurances'],
      lat: 5.3201,
      lng: -4.0234,
      distance: 0.6
    },
    {
      id: 9,
      nom: 'Pharmacie de Garde Cocody',
      categorie: 'pharmacie',
      adresse: 'Rue du Lycée Technique, Cocody',
      ville: 'Abidjan',
      pays: 'Côte d\'Ivoire',
      telephone: '+225 27 22 44 11 22',
      horaires: '24h/24',
      ouvert24h: true,
      note: 4.6,
      avis: 203,
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400',
      services: ['Urgences', 'Médicaments', 'Garde de nuit', 'Conseil pharmaceutique'],
      lat: 5.3398,
      lng: -3.9867,
      distance: 1.5
    },
    {
      id: 10,
      nom: 'Restaurant Chez Tonton',
      categorie: 'restaurant',
      adresse: 'Quartier Millionnaire, Marcory',
      ville: 'Abidjan',
      pays: 'Côte d\'Ivoire',
      telephone: '+225 07 12 34 56 78',
      horaires: '10h00 - 00h00',
      ouvert24h: false,
      note: 4.7,
      avis: 345,
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400',
      services: ['Cuisine ivoirienne', 'Grillades', 'Poisson braisé', 'Ambiance musicale', 'Terrasse'],
      lat: 5.3067,
      lng: -3.9912,
      distance: 2.3
    },
    {
      id: 11,
      nom: 'CHU de Cocody',
      categorie: 'sante',
      adresse: 'Boulevard de l\'Université, Cocody',
      ville: 'Abidjan',
      pays: 'Côte d\'Ivoire',
      telephone: '+225 27 22 44 90 00',
      horaires: '24h/24',
      ouvert24h: true,
      note: 4.4,
      avis: 678,
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400',
      services: ['Urgences', 'Spécialités médicales', 'Chirurgie', 'Pédiatrie', 'Cardiologie'],
      lat: 5.3445,
      lng: -3.9801,
      distance: 2.8
    },
    {
      id: 12,
      nom: 'Garage Moderne CFAO',
      categorie: 'garage',
      adresse: 'Zone Industrielle, Vridi',
      ville: 'Abidjan',
      pays: 'Côte d\'Ivoire',
      telephone: '+225 27 21 75 80 00',
      horaires: '8h00 - 17h00',
      ouvert24h: false,
      note: 4.3,
      avis: 156,
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400',
      services: ['Concessionnaire', 'Révision constructeur', 'Carrosserie', 'Pièces détachées'],
      lat: 5.2834,
      lng: -4.0123,
      distance: 5.2
    }
  ];

  // Suggestions de lieux populaires
  const suggestionsPopulaires = lieux
    .sort((a, b) => b.note - a.note)
    .slice(0, 6);

  // Filtrer les lieux
  const lieuxFiltres = lieux.filter(lieu => {
    const matchCategory = selectedCategory === 'tous' || lieu.categorie === selectedCategory;
    const matchSearch = lieu.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       lieu.adresse.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       lieu.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  // Géolocalisation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.log('Géolocalisation non disponible:', error);
        }
      );
    }
  }, []);

  // Scroll horizontal pour suggestions
  const scrollSuggestions = (direction) => {
    if (suggestionsRef.current) {
      const scrollAmount = 300;
      suggestionsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Obtenir l'icône de la catégorie
  const getCategoryIcon = (categorieId) => {
    const cat = categories.find(c => c.id === categorieId);
    return cat ? cat.icon : FiMapPin;
  };

  const getCategoryColor = (categorieId) => {
    const cat = categories.find(c => c.id === categorieId);
    return cat ? cat.color : COLORS.primary;
  };

  // Gestion des favoris
  const toggleFavorite = (lieuId) => {
    if (favorites.includes(lieuId)) {
      setFavorites(favorites.filter(id => id !== lieuId));
    } else {
      setFavorites([...favorites, lieuId]);
    }
  };

  // Ouvrir le popup de détails
  const openPlaceDetails = (lieu) => {
    setSelectedPlace(lieu);
    setShowPopup(true);
  };

  // Fermer le popup
  const closePopup = () => {
    setShowPopup(false);
    setSelectedPlace(null);
  };

  // Rendu des étoiles
  const renderStars = (note) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FiStar 
          key={i} 
          className={`star ${i <= note ? 'filled' : ''}`}
          style={{ 
            fill: i <= note ? '#FFD700' : 'none',
            color: i <= note ? '#FFD700' : '#ddd'
          }}
        />
      );
    }
    return stars;
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="localisation-container">
      {/* HEADER / NAVIGATION */}
      <header className="marketplace-header">
        <div className="header-content">
          <div 
            className="header-logo"
            onClick={() => navigate('/')}
          >
            <img src={logo} alt="Jobty" />
          </div>

          {/* Navigation Desktop */}
          <nav className="header-nav desktop-nav">
            <a 
              href="/decouverte" 
              className="nav-item"
              onClick={(e) => { e.preventDefault(); navigate('/decouverte'); }}
            >
              Découvrir
            </a>
            <a 
              href="/marketplace" 
              className="nav-item"
              onClick={(e) => { e.preventDefault(); navigate('/marketplace'); }}
            >
              Marketplace
            </a>
            <a 
              href="/portfolio" 
              className="nav-item"
              onClick={(e) => { e.preventDefault(); navigate('/portfolio'); }}
            >
              Portfolio
            </a>
            <a 
              href="/localisation" 
              className="nav-item active"
              onClick={(e) => { e.preventDefault(); navigate('/localisation'); }}
            >
              Localisation
            </a>
            <a 
              href="/job-alerte" 
              className="nav-item"
              onClick={(e) => { e.preventDefault(); navigate('/job-alerte'); }}
            >
              Job alerte
            </a>
            <a 
              href="/job-experience" 
              className="nav-item"
              onClick={(e) => { e.preventDefault(); navigate('/job-experience'); }}
            >
              Job expérience
            </a>
          </nav>

          <div className="header-actions">
            <div 
              className="profile-icon"
              onClick={() => navigate('/connexion')}
            >
              <FiUser />
              <span className="notification-badge">0</span>
            </div>

            <button 
              className="burger-btn"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile */}
      <div className={`sidebar-menu ${menuOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <img src={logo} alt="Jobty" className="sidebar-logo" />
          <button 
            className="close-btn"
            onClick={closeMenu}
            aria-label="Fermer"
          >
            <FiX />
          </button>
        </div>
        <nav className="sidebar-nav">
          <a href="/decouverte" onClick={(e) => { e.preventDefault(); navigate('/decouverte'); closeMenu(); }}>
            Découvrir
          </a>
          <a href="/marketplace" onClick={(e) => { e.preventDefault(); navigate('/marketplace'); closeMenu(); }}>
            Marketplace
          </a>
          <a href="/portfolio" onClick={(e) => { e.preventDefault(); navigate('/portfolio'); closeMenu(); }}>
            Portfolio
          </a>
          <a href="/localisation" className="active" onClick={(e) => { e.preventDefault(); navigate('/localisation'); closeMenu(); }}>
            Localisation
          </a>
          <a href="/job-alerte" onClick={(e) => { e.preventDefault(); navigate('/job-alerte'); closeMenu(); }}>
            Job alerte
          </a>
          <a href="/job-experience" onClick={(e) => { e.preventDefault(); navigate('/job-experience'); closeMenu(); }}>
            Job expérience
          </a>
          <button 
            className="sidebar-connexion-btn"
            onClick={() => { navigate('/connexion'); closeMenu(); }}
          >
            Connexion
          </button>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="sidebar-overlay" onClick={closeMenu}></div>}

      {/* SECTION HERO */}
      <section className="hero-section localisation-hero">
        <h1 className="hero-title">
          Trouvez les lieux utiles<br />
          <span className="highlight">près de vous</span>
        </h1>
        <p className="hero-subtitle">
          Pharmacies, hôpitaux, restaurants, garages et plus encore à portée de main
        </p>

        {/* Barre de recherche principale */}
        <div className="search-bar-container">
          <div className="search-bar">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Rechercher un lieu, un service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => setSearchQuery('')}>
                <FiX />
              </button>
            )}
          </div>
          <button className="locate-me-btn" style={{ backgroundColor: COLORS.primary }}>
            <FiNavigation />
            <span>Me localiser</span>
          </button>
        </div>
      </section>

      {/* FILTRES PAR CATÉGORIE */}
      <section className="categories-section">
        <div className="categories-scroll">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  '--category-color': cat.color,
                  borderColor: selectedCategory === cat.id ? cat.color : 'transparent',
                  backgroundColor: selectedCategory === cat.id ? `${cat.color}15` : 'white'
                }}
              >
                <IconComponent className="category-icon" style={{ color: cat.color }} />
                <span>{cat.nom}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* CARTE INTERACTIVE */}
      <section className="map-section">
        <div className="map-container">
          {/* Simulation de carte - À remplacer par une vraie carte (Leaflet, Google Maps, etc.) */}
          <div className="map-placeholder">
            <div className="map-background">
              {/* Points sur la carte */}
              {lieuxFiltres.map((lieu) => {
                const IconComponent = getCategoryIcon(lieu.categorie);
                return (
                  <button
                    key={lieu.id}
                    className={`map-marker ${selectedPlace?.id === lieu.id ? 'active' : ''}`}
                    style={{
                      left: `${(lieu.lng + 4.1) * 500}%`,
                      top: `${(5.4 - lieu.lat) * 500}%`,
                      '--marker-color': getCategoryColor(lieu.categorie)
                    }}
                    onClick={() => openPlaceDetails(lieu)}
                  >
                    <IconComponent />
                  </button>
                );
              })}
              
              {/* Position utilisateur */}
              {userLocation && (
                <div className="user-marker">
                  <div className="user-marker-pulse"></div>
                  <div className="user-marker-dot"></div>
                </div>
              )}
            </div>

            {/* Overlay d'information */}
            <div className="map-info-overlay">
              <FiMapPin />
              <span>Carte interactive - {lieuxFiltres.length} lieux trouvés</span>
            </div>

            {/* Contrôles de la carte */}
            <div className="map-controls">
              <button className="map-control-btn">+</button>
              <button className="map-control-btn">−</button>
            </div>
          </div>

          {/* Liste des lieux (sidebar) */}
          <div className="places-sidebar">
            <div className="sidebar-title">
              <h3>Lieux à proximité</h3>
              <span className="places-count">{lieuxFiltres.length} résultats</span>
            </div>

            <div className="places-list">
              {lieuxFiltres.map((lieu) => {
                const IconComponent = getCategoryIcon(lieu.categorie);
                return (
                  <div
                    key={lieu.id}
                    className={`place-card ${selectedPlace?.id === lieu.id ? 'active' : ''}`}
                    onClick={() => openPlaceDetails(lieu)}
                  >
                    <div className="place-image">
                      <img src={lieu.image} alt={lieu.nom} />
                      <span 
                        className="place-category-badge"
                        style={{ backgroundColor: getCategoryColor(lieu.categorie) }}
                      >
                        <IconComponent />
                      </span>
                      {lieu.ouvert24h && (
                        <span className="badge-24h">24h/24</span>
                      )}
                    </div>
                    <div className="place-info">
                      <h4 className="place-name">{lieu.nom}</h4>
                      <p className="place-address">
                        <FiMapPin /> {lieu.adresse}
                      </p>
                      <div className="place-meta">
                        <div className="place-rating">
                          <FiStar style={{ fill: '#FFD700', color: '#FFD700' }} />
                          <span>{lieu.note}</span>
                          <span className="avis-count">({lieu.avis} avis)</span>
                        </div>
                        <span className="place-distance">{lieu.distance} km</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SUGGESTIONS POPULAIRES */}
      <section className="suggestions-section">
        <div className="section-header">
          <h2 className="section-title">
            <FiStar className="section-icon" style={{ color: COLORS.primary }} />
            Lieux populaires à visiter
          </h2>
          <div className="scroll-controls">
            <button 
              className="scroll-btn"
              onClick={() => scrollSuggestions('left')}
            >
              <FiChevronLeft />
            </button>
            <button 
              className="scroll-btn"
              onClick={() => scrollSuggestions('right')}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div className="suggestions-scroll" ref={suggestionsRef}>
          {suggestionsPopulaires.map((lieu) => {
            const IconComponent = getCategoryIcon(lieu.categorie);
            return (
              <div 
                key={lieu.id}
                className="suggestion-card"
                onClick={() => openPlaceDetails(lieu)}
              >
                <div className="suggestion-image">
                  <img src={lieu.image} alt={lieu.nom} />
                  <button 
                    className={`favorite-btn ${favorites.includes(lieu.id) ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(lieu.id);
                    }}
                  >
                    <FiHeart />
                  </button>
                  <span 
                    className="suggestion-category"
                    style={{ backgroundColor: getCategoryColor(lieu.categorie) }}
                  >
                    <IconComponent /> {categories.find(c => c.id === lieu.categorie)?.nom}
                  </span>
                </div>
                <div className="suggestion-content">
                  <h4>{lieu.nom}</h4>
                  <p className="suggestion-address">
                    <FiMapPin /> {lieu.ville}
                  </p>
                  <div className="suggestion-footer">
                    <div className="suggestion-rating">
                      {renderStars(Math.floor(lieu.note))}
                      <span>({lieu.avis})</span>
                    </div>
                    <span className="suggestion-distance">{lieu.distance} km</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* POPUP DE DÉTAILS */}
      {showPopup && selectedPlace && (
        <>
          <div className="popup-overlay" onClick={closePopup}></div>
          <div className="place-popup">
            <button className="popup-close" onClick={closePopup}>
              <FiX />
            </button>

            <div className="popup-image">
              <img src={selectedPlace.image} alt={selectedPlace.nom} />
              <div className="popup-actions">
                <button 
                  className={`action-btn ${favorites.includes(selectedPlace.id) ? 'active' : ''}`}
                  onClick={() => toggleFavorite(selectedPlace.id)}
                >
                  <FiHeart />
                </button>
                <button className="action-btn">
                  <FiShare2 />
                </button>
              </div>
              {selectedPlace.ouvert24h && (
                <span className="popup-badge-24h">Ouvert 24h/24</span>
              )}
            </div>

            <div className="popup-content">
              <div className="popup-header">
                <span 
                  className="popup-category-tag"
                  style={{ backgroundColor: getCategoryColor(selectedPlace.categorie) }}
                >
                  {categories.find(c => c.id === selectedPlace.categorie)?.nom}
                </span>
                <div className="popup-rating">
                  {renderStars(Math.floor(selectedPlace.note))}
                  <span>{selectedPlace.note} ({selectedPlace.avis} avis)</span>
                </div>
              </div>

              <h2 className="popup-title">{selectedPlace.nom}</h2>

              <div className="popup-info-list">
                <div className="popup-info-item">
                  <FiMapPin className="info-icon" style={{ color: COLORS.secondary }} />
                  <div>
                    <span className="info-label">Adresse</span>
                    <span className="info-value">{selectedPlace.adresse}, {selectedPlace.ville}</span>
                  </div>
                </div>

                <div className="popup-info-item">
                  <FiPhone className="info-icon" style={{ color: COLORS.primary }} />
                  <div>
                    <span className="info-label">Téléphone</span>
                    <a href={`tel:${selectedPlace.telephone}`} className="info-value phone-link">
                      {selectedPlace.telephone}
                    </a>
                  </div>
                </div>

                <div className="popup-info-item">
                  <FiClock className="info-icon" style={{ color: '#28a745' }} />
                  <div>
                    <span className="info-label">Horaires</span>
                    <span className="info-value">{selectedPlace.horaires}</span>
                  </div>
                </div>

                <div className="popup-info-item">
                  <FiNavigation className="info-icon" style={{ color: '#fd7e14' }} />
                  <div>
                    <span className="info-label">Distance</span>
                    <span className="info-value">{selectedPlace.distance} km de vous</span>
                  </div>
                </div>
              </div>

              <div className="popup-services">
                <h4>Services proposés</h4>
                <div className="services-tags">
                  {selectedPlace.services.map((service, index) => (
                    <span key={index} className="service-tag">{service}</span>
                  ))}
                </div>
              </div>

              <div className="popup-buttons">
                <a 
                  href={`tel:${selectedPlace.telephone}`}
                  className="popup-btn primary"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <FiPhone /> Appeler
                </a>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${selectedPlace.lat},${selectedPlace.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup-btn secondary"
                  style={{ borderColor: COLORS.secondary, color: COLORS.secondary }}
                >
                  <FiExternalLink /> Itinéraire
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* FOOTER */}
      <footer className="marketplace-footer">
        <div className="footer-content">
          <div className="footer-column">
            <h4 className="footer-column-title">Navigation</h4>
            <ul className="footer-links">
              <li>
                <a href="/decouverte" onClick={(e) => { e.preventDefault(); navigate('/decouverte'); }}>
                  Découvrir
                </a>
              </li>
              <li>
                <a href="/marketplace" onClick={(e) => { e.preventDefault(); navigate('/marketplace'); }}>
                  Marketplace
                </a>
              </li>
              <li>
                <a href="/portfolio" onClick={(e) => { e.preventDefault(); navigate('/portfolio'); }}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/localisation" onClick={(e) => { e.preventDefault(); navigate('/localisation'); }}>
                  Localisation
                </a>
              </li>
              <li>
                <a href="/job-alerte" onClick={(e) => { e.preventDefault(); navigate('/job-alerte'); }}>
                  Job alerte
                </a>
              </li>
              <li>
                <a href="/job-experience" onClick={(e) => { e.preventDefault(); navigate('/job-experience'); }}>
                  Job expérience
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">À propos</h4>
            <ul className="footer-links">
              <li>
                <a href="/comment-ca-marche" onClick={(e) => { e.preventDefault(); navigate('/comment-ca-marche'); }}>
                  Comment ça marche
                </a>
              </li>
              <li>
                <a href="/devenir-jobeur" onClick={(e) => { e.preventDefault(); navigate('/devenir-jobeur'); }}>
                  Devenir Jobeur
                </a>
              </li>
              <li>
                <a href="/nous-joindre" onClick={(e) => { e.preventDefault(); navigate('/nous-joindre'); }}>
                  Nous Joindre
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Légal</h4>
            <ul className="footer-links">
              <li>
                <a href="/blog" onClick={(e) => { e.preventDefault(); navigate('/blog'); }}>
                  Blog
                </a>
              </li>
              <li>
                <a href="/conditions" onClick={(e) => { e.preventDefault(); navigate('/conditions'); }}>
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="/parametres" onClick={(e) => { e.preventDefault(); navigate('/parametres'); }}>
                  Paramètres
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaWhatsapp />
            </a>
          </div>
          <p className="footer-copyright">© 2024 Jobty - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}

export default Localisation;