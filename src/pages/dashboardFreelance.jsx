import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FiMenu, FiX, FiUser, FiBell, FiSettings, FiLogOut,
  FiDollarSign, FiBriefcase, FiCheckCircle, FiStar,
  FiEdit3, FiPlus, FiMapPin, FiClock, FiEye,
  FiMessageCircle, FiHeart, FiShare2, FiTrash2,
  FiImage, FiLink, FiPlay, FiAward, FiTrendingUp,
  FiCalendar, FiTarget, FiZap, FiShield, FiGrid,
  FiList, FiFilter, FiSearch, FiMoreVertical, FiCamera,
  FiSave, FiLock, FiGlobe, FiDownload, FiUpload, 
  FiCreditCard, FiFileText, FiAlertCircle
} from 'react-icons/fi';

import { 
  // ... vos imports existants ...
  FiBarChart2, FiPieChart, FiActivity, FiTrendingDown,
  FiMap, FiMousePointer, FiPercent, FiUsers as FiUsersIcon
} from 'react-icons/fi';
import { FaBullhorn } from 'react-icons/fa';
import { FaHandshake, FaRocket } from 'react-icons/fa';

import logo from '../assets/logo.png';
import './dashboardFreelance.css';

function DashboardFreelance() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('apercu');
  const [viewMode, setViewMode] = useState('grid');
  const [paiementSubTab, setPaiementSubTab] = useState('recus');
  const [parametresSubTab, setParametresSubTab] = useState('notifications');
  const [pubSubTab, setPubSubTab] = useState('actives');
  const [analyticsSubTab, setAnalyticsSubTab] = useState('apercu');
  
  // Formulaire Carte Pro
  const [carteForm, setCarteForm] = useState({
    photo: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aminata',
    nom: 'Koné',
    prenom: 'Aminata',
    secteur: 'Informatique',
    specialite: 'Développeuse Full Stack',
    ville: 'Abidjan',
    pays: 'Côte d\'Ivoire',
    tarifHoraire: 15000,
    tags: ['React', 'Node.js', 'MongoDB', 'UI/UX'],
    disponible: true,
    typeBouton: 'collaborer' // 'contacter' ou 'collaborer'
  });

  // Données du freelance
  const freelance = {
    id: 1,
    ...carteForm,
    note: 4.8,
    nbAvis: 47,
    verified: true,
    plan: 'gratuit'
  };

  // Indicateurs clés
  const stats = {
    gainsTotal: 2450000,
    projetsEnCours: 3,
    projetsRealises: 89,
    noteMoyenne: 4.8,
    vuesProfile: 1247,
    messagesNonLus: 5
  };

  // Transactions
  const transactions = {
    recues: [
      { id: 1, client: 'Marc Dubois', projet: 'Site web StartupTech', montant: 150000, date: '2024-01-20', statut: 'recu' },
      { id: 2, client: 'Sophie Martin', projet: 'App mobile Restaurant', montant: 135000, date: '2024-01-18', statut: 'recu' },
      { id: 3, client: 'Jean Kouassi', projet: 'Dashboard Analytics', montant: 170000, date: '2024-01-15', statut: 'en_attente' }
    ],
    retraits: [
      { id: 1, montant: 400000, methode: 'Mobile Money', numero: '**** 1234', date: '2024-01-10', statut: 'complete' },
      { id: 2, montant: 300000, methode: 'Virement bancaire', numero: 'CI**************5678', date: '2024-01-05', statut: 'complete' },
      { id: 3, montant: 250000, methode: 'Mobile Money', numero: '**** 1234', date: '2024-01-01', statut: 'en_cours' }
    ]
  };

  // Paramètres Notifications
  const [notifSettings, setNotifSettings] = useState({
    email: true,
    collaborations: true,
    nouveautes: false,
    transactions: true,
    messages: true,
    evaluations: true,
    verification: true,
    activation: true,
    signalement: true
  });

  // Paramètres Profil
  const [profilSettings, setProfilSettings] = useState({
    afficherPosition: true,
    rechercheLocalisation: true,
    afficherTags: false
  });

  // Services
  const services = [
    {
      id: 1,
      titre: 'Création site web vitrine',
      description: 'Site web responsive avec design moderne',
      prix: 250000,
      delai: '2 semaines',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400',
      actif: true,
      vues: 342,
      commandes: 12
    },
    {
      id: 2,
      titre: 'Application web sur mesure',
      description: 'Développement complet frontend + backend',
      prix: 500000,
      delai: '1 mois',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
      actif: true,
      vues: 189,
      commandes: 7
    }
  ];

  // Posts
  const posts = [
    {
      id: 1,
      type: 'image',
      titre: 'Site e-commerce Afro Style',
      description: 'Plateforme complète avec paiement mobile money',
      medias: ['https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400'],
      likes: 234,
      commentaires: 18,
      date: '2024-01-15'
    },
    {
      id: 2,
      type: 'link',
      titre: 'Application de gestion scolaire',
      description: 'Dashboard admin + app mobile parents/élèves',
      url: 'https://demo.schoolapp.ci',
      likes: 156,
      commentaires: 12,
      date: '2024-01-10'
    }
  ];

  // Collaborations
  const collaborations = [
    {
      id: 1,
      titre: 'Site web StartupTech',
      client: 'Marc Dubois',
      clientPhoto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marc',
      statut: 'en_cours',
      progression: 65,
      montant: 300000,
      dateDebut: '2024-01-20',
      prochaineLivraison: 'Maquette finale - 2 jours'
    },
    {
      id: 2,
      titre: 'Site e-commerce Mode',
      client: 'Aïcha Traoré',
      clientPhoto: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aicha',
      statut: 'termine',
      progression: 100,
      montant: 350000,
      dateFin: '2024-01-18',
      note: 5
    }
  ];


  // Données Publicité
const publiciteStats = {
  budgetMois: 45000,
  budgetTotal: 100000,
  impressions: 12450,
  vuesProfil: 234,
  messagesRecus: 18,
  tauxConversion: 7.6
};

const campagnes = [
  {
    id: 1,
    nom: 'Bâtiment & Travaux',
    type: 'Secteur d\'activité',
    statut: 'active',
    impressions: 4230,
    clics: 89,
    ctr: 2.1,
    budgetDepense: 15000,
    budgetTotal: 30000,
    joursRestants: 15
  },
  {
    id: 2,
    nom: 'Visibilité Carte Dakar',
    type: 'Localisation',
    statut: 'active',
    impressions: 2850,
    clics: 124,
    ctr: 4.4,
    budgetDepense: 12000,
    budgetTotal: 25000,
    zone: 'Dakar (10km)'
  },
  {
    id: 3,
    nom: 'Mots-clés Premium',
    type: 'Priorité recherche',
    statut: 'active',
    impressions: 1560,
    clics: 67,
    ctr: 4.3,
    budgetDepense: 18000,
    budgetTotal: 45000,
    motsCles: ['développeur web', 'site e-commerce']
  },
  {
    id: 4,
    nom: 'Campagne été 2024',
    type: 'Secteur d\'activité',
    statut: 'pause',
    impressions: 890,
    clics: 23,
    ctr: 2.6,
    budgetDepense: 8000,
    budgetTotal: 20000
  }
];

// Données Analytics
const analyticsData = {
  vuesProfil: 2340,
  paysActifs: 12,
  visibilite: 145,
  projetsRemportes: 23,
  tauxConversion: 9.8,
  tempsMoyen: '3min 24s',
  tauxRebond: 34
};

const sourcesTrafic = [
  { source: 'Recherche organique', vues: 1120, pct: 48 },
  { source: 'Carte interactive', vues: 680, pct: 29 },
  { source: 'Publicités', vues: 340, pct: 15 },
  { source: 'Profils similaires', vues: 200, pct: 8 }
];

const topPays = [
  { pays: 'Sénégal', flag: '🇸🇳', vues: 890, pct: 38, villes: ['Dakar', 'Thiès', 'Saint-Louis'] },
  { pays: 'Nigeria', flag: '🇳🇬', vues: 560, pct: 24, villes: ['Lagos', 'Abuja', 'Ibadan'] },
  { pays: 'Côte d\'Ivoire', flag: '🇨🇮', vues: 420, pct: 18, villes: ['Abidjan', 'Yamoussoukro'] },
  { pays: 'Ghana', flag: '🇬🇭', vues: 280, pct: 12, villes: ['Accra', 'Kumasi'] },
  { pays: 'Kenya', flag: '🇰🇪', vues: 190, pct: 8, villes: ['Nairobi', 'Mombasa'] }
];

const topRealisations = [
  { id: 1, titre: 'Application e-commerce Senmarket', vues: 890, clics: 280, messages: 12, projets: 3 },
  { id: 2, titre: 'Site vitrine Agence Immobilière', vues: 670, clics: 190, messages: 8, projets: 2 },
  { id: 3, titre: 'Logo & Identité Restaurant', vues: 560, clics: 140, messages: 6, projets: 1 },
  { id: 4, titre: 'Dashboard Analytics SaaS', vues: 450, clics: 120, messages: 5, projets: 0 },
  { id: 5, titre: 'Application mobile Fitness', vues: 380, clics: 95, messages: 4, projets: 1 }
];

const performanceServices = [
  { service: 'Création site web vitrine', prix: 250000, vues: 840, devis: 28, conversion: 3.3 },
  { service: 'Application mobile', prix: 500000, vues: 670, devis: 18, conversion: 2.7 },
  { service: 'Site e-commerce complet', prix: 450000, vues: 560, devis: 15, conversion: 2.7 },
  { service: 'SEO & Référencement', prix: 80000, vues: 450, devis: 12, conversion: 2.7 }
];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleCarteFormChange = (field, value) => {
    setCarteForm({ ...carteForm, [field]: value });
  };

  const handleTagAdd = (tag) => {
    if (!carteForm.tags.includes(tag) && tag.trim()) {
      setCarteForm({ ...carteForm, tags: [...carteForm.tags, tag.trim()] });
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setCarteForm({ ...carteForm, tags: carteForm.tags.filter(t => t !== tagToRemove) });
  };

  const handleSaveCarte = () => {
    alert('Carte professionnelle mise à jour avec succès !');
  };

  const renderStars = (note) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FiStar 
          key={i} 
          style={{ 
            fill: i <= Math.floor(note) ? '#FFD700' : 'none',
            color: i <= Math.floor(note) ? '#FFD700' : '#ddd'
          }}
        />
      );
    }
    return stars;
  };

  const getStatutBadge = (statut) => {
    const statuts = {
      'en_cours': { label: 'En cours', color: '#3DC7C9' },
      'termine': { label: 'Terminé', color: '#28a745' },
      'en_attente': { label: 'En attente', color: '#ffc107' },
      'recu': { label: 'Reçu', color: '#28a745' },
      'complete': { label: 'Complété', color: '#28a745' }
    };
    const s = statuts[statut];
    return (
      <span className="dash-statut-badge" style={{ backgroundColor: `${s.color}20`, color: s.color }}>
        {s.label}
      </span>
    );
  };

  return (
    <div className="dash-page">
      {/* SIDEBAR */}
      <aside className={`dash-sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="dash-sidebar-header">
          <img 
          src={logo} alt="Jobty" className="dash-sidebar-logo" 
          onClick={() => navigate('/')} style={{ cursor: 'pointer' }}/>
          <button className="dash-close-btn" onClick={closeMenu}>
            <FiX />
          </button>
        </div>

        <div className="dash-user-card">
          <img src={freelance.photo} alt={`${freelance.prenom} ${freelance.nom}`} className="dash-user-photo" />
          <h3>{freelance.prenom} {freelance.nom}</h3>
          <p>{freelance.specialite}</p>
          <div className="dash-user-rating">
            {renderStars(freelance.note)}
            <span>{freelance.note}</span>
          </div>
        </div>

        <nav className="dash-nav">
          <button 
            className={`dash-nav-item ${activeTab === 'apercu' ? 'active' : ''}`}
            onClick={() => setActiveTab('apercu')}
          >
            <FiGrid /> Aperçu
          </button>
          <button 
            className={`dash-nav-item ${activeTab === 'carte' ? 'active' : ''}`}
            onClick={() => setActiveTab('carte')}
          >
            <FiUser /> Ma carte pro
          </button>
          <button 
            className={`dash-nav-item ${activeTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            <FiBriefcase /> Services
          </button>
          <button 
            className={`dash-nav-item ${activeTab === 'posts' ? 'active' : ''}`}
            onClick={() => setActiveTab('posts')}
          >
            <FiImage /> Réalisations
          </button>
          <button 
            className={`dash-nav-item ${activeTab === 'collaborations' ? 'active' : ''}`}
            onClick={() => setActiveTab('collaborations')}
          >
            <FaHandshake /> Collaborations
          </button>
          <button 
            className={`dash-nav-item ${activeTab === 'paiement' ? 'active' : ''}`}
            onClick={() => setActiveTab('paiement')}
          >
            <FiCreditCard /> Paiement
          </button>
          <button 
            className={`dash-nav-item ${activeTab === 'facturation' ? 'active' : ''}`}
            onClick={() => setActiveTab('facturation')}
          >
            <FiFileText /> Facturation
          </button>
          <button 
            className={`dash-nav-item ${activeTab === 'parametres' ? 'active' : ''}`}
            onClick={() => setActiveTab('parametres')}
          >
            <FiSettings /> Paramètres
          </button>

          <button 
  className={`dash-nav-item ${activeTab === 'publicite' ? 'active' : ''}`}
  onClick={() => setActiveTab('publicite')}
>
  <FaBullhorn /> Publicité
</button>
<button 
  className={`dash-nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
  onClick={() => setActiveTab('analytics')}
>
  <FiBarChart2 /> Analytics
</button>
        </nav>

        <button className="dash-logout-btn" onClick={() => navigate('/')}>
          <FiLogOut /> Déconnexion
        </button>
      </aside>

      {menuOpen && <div className="dash-overlay" onClick={closeMenu}></div>}

      {/* MAIN CONTENT */}
      <main className="dash-main">
        <header className="dash-header">
          <button className="dash-burger-btn" onClick={toggleMenu}>
            <FiMenu />
          </button>
          <h1 className="dash-page-title">
            {activeTab === 'apercu' && 'Tableau de bord'}
            {activeTab === 'carte' && 'Ma carte professionnelle'}
            {activeTab === 'services' && 'Mes services'}
            {activeTab === 'posts' && 'Mes réalisations'}
            {activeTab === 'collaborations' && 'Mes collaborations'}
            {activeTab === 'paiement' && 'Paiement'}
            {activeTab === 'facturation' && 'Facturation'}
            {activeTab === 'parametres' && 'Paramètres'}
            {activeTab === 'publicite' && 'Publicité'}
            {activeTab === 'analytics' && 'Analytics'}
          </h1>
          <div className="dash-header-actions">
            <button className="dash-notif-btn">
              <FiBell />
              <span className="dash-notif-badge">{stats.messagesNonLus}</span>
            </button>
            <button className="dash-profile-btn">
              <img src={freelance.photo} alt="" />
            </button>
          </div>
        </header>

        <div className="dash-content">
          
          {/* ONGLET APERÇU */}
          {activeTab === 'apercu' && (
            <div className="dash-apercu">
              <div className="dash-stats-grid">
                <div className="dash-stat-card primary">
                  <div className="dash-stat-icon">
                    <FiDollarSign />
                  </div>
                  <div className="dash-stat-content">
                    <span className="dash-stat-label">Gains récoltés</span>
                    <span className="dash-stat-value">{stats.gainsTotal.toLocaleString()} FCFA</span>
                    <span className="dash-stat-trend">
                      <FiTrendingUp /> +12% ce mois
                    </span>
                  </div>
                </div>

                <div className="dash-stat-card secondary">
                  <div className="dash-stat-icon">
                    <FiBriefcase />
                  </div>
                  <div className="dash-stat-content">
                    <span className="dash-stat-label">Projets en cours</span>
                    <span className="dash-stat-value">{stats.projetsEnCours}</span>
                    <span className="dash-stat-info">collaborations actives</span>
                  </div>
                </div>

                <div className="dash-stat-card accent">
                  <div className="dash-stat-icon">
                    <FiCheckCircle />
                  </div>
                  <div className="dash-stat-content">
                    <span className="dash-stat-label">Projets réalisés</span>
                    <span className="dash-stat-value">{stats.projetsRealises}</span>
                    <span className="dash-stat-info">missions complétées</span>
                  </div>
                </div>
              </div>

              <div className="dash-activity-section">
                <h2>Activité récente</h2>
                <div className="dash-activity-grid">
                  <div className="dash-activity-card">
                    <FiEye className="dash-activity-icon" />
                    <div>
                      <span className="dash-activity-label">Vues de profil</span>
                      <span className="dash-activity-value">{stats.vuesProfile}</span>
                    </div>
                  </div>
                  <div className="dash-activity-card">
                    <FiMessageCircle className="dash-activity-icon" />
                    <div>
                      <span className="dash-activity-label">Messages reçus</span>
                      <span className="dash-activity-value">23</span>
                    </div>
                  </div>
                  <div className="dash-activity-card">
                    <FiHeart className="dash-activity-icon" />
                    <div>
                      <span className="dash-activity-label">Favoris</span>
                      <span className="dash-activity-value">156</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dash-section">
                <div className="dash-section-header">
                  <h2>Projets en cours</h2>
                  <button className="dash-btn-outline" onClick={() => setActiveTab('collaborations')}>
                    Voir tout
                  </button>
                </div>
                <div className="dash-projects-quick">
                  {collaborations.filter(c => c.statut === 'en_cours').map(collab => (
                    <div key={collab.id} className="dash-project-quick-card">
                      <div className="dash-project-quick-header">
                        <img src={collab.clientPhoto} alt={collab.client} />
                        <div>
                          <h4>{collab.titre}</h4>
                          <p>{collab.client}</p>
                        </div>
                        <span className="dash-project-amount">{collab.montant.toLocaleString()} F</span>
                      </div>
                      <div className="dash-project-progress">
                        <div className="dash-progress-bar">
                          <div className="dash-progress-fill" style={{ width: `${collab.progression}%` }}></div>
                        </div>
                        <span>{collab.progression}%</span>
                      </div>
                      <p className="dash-project-next">{collab.prochaineLivraison}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ONGLET CARTE PRO - FORMULAIRE */}
          {activeTab === 'carte' && (
            <div className="dash-carte-section">
              <div className="dash-section-header">
                <div>
                  <h2>Configurer ma carte professionnelle</h2>
                  <p className="dash-section-subtitle">Complétez les informations pour votre profil public</p>
                </div>
              </div>

              <div className="dash-form-container">
                <form className="dash-carte-form">
                  {/* Photo de profil */}
                  <div className="dash-form-section">
                    <h3>Photo de profil</h3>
                    <div className="dash-photo-upload">
                      <div className="dash-photo-preview">
                        <img src={carteForm.photo} alt="Aperçu" />
                      </div>
                      <button type="button" className="dash-btn-secondary">
                        <FiCamera /> Modifier la photo
                      </button>
                    </div>
                  </div>

                  {/* Informations de base */}
                  <div className="dash-form-section">
                    <h3>Informations de base</h3>
                    <div className="dash-form-grid">
                      <div className="dash-form-group">
                        <label>Prénom *</label>
                        <input
                          type="text"
                          value={carteForm.prenom}
                          onChange={(e) => handleCarteFormChange('prenom', e.target.value)}
                        />
                      </div>
                      <div className="dash-form-group">
                        <label>Nom *</label>
                        <input
                          type="text"
                          value={carteForm.nom}
                          onChange={(e) => handleCarteFormChange('nom', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Spécialisation */}
                  <div className="dash-form-section">
                    <h3>Spécialisation</h3>
                    <div className="dash-form-group">
                      <label>Secteur d'activité (pour référencement uniquement)</label>
                      <select
                        value={carteForm.secteur}
                        onChange={(e) => handleCarteFormChange('secteur', e.target.value)}
                      >
                        <option>Informatique</option>
                        <option>Design</option>
                        <option>Marketing</option>
                        <option>Rédaction</option>
                        <option>Photographie</option>
                      </select>
                    </div>
                    <div className="dash-form-group">
                      <label>Spécialité (affichée sur la carte) *</label>
                      <input
                        type="text"
                        value={carteForm.specialite}
                        onChange={(e) => handleCarteFormChange('specialite', e.target.value)}
                        placeholder="Ex: Développeur Full Stack"
                      />
                    </div>
                  </div>

                  {/* Localisation */}
                  <div className="dash-form-section">
                    <h3>Localisation</h3>
                    <div className="dash-form-grid">
                      <div className="dash-form-group">
                        <label>Ville *</label>
                        <input
                          type="text"
                          value={carteForm.ville}
                          onChange={(e) => handleCarteFormChange('ville', e.target.value)}
                        />
                      </div>
                      <div className="dash-form-group">
                        <label>Pays *</label>
                        <input
                          type="text"
                          value={carteForm.pays}
                          onChange={(e) => handleCarteFormChange('pays', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Tarif */}
                  <div className="dash-form-section">
                    <h3>Tarif</h3>
                    <div className="dash-form-group">
                      <label>Tarif horaire (FCFA) *</label>
                      <input
                        type="number"
                        value={carteForm.tarifHoraire}
                        onChange={(e) => handleCarteFormChange('tarifHoraire', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Tags de référencement */}
                  <div className="dash-form-section">
                    <h3>Tags de référencement</h3>
                    <p className="dash-form-hint">Ces tags ne sont pas visibles sur votre carte mais aident au classement</p>
                    <div className="dash-tags-input">
                      <div className="dash-tags-list">
                        {carteForm.tags.map((tag, index) => (
                          <span key={index} className="dash-tag-item">
                            {tag}
                            <button type="button" onClick={() => handleTagRemove(tag)}>
                              <FiX />
                            </button>
                          </span>
                        ))}
                      </div>
                      <input
                        type="text"
                        placeholder="Ajouter un tag..."
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleTagAdd(e.target.value);
                            e.target.value = '';
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Disponibilité */}
                  <div className="dash-form-section">
                    <h3>Disponibilité</h3>
                    <label className="dash-toggle">
                      <input
                        type="checkbox"
                        checked={carteForm.disponible}
                        onChange={(e) => handleCarteFormChange('disponible', e.target.checked)}
                      />
                      <span className="dash-toggle-slider"></span>
                      <span className="dash-toggle-label">
                        {carteForm.disponible ? 'Disponible' : 'Indisponible'}
                      </span>
                    </label>
                  </div>

                  {/* Type de bouton */}
                  <div className="dash-form-section">
                    <h3>Bouton d'action sur votre carte</h3>
                    <p className="dash-form-hint">Choisissez le bouton qui apparaîtra sur votre carte publique</p>
                    <div className="dash-radio-group">
                      <label className="dash-radio">
                        <input
                          type="radio"
                          name="typeBouton"
                          value="contacter"
                          checked={carteForm.typeBouton === 'contacter'}
                          onChange={(e) => handleCarteFormChange('typeBouton', e.target.value)}
                        />
                        <span>Bouton "Contacter"</span>
                      </label>
                      <label className="dash-radio">
                        <input
                          type="radio"
                          name="typeBouton"
                          value="collaborer"
                          checked={carteForm.typeBouton === 'collaborer'}
                          onChange={(e) => handleCarteFormChange('typeBouton', e.target.value)}
                        />
                        <span>Bouton "Collaborer"</span>
                      </label>
                    </div>
                  </div>

                  <div className="dash-form-actions">
                    <button type="button" className="dash-btn-secondary">Annuler</button>
                    <button type="button" className="dash-btn-primary" onClick={handleSaveCarte}>
                      <FiSave /> Enregistrer les modifications
                    </button>
                  </div>
                </form>

                {/* Aperçu de la carte */}
                <div className="dash-carte-apercu">
                  <h3>Aperçu de votre carte</h3>
                  <div className="marketplace-card">
                    <div className="marketplace-badge">
                      <FiZap /> Freelance
                    </div>
                    <div className="marketplace-left">
                      <div className="marketplace-photo-wrapper">
                        <img src={carteForm.photo} alt={carteForm.prenom} />
                        <span className="marketplace-verified"><FiCheckCircle /></span>
                      </div>
                      <h3 className="marketplace-name">{carteForm.prenom} {carteForm.nom}</h3>
                      <p className="marketplace-specialite">{carteForm.specialite}</p>
                      <div className="marketplace-location">
                        <FiMapPin /> {carteForm.ville}, {carteForm.pays}
                      </div>
                      <div className="marketplace-rating">
                        {renderStars(freelance.note)}
                        <span>({freelance.nbAvis})</span>
                      </div>
                    </div>
                    <div className="marketplace-right">
                      <span className={`marketplace-dispo-badge ${carteForm.disponible ? 'disponible' : 'indisponible'}`}>
                        {carteForm.disponible ? 'Disponible' : 'Indisponible'}
                      </span>
                      <div className="marketplace-tarif">
                        <FiDollarSign />
                        <div>
                          <span className="marketplace-tarif-label">À partir de</span>
                          <span className="marketplace-tarif-value">{parseInt(carteForm.tarifHoraire).toLocaleString()} FCFA/h</span>
                        </div>
                      </div>
                      <div className="marketplace-actions">
                        {carteForm.typeBouton === 'contacter' && (
                          <button className="marketplace-btn-primary">
                            <FiMessageCircle /> Contacter
                          </button>
                        )}
                        {carteForm.typeBouton === 'collaborer' && (
                          <button className="marketplace-btn-primary">
                            <FaHandshake /> Collaborer
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ONGLET SERVICES */}
          {activeTab === 'services' && (
            <div className="dash-services-section">
              <div className="dash-section-header">
                <div>
                  <h2>Mes services</h2>
                  <p className="dash-section-subtitle">
                    {freelance.plan === 'gratuit' && `${services.length}/2 services créés (plan gratuit)`}
                    {freelance.plan === 'premium' && 'Services illimités (plan premium)'}
                  </p>
                </div>
                <button 
                  className="dash-btn-primary"
                  disabled={freelance.plan === 'gratuit' && services.length >= 2}
                >
                  <FiPlus /> Créer un service
                </button>
              </div>

              {freelance.plan === 'gratuit' && services.length >= 2 && (
                <div className="dash-alert-warning">
                  <FiZap />
                  <span>Limite atteinte ! Passez au plan premium pour créer plus de services.</span>
                  <button className="dash-btn-upgrade">Passer Premium</button>
                </div>
              )}

              <div className="dash-services-grid">
                {services.map(service => (
                  <div key={service.id} className="dash-service-card">
                    <div className="dash-service-image" style={{ backgroundImage: `url(${service.image})` }}>
                      <span className={`dash-service-status ${service.actif ? 'actif' : 'inactif'}`}>
                        {service.actif ? 'Actif' : 'Inactif'}
                      </span>
                    </div>
                    <div className="dash-service-content">
                      <h3>{service.titre}</h3>
                      <p>{service.description}</p>
                      <div className="dash-service-meta">
                        <span className="dash-service-prix">{service.prix.toLocaleString()} FCFA</span>
                        <span className="dash-service-delai">
                          <FiClock /> {service.delai}
                        </span>
                      </div>
                      <div className="dash-service-stats">
                        <span><FiEye /> {service.vues} vues</span>
                        <span><FiBriefcase /> {service.commandes} commandes</span>
                      </div>
                    </div>
                    <div className="dash-service-actions">
                      <button className="dash-icon-btn"><FiEdit3 /></button>
                      <button className="dash-icon-btn"><FiEye /></button>
                      <button className="dash-icon-btn danger"><FiTrash2 /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ONGLET POSTS */}
          {activeTab === 'posts' && (
            <div className="dash-posts-section">
              <div className="dash-section-header">
                <div>
                  <h2>Mes réalisations</h2>
                  <p className="dash-section-subtitle">Partagez vos meilleurs projets</p>
                </div>
                <button className="dash-btn-primary">
                  <FiPlus /> Ajouter une réalisation
                </button>
              </div>

              <div className="dash-posts-grid">
                {posts.map(post => (
                  <div key={post.id} className="dash-post-card">
                    {post.type === 'image' && (
                      <div className="dash-post-media">
                        <img src={post.medias[0]} alt={post.titre} />
                      </div>
                    )}
                    {post.type === 'link' && (
                      <div className="dash-post-link">
                        <FiLink />
                        <a href={post.url} target="_blank" rel="noopener noreferrer">{post.url}</a>
                      </div>
                    )}
                    <div className="dash-post-content">
                      <h3>{post.titre}</h3>
                      <p>{post.description}</p>
                      <div className="dash-post-footer">
                        <div className="dash-post-stats">
                          <span><FiHeart /> {post.likes}</span>
                          <span><FiMessageCircle /> {post.commentaires}</span>
                        </div>
                        <span className="dash-post-date">{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                    </div>
                    <button className="dash-post-more"><FiMoreVertical /></button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ONGLET COLLABORATIONS */}
          {activeTab === 'collaborations' && (
            <div className="dash-collab-section">
              <div className="dash-section-header">
                <div>
                  <h2>Mes collaborations</h2>
                  <p className="dash-section-subtitle">{collaborations.length} projets au total</p>
                </div>
              </div>

              <div className="dash-collab-grid">
                {collaborations.map(collab => (
                  <div key={collab.id} className="dash-collab-card">
                    <div className="dash-collab-header">
                      <img src={collab.clientPhoto} alt={collab.client} />
                      <div className="dash-collab-info">
                        <h3>{collab.titre}</h3>
                        <p>{collab.client}</p>
                      </div>
                      {getStatutBadge(collab.statut)}
                    </div>

                    {collab.statut === 'en_cours' && (
                      <>
                        <div className="dash-collab-progress">
                          <div className="dash-progress-bar">
                            <div className="dash-progress-fill" style={{ width: `${collab.progression}%` }}></div>
                          </div>
                          <span>{collab.progression}%</span>
                        </div>
                        <p className="dash-collab-next">
                          <FiTarget /> {collab.prochaineLivraison}
                        </p>
                      </>
                    )}

                    <div className="dash-collab-footer">
                      <span className="dash-collab-amount">
                        <FiDollarSign /> {collab.montant.toLocaleString()} FCFA
                      </span>
                    </div>

                    <button className="dash-btn-outline dash-btn-sm" onClick={() => navigate(`/collaboration/${collab.id}`)}>
                      Ouvrir l'espace projet
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ONGLET PAIEMENT */}
          {activeTab === 'paiement' && (
            <div className="dash-paiement-section">
              <div className="dash-section-header">
                <h2>Gestion des paiements</h2>
              </div>

              <div className="dash-subtabs">
                <button
                  className={`dash-subtab ${paiementSubTab === 'recus' ? 'active' : ''}`}
                  onClick={() => setPaiementSubTab('recus')}
                >
                  Paiements reçus
                </button>
                <button
                  className={`dash-subtab ${paiementSubTab === 'retraits' ? 'active' : ''}`}
                  onClick={() => setPaiementSubTab('retraits')}
                >
                  Retraits
                </button>
              </div>

              {paiementSubTab === 'recus' && (
                <div className="dash-transactions-list">
                  {transactions.recues.map(trans => (
                    <div key={trans.id} className="dash-transaction-card">
                      <div className="dash-transaction-info">
                        <h4>{trans.projet}</h4>
                        <p>Client : {trans.client}</p>
                        <span className="dash-transaction-date">{new Date(trans.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="dash-transaction-right">
                        <span className="dash-transaction-amount">+{trans.montant.toLocaleString()} FCFA</span>
                        {getStatutBadge(trans.statut)}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {paiementSubTab === 'retraits' && (
                <div className="dash-transactions-list">
                  <button className="dash-btn-primary dash-btn-full">
                    <FiDownload /> Demander un retrait
                  </button>
                  {transactions.retraits.map(retrait => (
                    <div key={retrait.id} className="dash-transaction-card">
                      <div className="dash-transaction-info">
                        <h4>{retrait.methode}</h4>
                        <p>{retrait.numero}</p>
                        <span className="dash-transaction-date">{new Date(retrait.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="dash-transaction-right">
                        <span className="dash-transaction-amount withdraw">-{retrait.montant.toLocaleString()} FCFA</span>
                        {getStatutBadge(retrait.statut)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ONGLET FACTURATION */}
          {activeTab === 'facturation' && (
            <div className="dash-facturation-section">
              <div className="dash-section-header">
                <h2>Facturation et abonnement</h2>
              </div>

              <div className="dash-plan-card">
                <div className="dash-plan-current">
                  <h3>Plan actuel : <span className="dash-plan-name">{freelance.plan === 'gratuit' ? 'Gratuit' : 'Premium'}</span></h3>
                  <p>Mode de facturation : Commission de 10% sur chaque projet</p>
                </div>
                <button className="dash-btn-primary">
                  <FaRocket /> Passer au plan Premium
                </button>
              </div>

              <div className="dash-plan-comparison">
                <div className="dash-plan-col">
                  <h4>Plan Gratuit</h4>
                  <ul>
                    <li><FiCheckCircle /> Commission de 10%</li>
                    <li><FiCheckCircle /> 2 services maximum</li>
                    <li><FiCheckCircle /> Support standard</li>
                  </ul>
                </div>
                <div className="dash-plan-col premium">
                  <h4>Plan Premium</h4>
                  <p className="dash-plan-price">15 000 FCFA/mois</p>
                  <ul>
                    <li><FiCheckCircle /> Aucune commission</li>
                    <li><FiCheckCircle /> Services illimités</li>
                    <li><FiCheckCircle /> Badge vérifié</li>
                    <li><FiCheckCircle /> Support prioritaire</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ONGLET PARAMÈTRES */}
          {activeTab === 'parametres' && (
            <div className="dash-parametres-section">
              <div className="dash-section-header">
                <h2>Paramètres du compte</h2>
              </div>

              <div className="dash-param-menu">
                <button
                  className={`dash-param-menu-item ${parametresSubTab === 'notifications' ? 'active' : ''}`}
                  onClick={() => setParametresSubTab('notifications')}
                >
                  <FiBell /> Notifications
                </button>
                <button
                  className={`dash-param-menu-item ${parametresSubTab === 'profil' ? 'active' : ''}`}
                  onClick={() => setParametresSubTab('profil')}
                >
                  <FiUser /> Profil
                </button>
                <button
                  className={`dash-param-menu-item ${parametresSubTab === 'securite' ? 'active' : ''}`}
                  onClick={() => setParametresSubTab('securite')}
                >
                  <FiLock /> Sécurité
                </button>
                <button
                  className={`dash-param-menu-item ${parametresSubTab === 'langue' ? 'active' : ''}`}
                  onClick={() => setParametresSubTab('langue')}
                >
                  <FiGlobe /> Langue
                </button>
              </div>

              {parametresSubTab === 'notifications' && (
                <div className="dash-param-content">
                  <h3>Gérer les notifications</h3>
                  <div className="dash-notif-settings">
                    {Object.keys(notifSettings).map(key => (
                      <label key={key} className="dash-toggle">
                        <input
                          type="checkbox"
                          checked={notifSettings[key]}
                          onChange={(e) => setNotifSettings({ ...notifSettings, [key]: e.target.checked })}
                        />
                        <span className="dash-toggle-slider"></span>
                        <span className="dash-toggle-label">
                          {key === 'email' && 'Notifications par e-mail'}
                          {key === 'collaborations' && 'Alertes de collaborations'}
                          {key === 'nouveautes' && 'Nouvelles fonctionnalités'}
                          {key === 'transactions' && 'Transactions financières'}
                          {key === 'messages' && 'Messages'}
                          {key === 'evaluations' && 'Notes et évaluations'}
                          {key === 'verification' && 'Vérification de compte'}
                          {key === 'activation' && 'Activation de compte'}
                          {key === 'signalement' && 'Signalement de compte'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {parametresSubTab === 'profil' && (
                <div className="dash-param-content">
                  <h3>Configuration du profil</h3>
                  <div className="dash-notif-settings">
                    {Object.keys(profilSettings).map(key => (
                      <label key={key} className="dash-toggle">
                        <input
                          type="checkbox"
                          checked={profilSettings[key]}
                          onChange={(e) => setProfilSettings({ ...profilSettings, [key]: e.target.checked })}
                        />
                        <span className="dash-toggle-slider"></span>
                        <span className="dash-toggle-label">
                          {key === 'afficherPosition' && 'Afficher ma position sur mon profil public'}
                          {key === 'rechercheLocalisation' && 'Apparaitre dans les résultats de recherche par localisation'}
                          {key === 'afficherTags' && 'Afficher les tags de spécialisation sur le profil public'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {parametresSubTab === 'securite' && (
                <div className="dash-param-content">
                  <h3>Sécurité et mot de passe</h3>
                  <div className="dash-form-group">
                    <label>Mot de passe actuel</label>
                    <input type="password" />
                  </div>
                  <div className="dash-form-group">
                    <label>Nouveau mot de passe</label>
                    <input type="password" />
                  </div>
                  <div className="dash-form-group">
                    <label>Confirmer le mot de passe</label>
                    <input type="password" />
                  </div>
                  <button className="dash-btn-primary">Modifier le mot de passe</button>

                  <hr style={{ margin: '30px 0' }} />

                  <h3>Authentification à double facteur</h3>
                  <label className="dash-toggle">
                    <input type="checkbox" />
                    <span className="dash-toggle-slider"></span>
                    <span className="dash-toggle-label">Activer l'authentification à deux facteurs</span>
                  </label>
                </div>
              )}

              {parametresSubTab === 'langue' && (
                <div className="dash-param-content">
                  <h3>Langue de navigation</h3>
                  <div className="dash-radio-group">
                    <label className="dash-radio">
                      <input type="radio" name="langue" value="fr" defaultChecked />
                      <span>Français</span>
                    </label>
                    <label className="dash-radio">
                      <input type="radio" name="langue" value="en" />
                      <span>English</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          )}

       {/* ONGLET PUBLICITÉ */}
{activeTab === 'publicite' && (
  <div className="dash-publicite-section">
    {/* Stats globales */}
    <div className="dash-section">
      <h2>Budget & Performance ce mois</h2>
      <div className="dash-stats-grid">
        <div className="dash-stat-card primary">
          <div className="dash-stat-icon">
            <FiEye />
          </div>
          <div className="dash-stat-content">
            <span className="dash-stat-label">Impressions</span>
            <span className="dash-stat-value">{publiciteStats.impressions.toLocaleString()}</span>
          </div>
        </div>
        <div className="dash-stat-card secondary">
          <div className="dash-stat-icon">
            <FiUser />
          </div>
          <div className="dash-stat-content">
            <span className="dash-stat-label">Vues profil</span>
            <span className="dash-stat-value">{publiciteStats.vuesProfil}</span>
          </div>
        </div>
        <div className="dash-stat-card accent">
          <div className="dash-stat-icon">
            <FiMessageCircle />
          </div>
          <div className="dash-stat-content">
            <span className="dash-stat-label">Messages</span>
            <span className="dash-stat-value">{publiciteStats.messagesRecus}</span>
          </div>
        </div>
      </div>
    </div>

    {/* Section campagnes */}
    <div className="dash-section">
      <div className="dash-section-header">
        <h2>Mes campagnes</h2>
        <button className="dash-btn-primary">
          <FiPlus /> Créer une campagne
        </button>
      </div>

      {/* Sous-onglets */}
      <div className="dash-subtabs">
        <button
          className={`dash-subtab ${pubSubTab === 'actives' ? 'active' : ''}`}
          onClick={() => setPubSubTab('actives')}
        >
          Actives ({campagnes.filter(c => c.statut === 'active').length})
        </button>
        <button
          className={`dash-subtab ${pubSubTab === 'pause' ? 'active' : ''}`}
          onClick={() => setPubSubTab('pause')}
        >
          En pause ({campagnes.filter(c => c.statut === 'pause').length})
        </button>
      </div>

      {/* Liste des campagnes */}
      <div className="dash-services-grid">
        {campagnes
          .filter(c => pubSubTab === 'actives' ? c.statut === 'active' : c.statut === 'pause')
          .map(campagne => (
            <div key={campagne.id} className="dash-service-card">
              <div className="dash-service-content">
                <h3>{campagne.nom}</h3>
                <p>{campagne.type}</p>
                
                <div className="dash-service-meta">
                  <span className="dash-service-prix">{campagne.impressions.toLocaleString()} impressions</span>
                  <span className="dash-service-delai">
                    <FiTrendingUp /> {campagne.ctr}% CTR
                  </span>
                </div>
                
                <div className="dash-service-stats">
                  <span><FiMousePointer /> {campagne.clics} clics</span>
                </div>

                <div className="dash-project-progress">
                  <div className="dash-progress-bar">
                    <div 
                      className="dash-progress-fill" 
                      style={{ width: `${(campagne.budgetDepense / campagne.budgetTotal) * 100}%` }}
                    ></div>
                  </div>
                  <span>{Math.round((campagne.budgetDepense / campagne.budgetTotal) * 100)}%</span>
                </div>
                
                <p className="dash-project-next">
                  Budget: {campagne.budgetDepense.toLocaleString()} / {campagne.budgetTotal.toLocaleString()} F
                </p>
              </div>
              
              <div className="dash-service-actions">
                <button className="dash-icon-btn"><FiBarChart2 /></button>
                <button className="dash-icon-btn"><FiEdit3 /></button>
                <button className="dash-icon-btn danger"><FiTrash2 /></button>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
)}

{/* ONGLET ANALYTICS */}
{activeTab === 'analytics' && (
  <div className="dash-analytics-section">
    {/* Période */}
    <div className="dash-analytics-header">
      <h2>Vue d'ensemble</h2>
      <select className="dash-analytics-period">
        <option>Derniers 30 jours</option>
        <option>Derniers 7 jours</option>
        <option>Ce mois</option>
        <option>Mois dernier</option>
      </select>
    </div>

    {/* Métriques clés */}
    <div className="dash-analytics-metrics">
      <div className="dash-analytics-metric-card">
        <div className="dash-analytics-metric-icon primary">
          <FiEye />
        </div>
        <div className="dash-analytics-metric-content">
          <span className="dash-analytics-metric-value">{analyticsData.vuesProfil.toLocaleString()}</span>
          <span className="dash-analytics-metric-label">Vues profil</span>
          <span className="dash-analytics-metric-trend success">
            <FiTrendingUp /> +23%
          </span>
        </div>
      </div>

      <div className="dash-analytics-metric-card">
        <div className="dash-analytics-metric-icon secondary">
          <FiGlobe />
        </div>
        <div className="dash-analytics-metric-content">
          <span className="dash-analytics-metric-value">{analyticsData.paysActifs}</span>
          <span className="dash-analytics-metric-label">Pays actifs</span>
          <span className="dash-analytics-metric-trend success">
            <FiTrendingUp /> +2
          </span>
        </div>
      </div>

      <div className="dash-analytics-metric-card">
        <div className="dash-analytics-metric-icon accent">
          <FiTrendingUp />
        </div>
        <div className="dash-analytics-metric-content">
          <span className="dash-analytics-metric-value">+{analyticsData.visibilite}%</span>
          <span className="dash-analytics-metric-label">Visibilité</span>
          <span className="dash-analytics-metric-trend success">
            🚀
          </span>
        </div>
      </div>

      <div className="dash-analytics-metric-card">
        <div className="dash-analytics-metric-icon warning">
          <FiBriefcase />
        </div>
        <div className="dash-analytics-metric-content">
          <span className="dash-analytics-metric-value">{analyticsData.projetsRemportes}</span>
          <span className="dash-analytics-metric-label">Projets</span>
          <span className="dash-analytics-metric-trend success">
            <FiTrendingUp /> +3
          </span>
        </div>
      </div>

      <div className="dash-analytics-metric-card">
        <div className="dash-analytics-metric-icon">
          <FiPercent />
        </div>
        <div className="dash-analytics-metric-content">
          <span className="dash-analytics-metric-value">{analyticsData.tauxConversion}%</span>
          <span className="dash-analytics-metric-label">Taux conv.</span>
          <span className="dash-analytics-metric-trend success">
            <FiTrendingUp /> +1.2%
          </span>
        </div>
      </div>
    </div>

    {/* Sous-onglets Analytics */}
    <div className="dash-param-menu">
      <button
        className={`dash-param-menu-item ${analyticsSubTab === 'apercu' ? 'active' : ''}`}
        onClick={() => setAnalyticsSubTab('apercu')}
      >
        <FiGrid /> Aperçu
      </button>
      <button
        className={`dash-param-menu-item ${analyticsSubTab === 'geo' ? 'active' : ''}`}
        onClick={() => setAnalyticsSubTab('geo')}
      >
        <FiGlobe /> Géographie
      </button>
      <button
        className={`dash-param-menu-item ${analyticsSubTab === 'realisations' ? 'active' : ''}`}
        onClick={() => setAnalyticsSubTab('realisations')}
      >
        <FiImage /> Réalisations
      </button>
      <button
        className={`dash-param-menu-item ${analyticsSubTab === 'services' ? 'active' : ''}`}
        onClick={() => setAnalyticsSubTab('services')}
      >
        <FiBriefcase /> Services
      </button>
    </div>

    {/* Contenu Aperçu */}
    {analyticsSubTab === 'apercu' && (
      <div className="dash-analytics-content">
        {/* Visibilité profil */}
        <div className="dash-analytics-card">
          <h3><FiEye /> Visibilité du profil</h3>
          <div className="dash-analytics-stats-row">
            <div className="dash-analytics-stat-item">
              <span className="dash-analytics-stat-number">{analyticsData.vuesProfil.toLocaleString()}</span>
              <span className="dash-analytics-stat-text">Vues totales</span>
            </div>
            <div className="dash-analytics-stat-item">
              <span className="dash-analytics-stat-number">{analyticsData.tempsMoyen}</span>
              <span className="dash-analytics-stat-text">Temps moyen</span>
            </div>
            <div className="dash-analytics-stat-item">
              <span className="dash-analytics-stat-number">{analyticsData.tauxRebond}%</span>
              <span className="dash-analytics-stat-text">Taux de rebond</span>
              <span className="dash-analytics-badge success">Excellent</span>
            </div>
          </div>
        </div>

        {/* Sources de trafic */}
        <div className="dash-analytics-card">
          <h3><FiPieChart /> Sources de trafic</h3>
          <div className="dash-analytics-sources">
            {sourcesTrafic.map((source, index) => (
              <div key={index} className="dash-analytics-source-item">
                <div className="dash-analytics-source-info">
                  <span className="dash-analytics-source-name">{source.source}</span>
                  <span className="dash-analytics-source-value">{source.vues} vues ({source.pct}%)</span>
                </div>
                <div className="dash-analytics-source-bar">
                  <div 
                    className="dash-analytics-source-fill" 
                    style={{ width: `${source.pct}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}

    {/* Contenu Géographie */}
    {analyticsSubTab === 'geo' && (
      <div className="dash-analytics-content">
        <div className="dash-analytics-card full">
          <h3><FiMap /> Répartition géographique</h3>
          <div className="dash-analytics-map-placeholder">
            <FiMap />
            <p>Carte interactive des visiteurs</p>
          </div>
          <div className="dash-analytics-countries">
            {topPays.map((pays, index) => (
              <div key={index} className="dash-analytics-country-item">
                <div className="dash-analytics-country-rank">{index + 1}</div>
                <div className="dash-analytics-country-info">
                  <span className="dash-analytics-country-flag">{pays.flag}</span>
                  <div>
                    <span className="dash-analytics-country-name">{pays.pays}</span>
                    <span className="dash-analytics-country-cities">{pays.villes.join(', ')}</span>
                  </div>
                </div>
                <div className="dash-analytics-country-stats">
                  <span className="dash-analytics-country-vues">{pays.vues} vues</span>
                  <div className="dash-analytics-country-bar">
                    <div 
                      className="dash-analytics-country-fill" 
                      style={{ width: `${pays.pct}%` }}
                    ></div>
                  </div>
                  <span className="dash-analytics-country-pct">{pays.pct}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}

    {/* Contenu Réalisations */}
    {analyticsSubTab === 'realisations' && (
      <div className="dash-analytics-content">
        <div className="dash-analytics-card full">
          <h3><FiImage /> Performance des réalisations</h3>
          <p className="dash-analytics-subtitle">Top 5 de vos réalisations les plus vues</p>
          <div className="dash-analytics-realisations">
            {topRealisations.map((real, index) => (
              <div key={real.id} className="dash-analytics-realisation-item">
                <div className="dash-analytics-realisation-rank">#{index + 1}</div>
                <div className="dash-analytics-realisation-info">
                  <h4>{real.titre}</h4>
                  <div className="dash-analytics-realisation-stats">
                    <span><FiEye /> {real.vues} vues</span>
                    <span><FiMousePointer /> {real.clics} clics</span>
                    <span><FiMessageCircle /> {real.messages} messages</span>
                    <span><FiBriefcase /> {real.projets} projets</span>
                  </div>
                </div>
                <button className="dash-btn-outline dash-btn-sm">Voir détails</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}

    {/* Contenu Services */}
    {analyticsSubTab === 'services' && (
      <div className="dash-analytics-content">
        <div className="dash-analytics-card full">
          <h3><FiBriefcase /> Performance des services</h3>
          <div className="dash-analytics-services-table">
            <div className="dash-analytics-table-header">
              <span>Service</span>
              <span>Prix</span>
              <span>Vues</span>
              <span>Devis</span>
              <span>Conv.</span>
            </div>
            {performanceServices.map((service, index) => (
              <div key={index} className="dash-analytics-table-row">
                <span className="dash-analytics-service-name">{service.service}</span>
                <span className="dash-analytics-service-prix">{service.prix.toLocaleString()} F</span>
                <span>{service.vues}</span>
                <span>{service.devis}</span>
                <span className="dash-analytics-service-conv">{service.conversion}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}

    {/* Export */}
    <div className="dash-analytics-export">
      <button className="dash-btn-secondary">
        <FiDownload /> Exporter PDF
      </button>
      <button className="dash-btn-secondary">
        <FiFileText /> Exporter CSV
      </button>
    </div>
  </div>
)}
        </div>
      </main>
    </div>
  );
}

export default DashboardFreelance;