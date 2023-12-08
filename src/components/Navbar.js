import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "./css/Navbar.css"; // Importez le fichier CSS pour les styles de la barre de navigation

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
      <div className="menu-icon" onClick={handleMobileMenuToggle}>
        &#9776;
      </div>

      <div
        className={`nav-links ${isMobileMenuOpen ? "show-mobile-menu" : ""}`}
      >
        <Link to="/" className="nav-link">
          Accueil
        </Link>
        <Link to="/user-guide" className="nav-link">
          Guide de l'Utilisateur
        </Link>
        <Link to="/developer-guide" className="nav-link">
          Guide du Développeur
        </Link>
      </div>

      <div className="spacer"></div>

      <a
        href="https://github.com/Pierre-AntoineBaizeau/web-speech-api"
        className="nav-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dépôt GitHub <FaGithub />
      </a>
    </nav>
  );
};

export default Navbar;
